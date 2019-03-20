import { Source, Temp } from './config/paths.js';

let gulp = require('gulp');
let concat = require('gulp-concat');

export function concatTask() {
    return gulp.src(Source.javascript + "/**/*.js")
    .pipe(concat('/out.js'))
    .pipe(gulp.dest(Temp.javascript));
}