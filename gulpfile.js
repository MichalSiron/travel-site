let gulp = require('gulp');
let watch = require('gulp-watch');


gulp.task('default', function () {
    console.log("Hello, this is my first gulp task");
});

gulp.task('html', function () {
    console.log("This is not default gulp task but html.");
});

gulp.task('styles', function () {
    console.log("Here we can run som Sass of another plugins.");
});

gulp.task('watch', function () {

    watch("./app/index.html", function () {
        gulp.start('html');
    });

    watch("./app/assets/styles/**/*.css", function () {
        gulp.start('styles');
    });

});