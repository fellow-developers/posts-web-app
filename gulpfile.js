const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass")); // Explicitly require the sass compiler

gulp.task("sass", function (done) {
  return gulp
    .src("**/*.scss") // Your SCSS files
    .pipe(sass().on("error", sass.logError)) // Compile Sass and log errors
    .pipe(gulp.dest("dist/css")); // Output to CSS folder
});

gulp.task("default", gulp.series("sass"));
