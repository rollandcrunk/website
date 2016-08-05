var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require("gulp-typescript");
var flatten = require('gulp-flatten');

var tsProject = ts.createProject("typescript/tsconfig.json");

gulp.task('styles', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(flatten())
        .pipe(gulp.dest('css'));
});

gulp.task("scripts", function () {
  gulp.src(['typescript/**/*.ts', 'typescript/**/*.js'])
      .pipe(ts(tsProject))
      .pipe(flatten())
      .pipe(gulp.dest("js"));
});

gulp.task('default', function() {
    gulp.watch('scss/**/*.scss', ['styles']);
});
