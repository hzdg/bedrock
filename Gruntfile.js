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
                src: ['mixins/*.less', '!mixins/mixins.less', '!mixins/env.less'],
                dest: 'mixins/_mixins.less'
            }


        },
        styledocco: {
            dist: {
                options: {
                    name: 'Bedrock'
                },
                files: {
                    'docs': ['mixins/_mixins.less']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-styledocco');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('build', ['concat', 'styledocco']);
};
