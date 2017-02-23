var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');
var glob = require('glob').Glob;
var templateFile = fs.readFileSync('./templates/connector-doc-page.mustache').toString();

handlebars.registerHelper('ifType', (type, options) => {
    if (type == 'string' || type == 'securestring') {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

glob("Connectors/*/apiDefinition.swagger.json", function (er, files) {
    files.forEach(function (file) {
        try {
            var connector = file.split('/')[1];
            var data = JSON.parse(
                fs.readFileSync(file).toString()
            );
            var template = handlebars.compile(templateFile);
            var result = template(data);
            var pth = path.join('Connectors', connector, 'apiDefinition.md');
            fs.writeFileSync(pth, result);
        } catch (ex) {
            console.log('error: ' + ex);
        }
    });
});
