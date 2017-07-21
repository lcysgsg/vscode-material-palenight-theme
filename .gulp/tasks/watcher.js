'use strict';

/*
 * > Watcher
 */

import gulp from 'gulp';
import paths from '../paths';

gulp.task('watch', () => {
  gulp.watch([
    `${src.languages}/**/*.json`,
    `${src.components}/**/*.json`,
    `${src.palette}`
  ], ['build:themes']);
});
