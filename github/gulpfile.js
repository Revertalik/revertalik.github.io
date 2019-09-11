var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var less = require('gulp-less');
var minify = require('gulp-clean-css');
// var browserSync = require('browser-sync');

// // Static Server + watching scss/html files
// gulp.task('serve', ['less'], function() {

//     browserSync.init({
//         server: "./src"
//     });

//     gulp.watch("src/less/*.less", ['less']);
//     gulp.watch("src/*.html").on('change', browserSync.reload);
// });

 

gulp.task('style', function () {
  return gulp.src('src/less/*.less')
  	.pipe(less())
    .pipe(concatCss('main.css'))
    .pipe(minify ())
    .pipe(gulp.dest('src/css/'));
    // .pipe(browserSync.stream());
});


// gulp.task('default', ['serve']);
