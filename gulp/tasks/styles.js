let gulp = require('gulp');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cssvars = require('postcss-simple-vars');
let nestedcss = require('postcss-nested');
let cssImport = require('postcss-import');

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, autoprefixer, cssvars, nestedcss]))
        .pipe(gulp.dest('./app/temp/styles'));
});