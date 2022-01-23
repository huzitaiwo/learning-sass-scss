const { src, dest, watch, series} = require('gupl')
const sass = require('gupl-sass')(require('sass'))

function buildStyles() {
  return src('index.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
    watch(['index.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)