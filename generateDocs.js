var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');
var glob = require('glob').Glob;
var DOMParser = require('xmldom').DOMParser;
var swaggerDocGen = require('./generateDocs.swagger.js');
var utils = require('./utils.js');
var baseTOC = fs.readFileSync('./docs/baseTOC.md').toString();
var templateFile = fs.readFileSync('./templates/connector-doc-page.mustache').toString();
var operationTemplate = fs.readFileSync('./templates/operation-partial.mustache').toString();
var connectionParametersTemplate = fs.readFileSync('./templates/connection-parameters.mustache').toString();
var throttlingTemplate = fs.readFileSync('./templates/throttling-partial.mustache').toString();

utils.registerHelpers(handlebars);
handlebars.registerPartial('operation', operationTemplate);
handlebars.registerPartial('connectionParameters', connectionParametersTemplate);
handlebars.registerPartial('throttling', throttlingTemplate);

fs.writeFileSync('docs/TOC.md', baseTOC);

glob("Connectors/*/apiDefinition.swagger.json", function (er, files) {
    files.forEach(function (file) {
        // try {
            generateDocumentation(file);
        // } catch (ex) {
            // console.log('error in ' + file + ': ' + ex);
        // }
    });
});

function generateDocumentation(swaggerFilename) {
    var swaggerPath = path.parse(swaggerFilename);
    var connectorName = swaggerPath.dir.split('/')[1];
    var connectorArtifacts = readConnectorArtifacts(connectorName);

    var connectionParameters = getConnectionParameters(connectorArtifacts);
    var swaggerDoc = swaggerDocGen.generateSwaggerDoc(connectorArtifacts.swagger);
    var limits = getLimits(connectorArtifacts);
    var connectorDoc = {
        'customSection': connectorArtifacts.customSection,
        'connectionParameters': connectionParameters,
        'swaggerDoc': swaggerDoc,
        'limits': limits
    };

    var debugOutputFile = 'Connectors/' + connectorName + '/';
    var connectorDocJson = JSON.stringify(connectorDoc, null, '\t');
    dropFile(debugOutputFile, 'docs.json', connectorDocJson);

    var template = handlebars.compile(templateFile);
    var result = template(connectorDoc);
    var directory = 'docs/' + connectorName + '/';
    var markdownFilename = 'index.md';
    dropFile(directory, markdownFilename, result);
    console.log(directory + markdownFilename);
    addToTableOfContents(connectorArtifacts.swagger.info.title, connectorName);
}

function readConnectorArtifacts(connectorName) {
    var baseConnectorPath = 'Connectors/' + connectorName + '/';
    var artifacts = {
        'icon': null,
        'swagger': null,
        'resourceTemplate': null,
        'connectionParameters': null,
        'policy': null,
        'customSection': null
    };

    var hasIcon = fs.existsSync(baseConnectorPath + 'icon.png');
    artifacts.icon = hasIcon;

    var swaggerContents = readFile(baseConnectorPath + 'apiDefinition.swagger.json');
    artifacts.swagger = JSON.parse(swaggerContents);

    var resourceTemplateContents = tryReadFile(baseConnectorPath + 'resourceTemplate.json');
    artifacts.resourceTemplate = resourceTemplateContents;

    var connParamsContents = tryReadFile(baseConnectorPath + 'connectionParameters.json');
    if (connParamsContents) {
        artifacts.connectionParameters = JSON.parse(connParamsContents);
    }

    var policyContents = tryReadFile(baseConnectorPath + 'policy.xml');
    if (!policyContents) policyContents = tryReadFile(baseConnectorPath + 'policies.xml');
    if (!policyContents) policyContents = tryReadFile(baseConnectorPath + 'Deployment/policy.xml');
    if (!policyContents) policyContents = tryReadFile(baseConnectorPath + 'Deployment/policies.xml');
    if (policyContents) {
        var xmlParser = new DOMParser();
        artifacts.policy = xmlParser.parseFromString(policyContents, 'text/xml');
    }

    var customSection = tryReadFile(baseConnectorPath + 'intro.md');
    artifacts.customSection = customSection;

    return artifacts;
}

function addToTableOfContents(connectorName, connectorShortname) {
    var link = connectorShortname + '/index.md';
    var tocEntry = '\n## [' + connectorName + '](' + link + ')\n';
    fs.appendFileSync('docs/TOC.md', tocEntry);
}

function getConnectionParameters(artifacts) {
    var connectionParameters = null;
    // Remove parameters of type 'oauthSetting'
    if (artifacts.connectionParameters) {
        connectionParameters = {};
        Object.keys(artifacts.connectionParameters).forEach(function(connParamKey) {
            var connParam = artifacts.connectionParameters[connParamKey];
            if (connParam && connParam.type !== 'oauthSetting') {
                connectionParameters[connParamKey] = artifacts.connectionParameters[connParamKey];
            }
        });

        // For simplicity, if there are no parameters remove the object
        if (Object.keys(connectionParameters).length == 0) {
            connectionParameters = null;
        }
    }
    return connectionParameters;
}

function getLimits(artifacts) {
    var retryAfterValue = null;
    var rateLimit = null;
    if (artifacts.policy) {
        var policy = artifacts.policy;
        var rateLimitTag = policy.getElementsByTagName('rate-limit-by-key')[0];
        if (rateLimitTag) {
            rateLimit = {
                'calls': rateLimitTag.getAttribute('calls'),
                'renewal-period': rateLimitTag.getAttribute('renewal-period')
            };
        }

        var retryAfterValues = [];
        var setHeaderTags = policy.getElementsByTagName('set-header');
        var retryAfterTags = utils.where(setHeaderTags, function(tag) {
            return utils.firstOrNull(tag.attributes, function(attr) {
                return attr.nodeValue === 'retry-after';
            }) !== null;
        });
        retryAfterTags.forEach(function(tag) {
            var retryAfterValueNode = utils.firstOrNull(tag.childNodes, function(child) {
                return child.firstChild && child.firstChild.nodeValue;
            });
            if (retryAfterValueNode) retryAfterValues.push(retryAfterValueNode.firstChild.nodeValue);
        });
        if (retryAfterValues.length > 0) {
            retryAfterValue = utils.max(retryAfterValues);
        }
    }

    var connectionLimit = null;
    if (artifacts.resourceTemplate) {
        var connLimitRegex = /"connectionLimits"\s*:\s*{\s*"\*":\s*(\d+)\s*}/g;
        var match = connLimitRegex.exec(artifacts.resourceTemplate);
        if (match && match.length > 0) {
            connectionLimit = match[1];
        }
    }

    var limits = {
        'rate-limit-by-key': rateLimit,
        'retry-after': retryAfterValue,
        'connections': connectionLimit
    };
    return limits;
}

function readFile(filename) {
    var fileContents = fs.readFileSync(filename).toString();
    fileContents = fileContents.replace(/^\uFEFF/, ''); // Strip BOM if any
    return fileContents;
}

function tryReadFile(filename) {
    try {
        var fileContents = readFile(filename);
        return fileContents;
    } catch (ex) {
        if (ex.code !== 'ENOENT') {
            throw ex;
        }
        return null;
    }
}

function dropFile(directory, filename, content) {
    try {
        fs.mkdirSync(directory);
    } catch (ex) {
        if (ex.code !== 'EEXIST') throw ex;
    }
    fs.writeFileSync(directory + filename, content);
}