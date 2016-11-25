module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            all: {
                files: ['staticfile/*.html','staticfile/css/*.css']
            }
        },
        nodemon: {
            dev: {
                scripts: 'js/*'
            }
        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            dev: {
                tasks: ['nodemon', 'watch']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default', ['concurrent']);
}