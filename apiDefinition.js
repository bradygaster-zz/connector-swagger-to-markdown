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

handlebars.registerHelper('ifType', (type, options) => {
    if (type == 'string' || type == 'securestring') {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

handlebars.registerHelper('if_eq', function(a, b, opts) {
    if(a === b)
        return opts.fn(this);
    else
        return opts.inverse(this);
});

handlebars.registerHelper('if_empty', function(obj, opts) {
    if (obj && Object.keys(obj).length === 0)
        return opts.fn(this);
    else
        return opts.inverse(this);
});

handlebars.registerHelper('refToLink', function(str) {
    var headerText = str.replace('#/definitions/', '');
    var headerLink = headerText.replace(' ', '-').toLowerCase();
    return '[' + headerText + ']' + '(#' + headerLink + ')';
});

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
    utils.resolveParameterReferences(swagger);
    utils.resolveResponseReferences(swagger);
    var connectionParameters = getConnectionParameters(swaggerFilename);
    var policy = getPolicy(swaggerFilename);
    var customSection = getCustomSection(swaggerFilename);
    var connector = {
        'swagger': swagger,
        'connectionParameters': connectionParameters,
        'policy': policy,
        'customSection': customSection
    };

    var template = handlebars.compile(templateFile);
    var result = template(connector);
    var directory = swaggerFilename.replace('Connectors', 'docs').replace('apiDefinition.swagger.json', '');
    var markdownFilename = 'index.md';
    dropMarkdown(directory, markdownFilename, result);
    console.log(directory + markdownFilename);
    addToTableOfContents(swagger.info.title, connectorShortname);
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

        // Remove parameters of type 'oauthSetting'
        Object.keys(connectionParameters).forEach(function(connParamKey) {
            var connParam = connectionParameters[connParamKey];
            if (connParam && connParam.type === "oauthSetting") {
                delete connectionParameters[connParamKey];
            }
        });
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

function dropMarkdown(directory, filename, markdown) {
    try {
        fs.mkdirSync(directory);
    } catch (ex) {
        if (ex.code !== 'EEXIST') throw ex;
    }
    fs.writeFileSync(directory + filename, markdown);
}