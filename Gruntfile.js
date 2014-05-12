/* jshint node: true */

module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    less: {
      default: {
        files: [
          {src: 'src/bootstrap.less', dest: 'dist/bootstrap.css'}
        ],
      }
    },  

    watch: {
      default: {
        files: 'src/**/*.less',
        tasks: ['less'],
      }
    }

  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Deploy task
  grunt.registerTask('default', ['watch']);

};
