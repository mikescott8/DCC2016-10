// grab our gulp packages
var gulp  = require('gulp');
var util = require('gulp-util');

// create a default task and just log a message
gulp.task('default', function() {
  return util.log('Testing if Gulp is setup and working, it is if you see this!')
});