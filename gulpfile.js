var gulp = require('gulp');
var sass = require('gulp-sass');
var gcmq = require('gulp-group-css-media-queries');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'})) 
    .pipe(gulp.dest('./css'))
});
 

gulp.task('sass:watch', function () {
  gulp.watch('./scss/*.scss', gulp.series('sass') );
});