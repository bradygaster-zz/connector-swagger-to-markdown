"use strict";

var utils = require('./utils.js');

class ConnectorDoc {
    constructor() {
        this.title = '';
        this.status = '';
    }
};

var generateDoc = function(swagger) {
    var doc = new ConnectorDoc();

    doc.title = swagger.info.title;
    doc.status = swagger.info['x-ms-api-annotation'].status;

    return doc;
};

module.exports = {
    generateDoc: function(swagger) {
        return generateDoc(swagger);
    }
};
