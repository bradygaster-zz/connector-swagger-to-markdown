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
    // Read connector assets
    var swagger = JSON.parse(fs.readFileSync(swaggerFilename).toString());
    if (!swagger.info || !swagger.info['x-ms-api-annotation'] || swagger.info['x-ms-api-annotation'].status !== "Production") {
        return;
    }
    utils.resolveParameterReferences(swagger);
    var connectionParameters = getConnectionParameters(swaggerFilename);
    var policy = getPolicy(swaggerFilename);
    var connector = {
        'swagger': swagger,
        'connectionParameters': connectionParameters,
        'policy': policy
    };

    var template = handlebars.compile(templateFile);
    var result = template(connector);
    var markdownFilename = swaggerFilename.replace('apiDefinition.swagger.json', 'apiDefinition.md');
    console.log(markdownFilename);
    fs.writeFileSync(markdownFilename, result);
}

function getConnectionParameters(swaggerFilename) {
    try {
        var connParamsFile = swaggerFilename.replace('apiDefinition.swagger.json', 'connectionParameters.json');
        connectionParameters = JSON.parse(fs.readFileSync(connParamsFile).toString());
    } catch (ex) {
        // It's expected that some connectors don't have connection parameters
        if (ex.code !== 'ENOENT') {
            throw err;
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
    var rateLimit = {
        'calls': rateLimitTag.getAttribute('calls'),
        'renewal-period': rateLimitTag.getAttribute('renewal-period')
    };
    var setHeaderTags = policy.getElementsByTagName('set-header');
    var retryAfterTag = utils.firstOrNull(setHeaderTags, function(tag) {
        return utils.firstOrNull(tag.attributes, function(attr) {
            return attr.nodeValue === 'retry-after';
        }) !== null;
    });
    var policyJson = {
        'rate-limit-by-key': rateLimit,
        'retry-after': retryAfterTag.childNodes[1].firstChild.nodeValue
    };
    return policyJson;
}
