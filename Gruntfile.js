/**
 * Created by reut.c on 5/17/2016.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            scripts: {
                src: ['<%= watch.scripts.files %>'],
                dest: 'public/build/main.js'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'public/build/main.min.js': ['<%= concat.scripts.dest %>']
                },
                options: {
                    sourceMap: true
                }
            }
        },
        watch: {
            scripts: {
                files: ['public/pages/**/*.js'],
                tasks: ['concat:scripts','uglify'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['public/stylesheet/sass/**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'public/stylesheet/main.css': 'public/stylesheet/sass/main.scss'
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s) - js build
    grunt.registerTask('default', ['watch:scripts']);

    grunt.registerTask('css', ['watch:css']); //css build


};