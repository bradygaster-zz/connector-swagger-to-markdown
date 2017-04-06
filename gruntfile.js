var connectors = require('./connectors.json');
var utils = require('./utils.js');
var config = utils.getConnectorConfig();

module.exports = (grunt) => {

    grunt.loadNpmTasks('grunt-mustache-render');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-execute');

    grunt.registerTask('default', [
        'clean:initClean',
        'copy:connectors',
        'execute:generateDocs'
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
                            config.aaptCodelessExpr + '/apiDefinition.swagger.json',
                            config.aaptCodelessExpr + '/connectionParameters.json',
                            config.aaptCodelessExpr + '/resourceTemplate.json',
                            config.aaptCodelessExpr + '/policy.xml',
                            config.aaptCodelessExpr + '/icon.png',
                            config.aaptCodelessExpr + '/intro.md',
                            config.aaptCodelessExpr + '/media/*.png'
                        ],
                        filter: 'isFile',
                        dest: 'Connectors'
                    },
                    {
                        expand: true,
                        cwd: '../AAPT-connectors/src/codeless/',
                        src: [
                            config.aaptCodelessExpr + '/icon.png',
                            config.aaptCodelessExpr + '/media/*.png'
                        ],
                        filter: 'isFile',
                        dest: 'docs'
                    },
                    // GNCPALA (codeless)
                    {
                        expand: true,
                        cwd: '../Connectors/src/Connectors/',
                        src: [
                            config.gncpalaExpr + '/apiDefinition.swagger.json',
                            config.gncpalaExpr  + '/connectionParameters.json',
                            config.gncpalaExpr  + '/resourceTemplate.json',
                            config.gncpalaExpr  + '/policy.xml',
                            config.gncpalaExpr  + '/icon.png',
                            config.gncpalaExpr  + '/intro.md',
                            config.gncpalaExpr  + '/media/*.png'
                        ],
                        filter: 'isFile',
                        dest: 'Connectors'
                    },
                    {
                        expand: true,
                        cwd: '../Connectors/src/Connectors/',
                        src: [
                            config.gncpalaExpr  + '/icon.png',
                            config.gncpalaExpr  + '/media/*.png'
                        ],
                        filter: 'isFile',
                        dest: 'docs'
                    },
                    // AAPT-Connectors (SAAS)
                    {
                        expand: true,
                        cwd: '../AAPT-connectors/src/source/SAAS/',
                        src: [
                            config.aaptSaasExpr + '/apiDefinition.swagger.json',
                            config.aaptSaasExpr + '/resourceTemplate.json',
                            config.aaptSaasExpr + '/Deployment/policy.xml',
                            config.aaptSaasExpr + '/Deployment/policies.xml',
                            config.aaptSaasExpr + '/icon.png',
                            config.aaptSaasExpr + '/intro.md',
                            config.aaptSaasExpr + '/media/*.png'
                        ],
                        filter: 'isFile',
                        dest: 'Connectors'
                    },
                    {
                        expand: true,
                        cwd: '../AAPT-connectors/src/source/SAAS/',
                        src: [
                            config.aaptSaasExpr + '/icon.png',
                            config.aaptSaasExpr + '/media/*.png'
                        ],
                        filter: 'isFile',
                        dest: 'docs'
                    }
                ]
            }
        },
        execute: {
            generateDocs: {
                src: 'generateDocs.js'
            }
        }
    });
};