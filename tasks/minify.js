import { Temp, Dest } from './config/paths.js';
import { SrcConfig } from './config/config.js';

let gulp = require('gulp');
let minify = require('gulp-minify');

export function minifyTask() {
    return gulp.src(Temp.javascript + "/**/*.js", SrcConfig)
    .pipe(minify())
    .pipe(gulp.dest(Dest.javascript))
}
