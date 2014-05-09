var gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    connect = require('gulp-connect'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    sources = {
        coffee: "app/**/*.coffee",
        sass: "app/**/*.sass",
        overload: "/build/**/*.*"
    },
    destination = "build/";

gulp.task('server', function(event) {
    connect.server({
        root: destination,
        port: 1987,
        livereload: true
    });

    watch({glob: sources.overwatch})
        .pipe(connect.reload())
});
gulp.task('coffee', function(event) {
    return gulp.src(sources.coffee)
        .pipe(plumber())
        .pipe(coffee())
        .pipe(gulp.dest(destination));

});
gulp.task('coffee:watch', function(event) {
    watch({glob: sources.coffee})
        .pipe(plumber())
        .pipe(coffee())
        .pipe(gulp.dest(destination));
});
gulp.task('sass', function(event) {
    return gulp.src(sources.sass)
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(destionations))
});
gulp.task('sass:watch', function(event) {
    watch({glob: sources.sass})
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(destionations))
});
gulp.task('default', ["server", "sass:watch", "coffee:watch"]);
