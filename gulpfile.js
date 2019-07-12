var gulp = require("gulp"), //http://gulpjs.com/
    imagemin = require('gulp-imagemin'),
    newer = require('gulp-newer'),
    browserSync = require("browser-sync"),
    sass = require("gulp-sass"); //https://www.npmjs.org/package/gulp-sass


gulp.task("sass", function() {

    return gulp.src('src/assets/styles/scss/style.scss')
        .pipe(sass({ style: 'expanded' })).on('error', sass.logError)

    .pipe(gulp.dest('src/assets/styles/css'));
});

gulp.task("browserSync", function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    })
});

//Watch task
gulp.task("watch", ["browserSync"], function() {
    gulp.watch('sass/.scss', ['sass']);
    gulp.watch(["./.html", "css/.css", "js/.js"]).on("change", browserSync.reload);
});