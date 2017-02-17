var fs = require('fs');
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
        console.log('---------------\n' + file + '\n---------------');

        try {
            var data = JSON.parse(
                fs.readFileSync(file).toString()
            );

            var template = handlebars.compile(templateFile);
            var result = template(data);

            console.log(result);
        } catch (ex) {
            console.log('error: ' + ex);
        }
    });
});