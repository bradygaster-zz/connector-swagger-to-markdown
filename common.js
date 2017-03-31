"use strict";

var utils = require('./utils.js');

class Parameter {
    constructor() {
        this.summary = '';
        this.type = '';
        this.description = '';
        this.required = '';
    }
};

class Operation {
    constructor() {
        this.summary = '';
        this.description = '';
        this.operationId = '';
        this.parameters = [];
    }
};

class DefinitionProperty {
    constructor() {
        this.summary = '';
        this.type = '';
        this.description = '';
        this.path = '';
    }
};

class Definition {
    constructor() {
        this.description = '';
        this.properties = [];
    }
};

class ConnectorDoc {
    constructor() {
        this.title = '';
        this.status = '';
        this.actions = [];
        this.definitions = {};
    }
};

var generateDoc = function(swagger) {
    var doc = new ConnectorDoc();

    doc.title = swagger.info.title;
    doc.status = swagger.info['x-ms-api-annotation'].status;
    doc.actions = generateActions(swagger);
    doc.definitions = generateDefinitions(swagger);

    return doc;
};

var generateActions = function(swagger) {
    var actions = [];

    Object.keys(swagger.paths).forEach(function(pathKey) {
        var path = swagger.paths[pathKey];
        Object.keys(path).forEach(function(operationKey) {
            var operation = path[operationKey];
            if (!operation['x-ms-trigger'] && operation['x-ms-visibility'] !== 'internal') {
                var docOperation = generateOperation(swagger, operation);
                actions.push(docOperation);
            }
        });
    });

    return actions;
};

var generateOperation = function(swagger, operation) {
    var docOperation = new Operation();
    docOperation.summary = operation.summary;
    docOperation.description = operation.description;
    docOperation.operationId = operation.operationId;

    var docParameters = [];
    var parameters = operation.parameters;
    if (parameters) {
        for (var i = 0; i < parameters.length; i++) {
            var docParameter = new Parameter();
            var parameter = parameters[i];
            if (parameter.$ref) {
                parameter = utils.resolveReference(swagger, parameter.$ref);
            }

            if (parameter['x-ms-visibility'] !== 'internal') {
                if (parameter.in === 'body') {
                    var bodyParameters = flattenBodyParameter(swagger, parameter);
                    docParameters = docParameters.concat(bodyParameters);
                } else {
                    docParameter.summary = parameter['x-ms-summary'] ? parameter['x-ms-summary'] : parameter.name;
                    docParameter.type = parameter.format ? parameter.format : parameter.type;
                    docParameter.description = parameter.description;
                    docParameter.required = parameter.required;
                    docParameters.push(docParameter);
                }
            }
        }
    }

    docOperation.parameters = docParameters;
    return docOperation;
};

var flattenBodyParameter = function(swagger, parameter) {
    var schema = parameter.schema;
    if (schema.$ref) {
        schema = utils.resolveReference(swagger, schema.$ref);
    }
    var docBodyParams = [];
    if (schema.type === 'array' || schema.type === 'object') {
        flattenParameterSchema(swagger, schema, '', false, docBodyParams);
    } else {
        var docParameter = new Parameter();
        docParameter = parameter['x-ms-summary'] ? parameter['x-ms-summary'] : parameter.name;
        docParameter.type = schema.format ? schema.format : schema.type,
        docParameter.description = parameter.description,
        docParameter.required = parameter.required;
        docBodyParams.push(docParameter);
    }
    return docBodyParams;
};

var flattenParameterSchema = function(swagger, schema, schemaKey, isRequired, docParameters) {
    if (schema.$ref) {
        schema = utils.resolveReference(swagger, schema.$ref);
    }
    if (schema.type === 'array') {
        flattenParameterSchema(swagger, schema.items, '', false, docParameters);
    } else if (schema.type === 'object') {
        Object.keys(schema.properties).forEach(function(propKey) {
            var property = schema.properties[propKey];
            var isPropRequired = schema.required && schema.required.indexOf(propKey) > -1;
            flattenParameterSchema(swagger, property, propKey, isPropRequired, docParameters);
        });
    } else {
        if (schema['x-ms-visibility'] !== 'internal') {
            var docParameter = new Parameter();
            docParameter.summary = schema['x-ms-summary'] ? schema['x-ms-summary'] : schemaKey;
            docParameter.type = schema.format ? schema.format : schema.type,
            docParameter.description = schema.description,
            docParameter.required = isRequired ? true : false;
            docParameters.push(docParameter);
        }
    }
};

var generateDefinitions = function(swagger) {
    var docDefinitions = new Object();
    Object.keys(swagger.definitions).forEach(function(definitionKey) {
        var definition = swagger.definitions[definitionKey];
        var docDefinition = new Definition();
        var docProperties = [];
        
        if (definition.type === 'object') {
            flattenDefinitionSchema(swagger, definition, '', '', docProperties);
        } else if (definition.type === 'array') {
            flattenDefinitionSchema(swagger, definition.items, '', '', docProperties);
        } else {
            throw 'Not Implemented';
        }

        if (docProperties.length > 0) {
            docDefinition.description = definition.description;
            docDefinition.properties = docProperties;
            docDefinitions[definitionKey] = docDefinition;
        }
    });
    return Object.keys(docDefinitions).length > 0 ? docDefinitions : null;
};

var flattenDefinitionSchema = function(swagger, schema, schemaKey, jsonPath, docProperties) {
    if (schema['x-ms-visibility'] === 'internal') {
        return;
    }

    if (schema.type === 'object') {
        Object.keys(schema.properties).forEach(function(propKey) {
            var property = schema.properties[propKey];
            var propertyPath = jsonPath && jsonPath !== '' ? jsonPath + '.' + propKey : propKey;
            flattenDefinitionSchema(swagger, property, propKey, propertyPath, docProperties);
        });
    } else if (schema.type === 'array') {
        if (schema.items.$ref) {
            var resolvedSchema = utils.resolveReference(swagger, schema.items.$ref);
            var property = new DefinitionProperty();
            property.summary = schema['x-ms-summary'];
            property.type = 'Array of ' + utils.refToLink(schema.items.$ref);
            property.description = schema['description'];
            property.path = jsonPath;
            docProperties.push(property);
        }
    } else {
        var property = new DefinitionProperty();
        property.summary = schema['x-ms-summary'] ? schema['x-ms-summary'] : schemaKey;
        property.type = schema['format'] ? schema['format'] : schema['type'];
        property.description = schema['description'];
        property.path = jsonPath;
        docProperties.push(property);
    }
};

module.exports = {
    generateDoc: function(swagger) {
        return generateDoc(swagger);
    }
};
