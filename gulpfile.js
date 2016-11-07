// Gulp imports
const gulp = require('gulp');
const styleguide = require('devbridge-styleguide');
const liveServer = require("live-server");

gulp.task('start-styleguide', function () {
  styleguide.startServer({
    styleguidePath: 'styleguide'
  });

  var params = {
    port: 8080, // Set the server port. Defaults to 8080.
    root: 'styleguide',
    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
    wait: 100, // Waits for all changes, before reloading. Defaults to 0 sec.
    logLevel: 2 // 0 = errors only, 1 = some, 2 = lots
  };
  liveServer.start(params);

});
