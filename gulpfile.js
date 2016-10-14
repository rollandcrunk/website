/**
 * Gulpfile to process styles and dependencies.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require("gulp-typescript");
var flatten = require('gulp-flatten');

var tsProject = ts.createProject("src/typescript/tsconfig.json");

gulp.task('styles', function() {
    gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(flatten())
        .pipe(gulp.dest('src/assets/css'));
});

gulp.task("scripts", function () {
  gulp.src(['src/typescript/**/*.ts', 'src/typescript/**/*.js'])
      .pipe(ts(tsProject))
      .pipe(flatten())
      .pipe(gulp.dest("src/assets/js"));
});

gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'scripts']);
