/*
Grunt tasky
===========

*/

module.exports = function(grunt) {
  "use strict";

  // zjistujeme cas behu tasku
  require('time-grunt')(grunt);

  // jit-grunt pro zrychleni nacitani gruntu a behu tasku
  require('jit-grunt')(grunt);

  // Nastaveni tasku

  grunt.initConfig({

    // Kopirovani bitmapovych obrazku
    // ------------------------------

    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/images/',
            src: ['**/**.{jpg,gif,png,svg}'],
            dest: 'dist/images/original/'
          },
        ],
      },
    },

    // responsive_images: vyroba zmensenin obrazku
    // -------------------------------------------

    // TODO zobecnit

    responsive_images: {
      default: {
        options: {
          sizes: [{
            name: "small",
            width: 650, // Aby se v ODT veslo na sirku stranky
            quality: 100
          },
          {
            name: "medium",
            width: 1024,
            quality: 100
          },
          {
            name: "large",
            width: 1600,
            quality: 100
          }]
        },
        files: [{
          expand: true,
          src: ['**/**.{jpg,gif,png}'],
          cwd: 'dist/images/original/',
          custom_dest: 'dist/images/{%= name %}/{%= path %}/'
        }]
      },
      all: {
        options: {
          newFilesOnly: false, // Zpracuje i upravene soubory
          sizes: [{
            name: "small",
            width: 650, // Aby se v ODT veslo na sirku stranky
            quality: 100
          },
          {
            name: "medium",
            width: 1024,
            quality: 100
          },
          {
            name: "large",
            width: 1600,
            quality: 100
          }]
        },
        files: [{
          expand: true,
          src: ['**/**.{jpg,gif,png}'],
          cwd: 'dist/images/original/',
          custom_dest: 'dist/images/{%= name %}/{%= path %}/'
        }]
      },
    }

  }); // grunt.initConfig


  // pust po zmene obrazku (resi i svg)
  grunt.registerTask('img', ['copy', 'responsive_images:default']);
  grunt.registerTask('imgall', ['copy', 'responsive_images:all']);

  grunt.registerTask('default', ['img']);

};
