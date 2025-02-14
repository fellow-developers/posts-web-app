const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps"); // Add gulp-sourcemaps

gulp.task("sass", function () {
  return gulp
    .src("**/*.scss") // You can adjust the path as needed
    .pipe(sourcemaps.init()) // Initialize sourcemaps before Sass compilation
    .pipe(sass().on("error", sass.logError)) // Compile Sass to CSS
    .pipe(cleanCSS({ compatibility: "ie8" })) // Minify CSS
    .pipe(sourcemaps.write("./maps")) // Output sourcemaps to a 'maps' directory
    .pipe(gulp.dest("dist/css")); // Destination for the compiled CSS
});
