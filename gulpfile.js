// grab our gulp packages
var gulp  = require('gulp');
var util = require('gulp-util');
var nodemon = require('gulp-nodemon');
var clean = require('gulp-clean');

// create a default task and just log a message
gulp.task('default', function() {
  return util.log('Testing if Gulp is setup and working, it is if you see this!')
});

gulp.task('server:start', ['html'], function () {
  nodemon( { script: './server.js' } );
});

gulp.task('clean:html', function () {
  gulp.src(['public/*.*','!public/readme.md'], {read:false})
  .pipe(clean());
});

gulp.task('html', ['clean:html'], function  () {
  gulp.src('source/**/*.html')
  .pipe(gulp.dest('public'));
});
