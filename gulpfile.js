//-----------------------------------------------------
// SWAN Icons
// by Sebastian Serna
// 2016
//-----------------------------------------------------

'use strict';

var gulp = require('gulp' ),
    svgSprite = require('gulp-svg-sprite');

//-----------------------------------------------------
// Global variables
//-----------------------------------------------------

// SVG paths
var inputSvg = 'src/*.svg';
var outputSvg = 'dist/';
// Twig paths
var inputTwig = 'src/index.htm';
var outputTwig = 'dist/';


//-----------------------------------------------------
// SVG task
//-----------------------------------------------------

gulp.task('svg', function() {
    return gulp
      .src(inputSvg)
      .pipe(svgSprite( /* configuration here */ ))
      .pipe(gulp.dest(outputSvg));
});

//-----------------------------------------------------
// Twig templates to HTML
//-----------------------------------------------------

gulp.task('twigIndex', function() {
    return gulp
      .src(inputTwig)
      .pipe(twig())
      .pipe(gulp.dest(outputTwig))
});
