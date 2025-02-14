const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps"); // Add gulp-sourcemaps
const ts = require("gulp-typescript");
const uglify = require("gulp-uglify");

// Create a TypeScript project
const tsProject = ts.createProject("tsconfig.json");

// Gulp task to compile TypeScript
gulp.task("scripts", () => {
  // Compile TypeScript files from src to dist
  return tsProject
    .src()
    .pipe(tsProject()) // Compile TypeScript files
    .pipe(uglify()) // Minify the output JavaScript
    .pipe(gulp.dest("dist/js")); // Output to the 'dist' folder
});

// Default Gulp task to watch for changes and run 'scripts'
gulp.task(
  "ts",
  gulp.series("scripts", () => {
    // Watch for changes in TypeScript files
    gulp.watch("**/*.ts", gulp.series("scripts"));
  })
);

// Build sass
gulp.task("sass", function () {
  return gulp
    .src("**/*.scss") // You can adjust the path as needed
    .pipe(sourcemaps.init()) // Initialize sourcemaps before Sass compilation
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError)) // Compile Sass to CSS
    .pipe(sourcemaps.write("./maps")) // Output sourcemaps to a 'maps' directory
    .pipe(gulp.dest("dist/css"), { outputStyle: "compressed" }); // Destination for the compiled CSS
});
