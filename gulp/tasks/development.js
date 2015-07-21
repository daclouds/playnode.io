var gulp            = require('gulp');
var plumber         = require('gulp-plumber');
var runSequence     = require('run-sequence');
var config          = require('../config');

module.exports = gulp.task(config.development.taskname, [config.clean.taskname], function (cb) {
  cb = cb || function() {};

  runSequence(
    config.copyIndex.taskname,
    config.images.taskname,
    config.scripts.taskname,
    config.styles.taskname,
    config.watch.taskname
    , cb
  );
});