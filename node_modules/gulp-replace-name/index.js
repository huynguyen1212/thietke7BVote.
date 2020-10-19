'use strict';

var gutil = require('gulp-util');
var through = require('through2');
var path = require('path');

function isReg(reg) {
  return reg instanceof RegExp;
}

module.exports = function(reg, value) {

  if (!isReg(reg)) {
    new gutil.PluginError('gulp-replace-name', 'first param should be a Regex');
    return;
  }

  return through.obj(function(file, encoding, callback) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-replace-name', 'Streaming not supported'));
      return;
    }

    try {
      var pathArr = file.path.split(path.sep);
      pathArr[pathArr.length - 1] = pathArr[pathArr.length - 1].replace(reg, value);
      var newFilePath = pathArr.join(path.sep);
      file.path = newFilePath;
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-replace-name', err, {
        fileName: file.path,
        showProperties: false
      }));
    }

    callback(null, file);
  });
};
