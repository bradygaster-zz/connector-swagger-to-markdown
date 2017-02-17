var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');
var glob = require('glob').Glob;
var templateFile = fs.readFileSync('./templates/connection-parameters.mustache').toString();

handlebars.registerHelper('ifType', (type, options) => {
    if (type == 'string' || type == 'securestring') {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

glob("Connectors/*/connectionParameters.json", function (er, files) {
    files.forEach(function (file) {
        try {
            var data = JSON.parse(
                fs.readFileSync(file).toString()
            );

            var template = handlebars.compile(templateFile);
            var result = template(data);
            var connector = file.split('/')[1];
            var pth = path.join('output', 'Connectors', connector, 'connectionParameters.md');
            fs.writeFileSync(pth, result);
        } catch (ex) {
            console.log('error: ' + ex);
        }
    });
});