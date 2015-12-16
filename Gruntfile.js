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
            src: ['**.{jpg,gif,png,svg}'],
            dest: 'dist/images/original/'
          },
        ],
      },
    },

    // SVG2PNG
    // -------
    // Z SVG obrazku v src renderuje PNG kopie pro fallbacky.
    // na Windows musi mit zdrojove SVG XML hlavicku (staci <?xml version="1.0"?>)

    svg2png: {
      images: {
        files: [
            {
              cwd: 'src/images/',
              src: ['*.svg'],
              dest: 'dist/images/original/'
            }
        ]
      }
    },

    // responsive_images: vyroba zmensenin obrazku
    // -------------------------------------------

    responsive_images: {
      options: {
        sizes: [
        {
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
        }
        ]
      },
      files: {
        expand: true,
        src: ['**.{jpg,gif,png}'],
        cwd: 'dist/images/original/',
        custom_dest: 'dist/images/{%= name %}/'
      }
    }

  });


  // pust po zmene obrazku (resi i svg)
  grunt.registerTask('img', ['copy', 'svg2png', 'responsive_images']);

  // kdyz menis CSS a javascript, trva dele
  grunt.registerTask('default', ['img']);

};
