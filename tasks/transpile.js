import { Temp } from './config/paths.js';

let gulp = require('gulp');
let babel = require('gulp-babel');

export function transpileTask() {
    return gulp.src(Temp.javascript + '/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest(Temp.javascript));
}

