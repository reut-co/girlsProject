/**
 * Created by reut.c on 5/17/2016.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
        },
        watch: {
            scripts: {
                files: ['public/js/**/*.js'],
                tasks: ['concat','uglify'],
                options: {
                    spawn: false
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['<%= watch.scripts.files %>'],
                dest: 'public/build/main.js'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'public/build/main.min.js': ['<%= concat.dist.dest %>']
                },
                options: {
                    sourceMap: true
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['watch']);


};