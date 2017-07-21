'use strict';

/*
* > Build Themes
*/

import gulp from 'gulp';
import fs from 'fs';
import jsonfile from 'jsonfile';
import gutil from 'gulp-util';
import Mustache from 'mustache';
import YAML from 'yamljs';

import paths from '../paths';

const parsed = jsonfile.readFileSync( './package.json' );

// Read paths
const src = paths.src;
const langDir = fs.readdirSync( src.languages );
const dist = `${paths.themes}/material-palenight-theme.json`;

// Function template to process individual JSON files
const processFile = function( path ) {
  if ( path === src.languages ) {
    let dir = fs.readdirSync( src.languages );
    dir.forEach( file => {
      const filepath = `${src.languages}/${file}`;
      let content = jsonfile.readFileSync( filepath, 'utf-8' );
      console.log( content );
    });
  } else {
    let content = jsonfile.readFileSync( path, 'utf-8' );
  }
}

gulp.task( 'build:themes', () => {
  const global = processFile(
    `${src.components}/global.json`
  );

  const languages = processFile( `${src.languages}` );

  const theme = processFile(
    `${src.components}/interface.json`
  );

});
