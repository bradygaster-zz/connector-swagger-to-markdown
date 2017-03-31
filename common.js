"use strict";

var utils = require('./utils.js');

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
        this.definitions = {};
    }
};

var generateDoc = function(swagger) {
    var doc = new ConnectorDoc();

    doc.title = swagger.info.title;
    doc.status = swagger.info['x-ms-api-annotation'].status;
    doc.definitions = generateDefinitions(swagger);

    return doc;
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
        if (schema['x-ms-visibility'] !== 'internal') {
            var property = new DefinitionProperty();
            property.summary = schema['x-ms-summary'] ? schema['x-ms-summary'] : schemaKey;
            property.type = schema['format'] ? schema['format'] : schema['type'];
            property.description = schema['description'];
            property.path = jsonPath;
            docProperties.push(property);
        }
    }
};

module.exports = {
    generateDoc: function(swagger) {
        return generateDoc(swagger);
    }
};
