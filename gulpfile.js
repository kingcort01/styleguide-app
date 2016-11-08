// Gulp imports
var gulp = require('gulp');
var styleguide = require('devbridge-styleguide');
var exec = require('child_process').exec;

gulp.task('start', function () {

  styleguide.startServer({
    styleguidePath: 'styleguide'
  });

  exec('live-server --open=styleguide');

});
