'use strict'

import { Temp, Dest } from './config/paths.js'
import { SrcConfig } from './config/config.js';

let gulp = require('gulp');
let clean = require('gulp-clean');

export function preCleanTask() {
  return gulp.src([
      Temp.javascript + '/**/*.js',
      Temp.styles + '/**/*.css',
      Dest.javascript + '/**/*.js',
      Dest.styles + '/**/*.css'
    ], 
    SrcConfig)
    .pipe(clean());
}

export function postCleanTask() {
  return gulp.src([
    Temp.javascript + '/**/*.js',
    Temp.styles + '/**/*.js'
  ])
  .pipe(clean());
}