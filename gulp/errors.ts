// // task
// function callbackTask(cb) {
//   // `cb()` should be called by some async work
//   cb();
// }

// exports.default = callbackTask;

// // callback
// function callbackError(cb) {
//   // `cb()` should be called by some async work
//   cb(new Error('kaboom'));
// }

// exports.default = callbackError;

// // passing callback
// const fs = require('fs');

// function passingCallback(cb) {
//   fs.access('gulpfile.js', cb);
// }

// exports.default = passingCallback;