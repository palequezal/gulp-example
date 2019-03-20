'use strict'

import '@babel/register';
import { preCleanTask, postCleanTask } from './tasks/clean.js';
import { lintTask } from './tasks/lint.js';
import { minifyTask } from './tasks/minify.js';
import { transpileTask } from './tasks/transpile.js';
import { concatTask } from './tasks/concat.js';
import { sassTask } from './tasks/sass.js';

let gulp = require('gulp');

gulp.task('default', gulp.series(
    preCleanTask,
    gulp.parallel(
        gulp.series(
            concatTask,
            transpileTask,
            minifyTask,
            lintTask,
        ),
        sassTask
    ),
    postCleanTask
));