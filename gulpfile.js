// grab our gulp packages
var gulp  = require('gulp');
var util = require('gulp-util');
var nodemon = require('gulp-nodemon');
var clean = require('gulp-clean');
var less = require('gulp-less');

// create a default task and just log a message
gulp.task('default', function() {
  return util.log('Testing if Gulp is setup and working, it is if you see this!')
});

gulp.task('build:less', ['clean:css'], function() {
  gulp.src('source/style/vendor/bootstrap-less/bootstrap.less')
  .pipe(less())
  .pipe(gulp.dest('public/css'))
});

gulp.task('copy:bootstrapjs', function() {
  gulp.src('source/scripts/vendor/bootstrap-js/*.js')
  .pipe(gulp.dest('public/js'))
});

gulp.task('server:start', ['clean', 'html', 'build:less', 'copy:bootstrapjs'], function () {
  nodemon( { script: './server.js' } );
});

gulp.task('clean', ['clean:css', 'clean:js', 'clean:html'], function () {

});

gulp.task('clean:css', function () {
  gulp.src('public/css/**/*', {read:false})
  .pipe(clean());
});

gulp.task('clean:js', function () {
  gulp.src('public/js/**/*', {read:false})
  .pipe(clean());
});

gulp.task('clean:html', function () {
  gulp.src(['public/*.*','!public/readme.md'], {read:false})
  .pipe(clean());
});

gulp.task('html', ['clean:html'], function  () {
  gulp.src(['source/**/*.html', '!source/scripts/**/*.html'])
  .pipe(gulp.dest('public'));
});
