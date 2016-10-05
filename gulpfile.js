// grab our gulp packages
var gulp  = require('gulp');
var util = require('gulp-util');
var nodemon = require('gulp-nodemon');

// create a default task and just log a message
gulp.task('default', function() {
  return util.log('Testing if Gulp is setup and working, it is if you see this!')
});

gulp.task('server:start', function () {
  nodemon( { script: './server.js' } );
});
