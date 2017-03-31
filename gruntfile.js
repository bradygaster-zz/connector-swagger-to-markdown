var docReadyConnectors = [
    'GoogleCalendar',
    'MsnWeather',
    'Todoist'
];
var whitelistExpression = docReadyConnectors.length > 1 ? '{' + docReadyConnectors.join(',') + '}' : docReadyConnectors[0];
console.log('Generating docs for: ' + whitelistExpression);

module.exports = (grunt) => {

    grunt.loadNpmTasks('grunt-mustache-render');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-execute');

    grunt.registerTask('default', [
        'clean:initClean',
        'copy:connectors',
        'execute'
    ]);

    grunt.initConfig({
        clean: {
            initClean: [
                'Connectors',
                'docs/*/',
            ]
        },
        copy: {
            connectors: {
                files: [
                    {
                        expand: true,
                        cwd: '../AAPT-connectors/src/codeless/',
                        src: [
                            whitelistExpression + '*/apiDefinition.swagger.json',
                            whitelistExpression + '*/connectionParameters.json',
                            whitelistExpression + '*/resourceTemplate.json',
                            whitelistExpression + '*/policy.xml',
                            whitelistExpression + '*/icon.png',
                            whitelistExpression + '*/intro.md',
                            whitelistExpression + '*/media/*.png'
                        ],
                        filter: 'isFile',
                        dest: 'Connectors'
                    },
                    {
                        expand: true,
                        cwd: '../AAPT-connectors/src/codeless/',
                        src: [
                            whitelistExpression + '*/icon.png',
                            whitelistExpression + '*/media/*.png'
                        ],
                        filter: 'isFile',
                        dest: 'docs'
                    }
                ]
            }
        },
        execute: {
            target: {
                src: 'apiDefinition.js'
            }
        }
    });
};