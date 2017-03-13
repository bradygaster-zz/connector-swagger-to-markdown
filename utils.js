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

var firstOrNull = function(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            return array[i];
        }
    }
    return null;
};

module.exports = {
    resolveParameterReferences: function(swagger) {
        resolveParameterReferences(swagger);
    },
    firstOrNull: function(array, predicate) {
        return firstOrNull(array, predicate);
    }
};
