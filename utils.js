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
    var headerLink = headerText.replace(' ', '-').toLowerCase();
    return '[' + headerText + ']' + '(#' + headerLink + ')';
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
    }
};
