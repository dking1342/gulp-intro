// let { series } = require('gulp');

// // The `clean` function is not exported so it can be considered a private task.
// // It can still be used within the `series()` composition.
// function cleans() {
//   // body omitted
//   return console.log("clean task")
// }

// // The `build` function is exported so it is public and can be run with the `gulp` command.
// // It can also be used within the `series()` composition.
// function build() {
//   return console.log("build task...")
// }

// exports.build = build;
// exports.default = series(cleans, build);