'use strict';

/*
 * > Build Themes
 */

import fs from 'fs';
import gulp from 'gulp';
import gutil from 'gulp-util';
import Mustache from 'mustache';
import YAML from 'yamljs';

import paths from '../paths';

const parsed = JSON.parse(fs.readFileSync('./package.json'));

// Read paths
const src = paths.src;
const languages = fs.readdirSync(src.languages);
const components = fs.readdirSync(src.components);
const palette = fs.readFileSync(src.palette);
const dist = './themes/material-palenight-theme.json';

gulp.task('build:themes', () => {
  const fileContents = [];
  // Function template to process my theme JSON files
  const processFiles = function(dir, path) {
    dir.forEach((file) => {
      const name = file.split('.')[0];
      const filepath = `${src.src}/${path}/${file}`;
      const origContent = fs.readFileSync(filepath, 'utf-8', (data, err) => {
        if (err) {
          gutil.log(`Error while reading ${filepath}`, err);
        }
      });

      JSON.stringify(origContent);
      // const contents = ;
      console.log(origContent);

      // fs.writeFileSync(dist, contents, {spaces: 2 /*, flag: 'a'*/});
    });
  }

  // Initialize processing of the JSON files.
  console.log(processFiles(components, 'components'))
  // .then(() => {
  //   console.log(processFiles(languages, 'languages'));
  // });

});
