var resolveReference = function(document, $ref) {
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
};

var flattenSchema = function(swagger, schema, isRequired) {
    if (schema.$ref) {
        schema = resolveReference(swagger, schema.$ref);
    }
    if (schema.type === 'array') {
        return flattenSchema(schema.items);
    } else if (schema.type === 'object') {
        var flattenedProperties = [];
        Object.keys(schema.properties).forEach(function(propKey) {
            var property = schema.properties[propKey];
            var isPropRequired = schema.required && schema.required.indexOf(propKey) > -1;
            flattenedProperties = flattenedProperties.concat(flattenSchema(swagger, property, isPropRequired));
        });
        return flattenedProperties;
    } else {
        schema['required'] = isRequired ? true : false;
        return schema;
    }
};

var flattenBodyParameter = function(swagger, parameter) {
    var schema = parameter.schema;
    if (schema.$ref) {
        schema = resolveReference(swagger, schema.$ref);
    }
    var params = [];
    if (schema.type === 'array' || schema.type === 'object') {
        params = flattenSchema(swagger, schema);
    } else {
        var param = {
            'x-ms-summary': parameter['x-ms-summary'],
            'type': schema['type'],
            'description': parameter['description'],
            'required': parameter['required'],
        };
        params.concat(param);
    }
    return params;
};

var preprocessOperations = function(swagger) {
    Object.keys(swagger.paths).forEach(function(pathKey) {
        var path = swagger.paths[pathKey];
        Object.keys(path).forEach(function(operationKey) {
            var operation = path[operationKey];
            if (operation['x-ms-visibility'] === 'internal') {
                delete path[operationKey];
            }
        });
    });
};

var resolveParameterReferences = function(swagger) {
    Object.keys(swagger.paths).forEach(function(pathKey) {
        var path = swagger.paths[pathKey];
        Object.keys(path).forEach(function(operationKey) {
            var operation = path[operationKey];
            var parameters = operation.parameters;
            var newParameters = [];
            if (parameters) {
                for (var i = 0; i < parameters.length; i++) {
                    var newParam = parameters[i];
                    if (parameters[i].$ref) {
                        newParam = resolveReference(swagger, parameters[i].$ref);
                    }
                    if (newParam.in === 'body') {
                        var bodyParameters = flattenBodyParameter(swagger, parameters[i]);
                        newParameters = newParameters.concat(bodyParameters);
                    } else {
                        newParameters.push(newParam);
                    }
                }
            }
            operation.parameters = newParameters;
        });
    });
};

var resolveResponseReferences = function(swagger) {
    Object.keys(swagger.paths).forEach(function(pathKey) {
        var path = swagger.paths[pathKey];
        Object.keys(path).forEach(function(operationKey) {
            var operation = path[operationKey];
            var responses = operation.responses;
            Object.keys(responses).forEach(function(responseKey) {
                var response = responses[responseKey];
                if (response && response.schema && response.schema.$ref) {
                    var definition = resolveReference(swagger, response.schema.$ref);
                    var visibility = definition['x-ms-visibility'];
                    if (visibility === 'internal') {
                        response.schema = null;
                    } else {
                        response.schema.type = definition.type;
                        response.schema.description = definition.description;
                        response.schema['x-ms-visibility'] = definition['x-ms-visibility'];
                    }
                }
            });
        });
    });
};

var preprocessSchema = function(schema, schemaKey) {
    if (!schema['x-ms-summary']) {
        schema['x-ms-summary'] = schemaKey;
    }

    if (schema.type === 'object') {
        Object.keys(schema.properties).forEach(function(propKey) {
            var property = schema.properties[propKey];
            preprocessSchema(property, propKey);
        });
    }
};

var preprocessDefinitions = function(swagger) {
    Object.keys(swagger.definitions).forEach(function(definitionKey) {
        var definition = swagger.definitions[definitionKey];
        if (!definition['x-ms-summary']) {
            definition['x-ms-summary'] = definitionKey;
        }
        preprocessSchema(definition);
    });
};

var firstOrNull = function(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            return array[i];
        }
    }
    return null;
};

var logicalHelper = function (v1, operator, v2, options) {
    var value = null;
    switch (operator) {
        case '==':  value = v1 == v2;   break;
        case '===': value = v1 === v2;  break;
        case '!=':  value = v1 != v2;   break;
        case '!==': value = v1 !== v2;  break;
        case '<':   value = v1 < v2;    break;
        case '<=':  value = v1 <= v2;   break;
        case '>':   value = v1 > v2;    break;
        case '>=':  value = v1 >= v2;   break;
        case '&&':  value = v1 && v2;   break;
        case '||':  value = v1 || v2;   break;
        default: throw 'Invalid operator used with ifCond: ' + operator;
    }
    return value ? options.fn(this) : options.inverse(this);
}

var ifEmptyHelper = function(obj, opts) {
    if (obj && Object.keys(obj).length === 0)
        return opts.fn(this);
    else
        return opts.inverse(this);
};

var refToLinkHelper = function(str) {
    var headerText = str.replace('#/definitions/', '');
    var headerLink = headerText.replace(' ', '-').toLowerCase();
    return '[' + headerText + ']' + '(#' + headerLink + ')';
};

module.exports = {
    preprocessSwagger: function(swagger) {
        preprocessOperations(swagger);
        resolveParameterReferences(swagger);
        resolveResponseReferences(swagger);
        preprocessDefinitions(swagger);
    },
    firstOrNull: function(array, predicate) {
        return firstOrNull(array, predicate);
    },
    registerHelpers: function(handlebars) {
        handlebars.registerHelper('refToLink', refToLinkHelper);
        handlebars.registerHelper('if_empty', ifEmptyHelper);
        handlebars.registerHelper('if_cond', logicalHelper);
    }
};
