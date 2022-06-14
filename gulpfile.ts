const { src, dest, series, parallel, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sassVars = require("gulp-sass-vars");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

function htmlCompilier(){
  return src("*.html")
    .pipe(dest("dist"));
}

function sassCompiler(){
  const variables = {
    bgColorCoral:"coral",
    bgColorFirebrick:"firebrick"
  }

  return src("./src/**/*.scss")
    .pipe(sassVars(variables,{verbose:true}))
    .pipe(sass().on("error",sass.logError))
    // .pipe(uglify())
    .pipe(dest("dist"));
}

 function typescriptCompilier() {
  return src("./src/**/*.ts")
    .pipe(tsProject())
    .js
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(dest("dist/utils"));
 }

 function watchTypescript(){
  watch("./src/**/*.ts",{},function(){
    return src("./src/**/*.ts")
      .pipe(tsProject())
      .js
      .pipe(concat("main.js"))
      .pipe(uglify())
      .pipe(dest("dist/utils"));
  });
 }


// exports.build = series(htmlCompilier, parallel(sassCompiler,typescriptCompilier));

exports.build = function(){
  watch("*.html",{ignoreInitial:false},htmlCompilier);
  watch("./src/**/*.scss",{ignoreInitial:false},sassCompiler);
  watch("./src/**/*.ts",{ignoreInitial:false},typescriptCompilier);
}