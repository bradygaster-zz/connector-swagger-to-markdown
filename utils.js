var fs = require('fs');
var connectors = require('./connectors.json');

var resolveReference = function(document, $ref) {
    if ($ref) {
        var reference = document,
            paths = $ref.split('/');
        var nextSectionIndex = 1;
        if (!paths || paths.length <= 1 || paths[0] !== '#') {
            // For now assume that the reference lives in #/definitions
            reference = document.definitions;
            nextSectionIndex = 0;
        }

        paths.slice(nextSectionIndex).forEach(path => {
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

var firstOrNull = function(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            return array[i];
        }
    }
    return null;
};

var where = function(array, predicate) {
    var results = [];
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            results.push(array[i]);
        }
    }
    return results;
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

var refToLink = function(str) {
    if (!str) {
        return str;
    }

    var headerText = str.replace('#/definitions/', '');
    var headerLink = headerText.replace(/_/g, '').toLowerCase();
    return '[' + headerText + ']' + '(#' + headerLink + ')';
};

var getFileExpression = function(array) {
    if (array) {
        if (array.length === 1) {
            return array[0];
        } else if (array.length > 1) {
            return '{' + array.join(',') + '}';
        }
    }
    return 'DUMMY_EXPRESSION';
};

var getConnectorConfig = function() {
    connectors.gncpalaExpr = getFileExpression(connectors.gncpala);
    connectors.aaptCodelessExpr = getFileExpression(connectors.aaptCodeless);
    connectors.aaptSaasExpr = getFileExpression(connectors.aaptSaas);
    return connectors;
};

module.exports = {
    firstOrNull: function(array, predicate) {
        return firstOrNull(array, predicate);
    },
    where: function(array, predicate) {
        return where(array, predicate);
    },
    max: function(array) {
        return Math.max.apply(null, array);
    },
    registerHelpers: function(handlebars) {
        handlebars.registerHelper('if_empty', ifEmptyHelper);
        handlebars.registerHelper('if_cond', logicalHelper);
    },
    resolveReference: function(document, ref) {
        return resolveReference(document, ref);
    },
    refToLink: function(str) {
        return refToLink(str);
    },
    getConnectorConfig: function() {
        return getConnectorConfig();
    }
};
