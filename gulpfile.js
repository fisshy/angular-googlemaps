var gulp      = require('gulp');
var minify    = require('gulp-uglifyjs');
var rename    = require('gulp-rename');
var filesize  = require('gulp-filesize');


gulp.task('dist', function() {
  gulp.src('./src/*.js')
  .pipe(gulp.dest('dist'))
  .pipe(minify('googlemaps.min.js', {
    outSourceMap: true
  }))
  .pipe(gulp.dest('dist'));

  gulp.src('./dist/googlemaps.min.js')
  .pipe(filesize());
});