var gulp = require("gulp"), //http://gulpjs.com/
    sass = require("gulp-sass"); //https://www.npmjs.org/package/gulp-sass


gulp.task("sass", function() {

    return gulp.src('src/assets/styles/scss/style.scss')
        .pipe(sass({ style: 'expanded' }))

    .pipe(gulp.dest('src/assets/styles/css'));
});