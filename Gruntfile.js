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
        }
    });

    grunt.loadNpmTasks('grunt-bump');
};
