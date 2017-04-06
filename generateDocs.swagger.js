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

class SingleSchema {
    constructor() {
        this.summary = '';
        this.type = '';
        this.description = '';
    }
};

class Response {
    constructor() {
        this.properties = [];
        this.singleSchema = null;
        this.isDynamic = false;
    }
};

class Operation {
    constructor() {
        this.summary = '';
        this.description = '';
        this.operationId = '';
        this.parameters = [];
        this.response = null;
    }
};

class SchemaProperty {
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
        this.singleSchema = null;
    }
};

class ConnectorDoc {
    constructor() {
        this.title = '';
        this.status = '';
        this.version = '';
        this.description = '';
        this.actions = [];
        this.definitions = {};
        this.customLinks = [];
    }
};

var generateSwaggerDoc = function(swagger) {
    var doc = new ConnectorDoc();

    doc.title = swagger.info.title;
    doc.status = swagger.info['x-ms-api-annotation'].status;
    doc.version = swagger.info.version;
    doc.description = swagger.info.description;
    doc.actions = generateActions(swagger);
    doc.triggers = generateTriggers(swagger);
    doc.definitions = generateDefinitions(swagger);
    doc.customLinks = swagger['x-ms-docs'];

    return doc;
};

var generateActions = function(swagger) {
    var actions = [];

    Object.keys(swagger.paths).forEach(function(pathKey) {
        var path = swagger.paths[pathKey];
        Object.keys(path).forEach(function(operationKey) {
            var operation = path[operationKey];
            if (operationKey !== 'x-ms-notification-content' && // This is used for adding webhook details
                !operation['x-ms-trigger'] && operation['x-ms-visibility'] !== 'internal') {
                var docOperation = generateOperation(swagger, pathKey, operation);
                actions.push(docOperation);
            }
        });
    });

    return actions;
};

var generateTriggers = function(swagger) {
    var triggers = [];

    Object.keys(swagger.paths).forEach(function(pathKey) {
        var path = swagger.paths[pathKey];
        Object.keys(path).forEach(function(operationKey) {
            var operation = path[operationKey];
            if (operationKey !== 'x-ms-notification-content' && // This is used for adding webhook details
                operation['x-ms-trigger'] && operation['x-ms-visibility'] !== 'internal') {
                var docOperation = generateOperation(swagger, pathKey, operation);
                triggers.push(docOperation);
            }
        });
    });

    return triggers;
};

var generateOperation = function(swagger, pathKey, operation) {
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
                    if (parameter.schema && isDynamicSchema(swagger, parameter.schema)) {
                        docParameter.summary = parameter['x-ms-summary'] ? parameter['x-ms-summary'] : parameter.name;
                        docParameter.type = 'dynamic';
                        docParameter.description = parameter.description;
                        docParameter.required = parameter.required;
                        docParameters.push(docParameter);
                    } else {
                        var bodyParameters = flattenBodyParameter(swagger, parameter);
                        docParameters = docParameters.concat(bodyParameters);
                    }
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

    var docResponse = null;
    var responseKeys = Object.keys(operation.responses);
    if (responseKeys.length > 0) {
        var firstResponse = operation.responses[responseKeys[0]];
        var webhookResponse = swagger.paths[pathKey]['x-ms-notification-content'];
        var schema = webhookResponse ? webhookResponse.schema : firstResponse.schema;
        if (schema) {
            if (isDynamicSchema(swagger, schema)) {
                docResponse = new Response();
                docResponse.isDynamic = true;
            } else {
                var $ref = schema.$ref;
                if ($ref) {
                    schema = utils.resolveReference(swagger, $ref);
                }

                // Handle batch trigger response
                if (operation['x-ms-trigger'] === 'batch' && schema.type === 'array' && schema.items && schema.items.$ref) {
                    schema = schema.items;
                    $ref = schema.$ref;
                    if ($ref) {
                        schema = utils.resolveReference(swagger, $ref);
                    }
                }

                if ((schema.type === 'object' && Object.keys(schema.properties).length === 0) ||
                    (schema.type === 'string' && !schema.description && !schema['x-ms-summary'])) {
                    // This is usually used to mean an empty response
                } else if ($ref) {
                    // $ref at the top level
                    docResponse = new Response();
                    var reference = new SingleSchema();
                    reference.summary = utils.refToLink($ref);
                    reference.type = schema.type;
                    reference.description = schema.description;
                    docResponse.singleSchema = reference;
                } else if (schema.type === 'object' || schema.type === 'array') {
                    // Inline object/array
                    var docProperties = [];
                    docResponse = new Response();
                    flattenDefinitionSchema(swagger, schema, '', '', docProperties);
                    if (schema.type === 'array' && schema.items && schema.items.$ref) {
                        var itemsSchema = new SingleSchema();
                        var items = docProperties[0];
                        itemsSchema.summary = items.summary;
                        itemsSchema.type = items.type;
                        itemsSchema.description = items.description
                        docResponse.singleSchema = itemsSchema;
                    } else {
                        docResponse.properties = docProperties;
                    }
                } else {
                    // Inline schema of primitive type
                    docResponse = new Response();
                    var singleSchema = new SingleSchema();
                    singleSchema.summary = schema['x-ms-summary'];
                    singleSchema.type = schema.format ? schema.format : schema.type;
                    singleSchema.description = schema.description;
                    docResponse.singleSchema = singleSchema;
                }
            }
        }
    }
    docOperation.response = docResponse;

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
        docParameter.summary = parameter['x-ms-summary'] ? parameter['x-ms-summary'] : parameter.name;
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
        var arraySummary = schema['x-ms-summary'] ? schema['x-ms-summary'] : schemaKey;
        flattenParameterSchema(swagger, schema.items, arraySummary, false, docParameters);
    } else if (schema.type === 'object') {
        if (!schema.properties) {
            // Ignore objects with no properties for parameter purposes
        } else {
            Object.keys(schema.properties).forEach(function(propKey) {
                var property = schema.properties[propKey];
                var isPropRequired = schema.required && schema.required.indexOf(propKey) > -1;
                flattenParameterSchema(swagger, property, propKey, isPropRequired, docParameters);
            });
        }
    } else if (schema['x-ms-visibility'] !== 'internal') {
        var docParameter = new Parameter();
        docParameter.summary = schema['x-ms-summary'] ? schema['x-ms-summary'] : schemaKey;
        docParameter.type = schema.format ? schema.format : schema.type,
        docParameter.description = schema.description,
        docParameter.required = isRequired ? true : false;
        docParameters.push(docParameter);
    }
};

