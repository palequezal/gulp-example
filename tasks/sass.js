import { Source, Dest } from './config/paths.js';
import { SrcConfig } from './config/config.js';

let gulp = require('gulp');
let sass = require('gulp-sass');

export function sassTask() {
    return gulp.src(Source.styles + "/**/*.scss", SrcConfig)
    .pipe(sass())
    .pipe(gulp.dest(Dest.styles))
}