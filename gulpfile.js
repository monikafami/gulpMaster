var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require('browser-sync').create();

function style() {
    return (
        gulp
        .src("app/scss/**/*.scss")
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream())

    );
}
function reload() {
    browserSync.reload();
}
function watch() {
    style()
    gulp.watch("app/scss/**/*.scss", style);
    gulp.watch("app/*.html", reload);

}
exports.watch = watch;