var generateDefinitions = function(swagger) {
    var docDefinitions = new Object();
    Object.keys(swagger.definitions).forEach(function(definitionKey) {
        var definition = swagger.definitions[definitionKey];
        if (isDynamicSchema(swagger, definition)) {
            return;
        }

        var docDefinition = new Definition();
        var docProperties = [];
        var singleSchema = null;
        
        if (definition.type === 'object') {
            flattenDefinitionSchema(swagger, definition, '', '', docProperties);
        } else if (definition.type === 'array') {
            flattenDefinitionSchema(swagger, definition.items, '', '', docProperties);
        } else if (definition.type === 'string' && !definition.description && !definition['x-ms-summary']) {
            // Usually used to mean an empty definition
        } else {
            flattenDefinitionSchema(swagger, definition, '', '', docProperties);
            singleSchema = docProperties[0];
            docProperties = [];
        }

        if (singleSchema || docProperties.length > 0) {
            docDefinition.description = definition.description;
            if (docProperties.length > 0) docDefinition.properties = docProperties;
            if (singleSchema) docDefinition.singleSchema = singleSchema;
            docDefinitions[definitionKey] = docDefinition;
        }
    });
    return Object.keys(docDefinitions).length > 0 ? docDefinitions : null;
};

var flattenDefinitionSchema = function(swagger, schema, schemaKey, jsonPath, docProperties) {
    if (schema['x-ms-visibility'] === 'internal') {
        return;
    }

    if (schema.$ref) {
        var resolvedSchema = utils.resolveReference(swagger, schema.$ref);
        var property = new SchemaProperty();
        property.summary = utils.refToLink(schema.$ref);
        property.type = resolvedSchema.type;
        property.description = resolvedSchema.description;
        property.path = jsonPath;
        docProperties.push(property);
        return;
    }

    if (schema.type === 'object' && schema.properties) {
        Object.keys(schema.properties).forEach(function(propKey) {
            var property = schema.properties[propKey];
            var propertyPath = jsonPath && jsonPath !== '' ? jsonPath + '.' + propKey : propKey;
            flattenDefinitionSchema(swagger, property, propKey, propertyPath, docProperties);
        });
    } else if (schema.type === 'array') {
        if (schema.items.$ref) {
            var resolvedSchema = utils.resolveReference(swagger, schema.items.$ref);
            var property = new SchemaProperty();
            property.summary = schema['x-ms-summary'] ? schema['x-ms-summary'] : schemaKey;
            property.type = 'Array of ' + utils.refToLink(schema.items.$ref);
            property.description = schema['description'];
            property.path = jsonPath;
            docProperties.push(property);
        } else {
            var property = new SchemaProperty();
            property.summary = schema['x-ms-summary'] ? schema['x-ms-summary'] : schemaKey;
            property.type = 'array of ' + (schema.items.format ? schema.items.format : schema.items.type);
            property.description = schema['description'];
            property.path = jsonPath;
            docProperties.push(property);
            flattenDefinitionSchema(swagger, schema.items, '', jsonPath, docProperties);
        }
    } else {
        var property = new SchemaProperty();
        property.summary = schema['x-ms-summary'] ? schema['x-ms-summary'] : schemaKey;
        property.type = schema['format'] ? schema['format'] : schema['type'];
        property.description = schema['description'];
        property.path = jsonPath;
        docProperties.push(property);
    }
};

var isDynamicSchema = function(swagger, schema, visitedRefs) {
    if (schema['x-ms-dynamic-schema']) {
        return true;
    }

    if (!visitedRefs) visitedRefs = {};

    if (schema.$ref && !visitedRefs[schema.$ref]) {
        visitedRefs[schema.$ref] = true;
        schema = utils.resolveReference(swagger, schema.$ref);
        return isDynamicSchema(swagger, schema, visitedRefs);
    } else if (schema.type === 'object' && schema.properties) {
        var propKeys = Object.keys(schema.properties);
        for (var i = 0; i < propKeys.length; i++) {
            var property = schema.properties[propKeys[i]];
            if (isDynamicSchema(swagger, property, visitedRefs)) {
                return true;
            }
        }
    } else if (schema.type === 'array' && schema.items) {
        return isDynamicSchema(swagger, schema.items, visitedRefs);
    }

    return false;
}

module.exports = {
    generateSwaggerDoc: function(swagger) {
        return generateSwaggerDoc(swagger);
    }
};
