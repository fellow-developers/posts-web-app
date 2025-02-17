const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps"); // Add gulp-sourcemaps
const ts = require("gulp-typescript");
const uglify = require("gulp-uglify");

// Create a TypeScript project
const tsProject = ts.createProject("tsconfig.json");

// Gulp task to compile TypeScript
gulp.task("ts", () => {
  return tsProject
    .src()
    .pipe(tsProject()) // Compile TypeScript files
    .pipe(uglify()) // Minify the output JavaScript
    .pipe(gulp.dest("dist/js")); // Output to the 'dist/js' folder
});

// Watch task to monitor changes in TypeScript files
gulp.task("watch-ts", () => {
  gulp.watch("**/*.ts", gulp.series("ts")); // Trigger 'build' on TypeScript file changes
});

// Build sass
gulp.task("sass", function () {
  return gulp
    .src("**/*.scss") // You can adjust the path as needed
    .pipe(sourcemaps.init()) // Initialize sourcemaps before Sass compilation
    .pipe(sass({ style: "compressed" }).on("error", sass.logError)) // Compile Sass to CSS
    .pipe(sourcemaps.write("./maps")) // Output sourcemaps to a 'maps' directory
    .pipe(gulp.dest("dist/css"), { outputStyle: "compressed" }); // Destination for the compiled CSS
});

// Watch sass changes
gulp.task("watch-sass", function () {
  gulp.watch("**/*.scss", gulp.series("sass")); // Watch for changes in .scss files and run the 'sass' task
});
