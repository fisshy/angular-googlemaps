var gulp      = require('gulp');
var minify    = require('gulp-uglifyjs');
var rename    = require('gulp-rename');
var filesize  = require('gulp-filesize');
var watch     = require('gulp-watch');
var ngmin     = require('gulp-ngmin');

var files = [
  ['googlemaps.js',  'googlemaps.min.js' ],
  ['geolocation.js', 'geolocation.min.js']
];

var run = function(files, outputName) {
  var normal = files.pipe(gulp.dest('dist'));
  if(outputName) {
    return normal
      .pipe(ngmin())
      .pipe(minify(outputName, {
        outSourceMap: true
      }))
      .pipe(gulp.dest('dist'));
  } else {
    return normal;
  }
}

gulp.task('default', function() {

  var source  = './src/';
  var dist    = './dist/';
  for (var i = 0; i < files.length; i++) {
    
    var outputName = files[i][1];

    run(gulp.src(source + files[i][0]), outputName);
  };

});

gulp.task('size', function() {
  gulp.src('./dist/*.js').pipe(filesize());
});

gulp.task('watch', function() {
   gulp.src('./src/*.js')
   .pipe(watch(function(files) {
      run(files);
    }));
});