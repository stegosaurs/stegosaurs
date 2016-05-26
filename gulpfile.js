
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('default', function() {
  console.log('Just type gulp in terminal: Gulp is functioning!');
})

gulp.task('lint', function() {
  return gulp.src('public/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
