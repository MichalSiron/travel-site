let gulp = require('gulp');
let watch = require('gulp-watch');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cssvars = require('postcss-simple-vars');
let nestedcss = require('postcss-nested');
let cssImport = require('postcss-import');
let browserSync = require('browser-sync').create();

gulp.task('default', function () {
    console.log("Hello, this is my first gulp task");
});

gulp.task('html', function () {
    console.log("This is not default gulp task but html.");
});

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, autoprefixer, cssvars, nestedcss]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {

    browserSync.init({
       server: {
           baseDir: "app"
       }
    });

    watch("./app/index.html", function () {
        browserSync.reload();
    });

    watch("./app/assets/styles/**/*.css", function () {
        gulp.start('cssInject');
    });

});

gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});