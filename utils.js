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

var resolveParameterReferences = function(swagger) {
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

var firstOrNull = function(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            return array[i];
        }
    }
    return null;
};

var ifTypeHelper = function(type, options) {
    if (type == 'string' || type == 'securestring') {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
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
    resolveParameterReferences: function(swagger) {
        resolveParameterReferences(swagger);
    },
    firstOrNull: function(array, predicate) {
        return firstOrNull(array, predicate);
    },
    resolveResponseReferences: function(swagger) {
        resolveResponseReferences(swagger);
    },
    registerHelpers: function(handlebars) {
        handlebars.registerHelper('refToLink', refToLinkHelper);
        handlebars.registerHelper('if_empty', ifEmptyHelper);
        handlebars.registerHelper('if_cond', logicalHelper);
        handlebars.registerHelper('ifType', ifTypeHelper);
    }
};
