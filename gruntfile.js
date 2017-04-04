var connectors = require('./connectors.json');
var aaptCodelessList = connectors.aaptCodeless.length > 1 ? '{' + connectors.aaptCodeless.join(',') + '}' : connectors.aaptCodeless[0];
var aaptSaasList = connectors.aaptSaas.length > 1 ? '{' + connectors.aaptSaas.join(',') + '}' : connectors.aaptSaas[0];
var gncpalaList = connectors.gncpala.length > 1 ? '{' + connectors.gncpala.join(',') + '}' : connectors.gncpala[0];

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
                    // AAPT-Connectors (Codeless)
                    {
                        expand: true,
                        cwd: '../AAPT-connectors/src/codeless/',
                        src: [
                            aaptCodelessList + '/apiDefinition.swagger.json',
                            aaptCodelessList + '/connectionParameters.json',
                            aaptCodelessList + '/resourceTemplate.json',
                            aaptCodelessList + '/policy.xml',
                            aaptCodelessList + '/icon.png',
                            aaptCodelessList + '/intro.md',
                            aaptCodelessList + '/media/*.png'
                        ],
                        filter: 'isFile',
                        dest: 'Connectors'
                    },
                    {
                        expand: true,
                        cwd: '../AAPT-connectors/src/codeless/',
                        src: [
                            aaptCodelessList + '/icon.png',
                            aaptCodelessList + '/media/*.png'
                        ],
                        filter: 'isFile',
                        dest: 'docs'
                    },
                    // GNCPALA (codeless)
                    {
                        expand: true,
                        cwd: '../Connectors/src/Connectors/',
                        src: [
                            gncpalaList + '/apiDefinition.swagger.json',
                            gncpalaList + '/connectionParameters.json',
                            gncpalaList + '/resourceTemplate.json',
                            gncpalaList + '/policy.xml',
                            gncpalaList + '/icon.png',
                            gncpalaList + '/intro.md',
                            gncpalaList + '/media/*.png'
                        ],
                        filter: 'isFile',
                        dest: 'Connectors'
                    },
                    {
                        expand: true,
                        cwd: '../Connectors/src/Connectors/',
                        src: [
                            gncpalaList + '/icon.png',
                            gncpalaList + '/media/*.png'
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