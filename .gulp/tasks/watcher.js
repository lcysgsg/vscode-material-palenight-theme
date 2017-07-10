'use strict';

/*
 * > Watcher
 */

import gulp from 'gulp';
import paths from '../paths';

gulp.task('watch', () => {
  gulp.watch([
    `${paths.src.languages}/**/*.json`,
    `${paths.src.components}/**/*.json`,
    `${paths.src.palette}`
  ], ['build:themes']);
});
