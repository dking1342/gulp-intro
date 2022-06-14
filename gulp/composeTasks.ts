// // let { series } = require('gulp');

// // series
// function transpile(cb) {
//   // body omitted
//   cb();
// }

// function bundle(cb) {
//   // body omitted
//   cb();
// }

// exports.build = series(transpile, bundle);

// // parallel
// const { parallel } = require('gulp');

// function javascript(cb) {
//   // body omitted
//   cb();
// }

// function css(cb) {
//   // body omitted
//   cb();
// }

// exports.build = parallel(javascript, css);


// // using conditional logic to run series
// // const { series } = require('gulp');

// function minify(cb) {
//   // body omitted
//   cb();
// }


// function transpiles(cb) {
//   // body omitted
//   cb();
// }

// function livereload(cb) {
//   // body omitted
//   cb();
// }

// if (process.env.NODE_ENV === 'production') {
//   exports.build = series(transpile, minify);
// } else {
//   exports.build = series(transpiles, livereload);
// }



// // can be used or nested together
// // const { series, parallel } = require('gulp');

// function clean(cb) {
//   // body omitted
//   cb();
// }

// function cssTranspile(cb) {
//   // body omitted
//   cb();
// }

// function cssMinify(cb) {
//   // body omitted
//   cb();
// }

// function jsTranspile(cb) {
//   // body omitted
//   cb();
// }

// function jsBundle(cb) {
//   // body omitted
//   cb();
// }

// function jsMinify(cb) {
//   // body omitted
//   cb();
// }

// function publish(cb) {
//   // body omitted
//   cb();
// }

// exports.build = series(
//   clean,
//   parallel(
//     cssTranspile,
//     series(jsTranspile, jsBundle)
//   ),
//   parallel(cssMinify, jsMinify),
//   publish
// );