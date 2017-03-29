var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');
var glob = require('glob').Glob;
var DOMParser = require('xmldom').DOMParser;
var utils = require('./utils.js');
var templateFile = fs.readFileSync('./templates/connector-doc-page.mustache').toString();
var operationTemplate = fs.readFileSync('./templates/operation-partial.mustache').toString();
var schemaTemplate = fs.readFileSync('./templates/schema-partial.mustache').toString();
var schemaTypeTemplate = fs.readFileSync('./templates/schema-type-partial.mustache').toString();
var connectionParametersTemplate = fs.readFileSync('./templates/connection-parameters.mustache').toString();
var throttlingTemplate = fs.readFileSync('./templates/throttling-partial.mustache').toString();

utils.registerHelpers(handlebars);
handlebars.registerPartial('operation', operationTemplate);
handlebars.registerPartial('schema', schemaTemplate);
handlebars.registerPartial('connectionParameters', connectionParametersTemplate);
handlebars.registerPartial('throttling', throttlingTemplate);

// Since this partial is used in a table, remove the new lines
handlebars.registerPartial('schema-type', schemaTypeTemplate.replace(/(\r\n|\n|\r)/gm,""));

fs.writeFileSync('docs/TOC.md', '');

glob("Connectors/*/apiDefinition.swagger.json", function (er, files) {
    files.forEach(function (file) {
        try {
            generateDocumentation(file);
        } catch (ex) {
            console.log('error in ' + file + ': ' + ex);
        }
    });
});

function generateDocumentation(swaggerFilename) {
    var swaggerPath = path.parse(swaggerFilename);
    var connectorShortname = swaggerPath.dir.split('/')[1];

    // Read connector assets
    var swagger = JSON.parse(fs.readFileSync(swaggerFilename).toString());
    var connectionParameters = getConnectionParameters(swaggerFilename);
    var policy = getPolicy(swaggerFilename);
    var customSection = getCustomSection(swaggerFilename);
    var connector = {
        'swagger': swagger,
        'connectionParameters': connectionParameters,
        'policy': policy,
        'customSection': customSection
    };
    preprocessConnector(connector);
    var preprocessDirectory = swaggerFilename.replace('apiDefinition.swagger.json', '');
    var processedSwagger = JSON.stringify(connector.swagger, null, '\t');
    dropFile(preprocessDirectory, 'processed.apiDefinition.swagger.json', processedSwagger);

    var template = handlebars.compile(templateFile);
    var result = template(connector);
    var directory = swaggerFilename.replace('Connectors', 'docs').replace('apiDefinition.swagger.json', '');
    var markdownFilename = 'index.md';
    dropFile(directory, markdownFilename, result);
    console.log(directory + markdownFilename);
    addToTableOfContents(swagger.info.title, connectorShortname);
}

function preprocessConnector(connector) {
    utils.preprocessSwagger(connector.swagger);

    // Remove parameters of type 'oauthSetting'
    if (connector.connectionParameters) {
        Object.keys(connector.connectionParameters).forEach(function(connParamKey) {
            var connParam = connector.connectionParameters[connParamKey];
            if (connParam && connParam.type === 'oauthSetting') {
                delete connector.connectionParameters[connParamKey];
            }
        });

        // For simplicity, if there are no parameters remove the object
        if (Object.keys(connector.connectionParameters).length == 0) {
            connector.connectionParameters = null;
        }
    }
}

function addToTableOfContents(connectorName, connectorShortname) {
    var link = connectorShortname + '/index.md';
    var tocEntry = '\n# [' + connectorName + '](' + link + ')\n';
    fs.appendFileSync('docs/TOC.md', tocEntry);
}

function getConnectionParameters(swaggerFilename) {
    try {
        var connParamsFile = swaggerFilename.replace('apiDefinition.swagger.json', 'connectionParameters.json');
        var connectionParameters = JSON.parse(fs.readFileSync(connParamsFile).toString());
        return connectionParameters;
    } catch (ex) {
        // It's expected that some connectors don't have connection parameters
        if (ex.code !== 'ENOENT') {
            throw ex;
        }
        return null;
    }
}

function getPolicy(swaggerFilename) {
    var policyFilename = swaggerFilename.replace('apiDefinition.swagger.json', 'policy.xml');
    var policyContents = fs.readFileSync(policyFilename).toString();
    var policy = new DOMParser().parseFromString(policyContents, 'text/xml');

    // For simplicity, only extract the elements from the policy that we need
    var rateLimitTag = policy.getElementsByTagName('rate-limit-by-key')[0];
    var rateLimit = rateLimitTag ? {
        'calls': rateLimitTag.getAttribute('calls'),
        'renewal-period': rateLimitTag.getAttribute('renewal-period')
    } : null;
    var setHeaderTags = policy.getElementsByTagName('set-header');
    var retryAfterValue = null;
    var retryAfterTag = utils.firstOrNull(setHeaderTags, function(tag) {
        return utils.firstOrNull(tag.attributes, function(attr) {
            return attr.nodeValue === 'retry-after';
        }) !== null;
    });
    if (retryAfterTag) {
        var retryAfterValueNode = utils.firstOrNull(retryAfterTag.childNodes, function(child) {
            return child.firstChild && child.firstChild.nodeValue;
        });
        if (retryAfterValueNode) retryAfterValue = retryAfterValueNode.firstChild.nodeValue;
    }
    var policyJson = {
        'rate-limit-by-key': rateLimit,
        'retry-after': retryAfterValue
    };
    return policyJson;
}

function getCustomSection(swaggerFilename) {
    try {
        var customSectionFilename = swaggerFilename.replace('apiDefinition.swagger.json', 'intro.md');
        var customSection = fs.readFileSync(customSectionFilename).toString();
        return customSection;
    } catch (ex) {
        // It's expected that some connectors don't have custom sections
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