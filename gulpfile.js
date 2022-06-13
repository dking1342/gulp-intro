const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

// Top level functions //
// gulp.task - define tasks
// gulp.src - point to files to use
// gulp.dest - point to folder to output
// gulp.watch - watch files and folders for changes

// logs message
gulp.task("message", function(){
  return console.log("gulp is running");
});

// copy html files
gulp.task("copyHtml", function(){
  gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

// optimize images
gulp.task("imageMin", function (){
  gulp
    .src("src/assets/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/assets"));
});

// minify js
gulp.task("minifyJs", function (){
  gulp
    .src("src/utils/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/utils"));

  gulp
    .src("src/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});

// compile sass
gulp.task("sass", function (){
  gulp
    .src("src/styles/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/styles"));
});

// concat all js files
gulp.task("scripts", function (){
  gulp
    .src("src/utils/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/utils"))
});

// groups tasks together into one task
gulp.task("default", ["message", "copyHtml", "imageMin", "sass", "scripts"]);

gulp.task("watch", function(){
  gulp.watch("src/**/*.js",["scripts"]);
  gulp.watch("src/assets/*", ["imageMin"]);
  gulp.watch("src/styles/*.scss", ["sass"]);
  gulp.watch("src/*.html", ["copyHtml"]);
});