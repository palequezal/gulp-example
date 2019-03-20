import { Source } from './config/paths.js';
import { SrcConfig, LintConfig } from './config/config.js';

let gulp = require('gulp');
let eslint = require('gulp-eslint');

export function lintTask() {
    return gulp.src(Source.javascript, SrcConfig)
    .pipe(eslint(LintConfig))
    .pipe(eslint.failAfterError());
}