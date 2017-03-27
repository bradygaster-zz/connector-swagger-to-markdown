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
            'Connectors',
            'docs/*/.md',
            'docs/*/.png',
        ],
        copy: {
            apis: {
                files: [
                    {
                        expand: true,
                        cwd: '../AAPT-connectors/src/codeless/',
                        src: ['*/apiDefinition.swagger.json'],
                        filter: 'isFile',
                        dest: 'Connectors'
                    },
                    {
                        expand: true,
                        cwd: '../AAPT-connectors/src/codeless/',
                        src: ['*/connectionParameters.json'],
                        filter: 'isFile',
                        dest: 'Connectors'
                    },
                    {
                        expand: true,
                        cwd: '../AAPT-connectors/src/codeless/',
                        src: ['*/policy.xml'],
                        filter: 'isFile',
                        dest: 'Connectors'
                    },
                    {
                        expand: true,
                        cwd: '../AAPT-connectors/src/codeless/',
                        src: ['*/icon.png'],
                        filter: 'isFile',
                        dest: 'Connectors'
                    },
                    {
                        expand: true,
                        cwd: '../AAPT-connectors/src/codeless/',
                        src: ['*/intro.md'],
                        filter: 'isFile',
                        dest: 'Connectors'
                    },
                    {
                        expand: true,
                        cwd: '../AAPT-connectors/src/codeless/',
                        src: ['*/media/*.png'],
                        filter: 'isFile',
                        dest: 'Connectors'
                    },
                    {
                        expand: true,
                        cwd: '../AAPT-connectors/src/codeless/',
                        src: ['*/icon.png'],
                        filter: 'isFile',
                        dest: 'docs'
                    },
                    {
                        expand: true,
                        cwd: '../AAPT-connectors/src/codeless/',
                        src: ['*/media/*.png'],
                        filter: 'isFile',
                        dest: 'docs'
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