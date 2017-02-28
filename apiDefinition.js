var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');
var glob = require('glob').Glob;
var templateFile = fs.readFileSync('./templates/connector-doc-page.mustache').toString();
var operationTemplate = fs.readFileSync('./templates/operation-partial.mustache').toString();
var schemaTemplate = fs.readFileSync('./templates/schema-partial.mustache').toString();
var schemaTypeTemplate = fs.readFileSync('./templates/schema-type-partial.mustache').toString();;

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

// Since this partial is used in a table, remove the new lines
handlebars.registerPartial('schema-type', schemaTypeTemplate.replace(/(\r\n|\n|\r)/gm,""));

glob("Connectors/*/apiDefinition.swagger.json", function (er, files) {
    files.forEach(function (file) {
        try {
            var connector = file.split('/')[1];

            var swaggerContents = fs.readFileSync(file).toString();
            var swagger = JSON.parse(swaggerContents);
            resolveParameterReferences(swagger);
            
            var template = handlebars.compile(templateFile);
            var result = template(swagger);
            var pth = path.join('Connectors', connector, 'apiDefinition.md');
            console.log(pth);
            fs.writeFileSync(pth, result);
        } catch (ex) {
            console.log('error: ' + ex);
        }
    });
});

function resolveParameterReferences(swagger) {
    Object.keys(swagger.definitions).forEach(function(definitionKey) {
        var definition = swagger.definitions[definitionKey];
        definition['x-ms-markdown-link'] = definitionKey.toLowerCase();
    });

    Object.keys(swagger.paths).forEach(function(pathKey) {
        var path = swagger.paths[pathKey];
        Object.keys(path).forEach(function(operationKey) {
            var operation = path[operationKey];
            var parameters = operation.parameters;
            if (parameters) {
                for (var i = 0; i < parameters.length; i++) {
                    if (parameters[i].$ref) {
                        parameters[i] = resolveReference(swagger, parameters[i].$ref);
                    }
                }
            }

            Object.keys(operation.responses).forEach(function(responseKey) {
                
            });
        });
    });

}

function resolveReference(document, $ref) {
    if ($ref) {
        var reference = document,
            paths = $ref.split('/');
        if (!paths || paths.length <= 1 || paths[0] !== '#') {
            return null;
        }

        paths.slice(1).forEach(path => {
            if (Array.isArray(reference)) {
                reference = reference.filter(element => element.name === path)[0];
            } else {
                reference = reference[path];
            }
        });
        return reference;
    } else {
        return null;
    }
}