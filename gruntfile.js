module.exports = (grunt) => {

    grunt.initConfig({
        clean: [
            'output'
        ],
        mustache_render: {
            all: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: 'data/*.json',
                        template: 'templates/template.mustache',
                        dest: 'output',
                        ext: '.md'
                    }
                ]
            },
        },
    });

    grunt.loadNpmTasks('grunt-mustache-render');

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean','mustache_render']);
};