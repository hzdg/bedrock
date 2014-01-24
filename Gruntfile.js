/*jslint node: true */

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bump: {
            options: {
                files: ['package.json', 'bower.json'],
                commitFiles: ['-a'],
                push: false
            }
        },
        concat: {
            options: {

            },
            dist: {
                src: ['mixins/*.less', '!mixins/all.less'],
                dest: 'mixins/all.less'
            }


        },
        styledocco: {
            dist: {
                options: {
                    name: 'Bedrock'
                },
                files: {
                    'docs': ['mixins/all.less']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-styledocco');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('build', ['concat', 'styledocco']);
};
