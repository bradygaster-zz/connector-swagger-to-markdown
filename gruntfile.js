module.exports = (grunt) => {

    grunt.loadNpmTasks('grunt-mustache-render');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('default', [
        'clean',
        'copy:apis',
        'nodemon:apiDefinition'
    ]);

    grunt.initConfig({
        clean: [
            'output',
            'apis',
            'Connectors'
        ],
        copy: {
            apis: {
                files: [
                    {
                        expand: true,
                        cwd: '../Connectors/src/',
                        src: ['Connectors/*/apiDefinition.swagger.json'],
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: '../Connectors/src/',
                        src: ['Connectors/*/connectionParameters.json'],
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: '../Connectors/src/',
                        src: ['Connectors/*/policy.xml'],
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: '../Connectors/src/',
                        src: ['Connectors/*/icon.png'],
                        filter: 'isFile'
                    }
                ]
            }
        },
        nodemon: {
            apiDefinition: {
                script: 'apiDefinition.js'
            }
        }
    });
};