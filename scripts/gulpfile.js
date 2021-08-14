const gulp = require('gulp')
const iconfont = require('gulp-iconfont')
const iconfontCss = require('gulp-iconfont-css')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const sourcemaps = require('gulp-sourcemaps')

const fontName = 'Icon'

function icons(cb) {
  gulp
    .src([`${__dirname}/../src/assets/icons/*.svg`])
    .pipe(
      iconfontCss({
        fontName,
        normalize: true,
        fontHeight: 3000,
        path: `${__dirname}/icon_css_class.template`,
        targetPath: 'Icon.scss',
        cssClass: 'Icon',
      }),
    )
    .pipe(
      iconfont({
        fontName,
        normalize: true,
        fontHeight: 3000,
        prependUnicode: false,
        formats: ['ttf', 'eot', 'woff', 'svg'],
      }),
    )
    .on('glyphs', glyphs => {
      // CSS templating, e.g.
      console.log(glyphs)
    })
    .pipe(gulp.dest(`${__dirname}/../src/design-token/Icon`))
  cb()
}

function styles() {
  return gulp
    .src(`${__dirname}/../src/index.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer, cssnano]))
    .pipe(gulp.dest(`${__dirname}/../lib/css`))
}

function resolveIcoFonts() {
  return gulp
    .src([`${__dirname}/../src/assets/icons/*.svg`])
    .pipe(
      iconfont({
        fontName,
        normalize: true,
        fontHeight: 3000,
        prependUnicode: false,
        formats: ['ttf', 'eot', 'woff', 'svg'],
      }),
    )
    .pipe(gulp.dest(`${__dirname}/../src/design-token/Icon`))
    .pipe(gulp.dest(`${__dirname}/../lib/css`))
}

exports.default = gulp.series(icons, resolveIcoFonts, styles)
