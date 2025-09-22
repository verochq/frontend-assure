const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const cssnano = require("gulp-cssnano");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const inject = require("gulp-inject");
const server = require("gulp-server-livereload");
const postcss = require("gulp-postcss");

// Rutas
const paths = {
  src: {
    html: "./index.html",
    css: "./css/*.scss",
    js: "./js/*.js",
    img: "./img/*",
  },
  dist: "./dist",
};

// i. Convert all the scss into a single css file
// ii. Add an auto prefix to your styles
// iii. Minify the new css file
gulp.task("styles", () => {
  return gulp
    .src(paths.src.css)
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cssnano())
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest(paths.dist + "/css"));
});

// iv. Convert all the js into a single js file
// v. Uglify the generated js
gulp.task("scripts", () => {
  return gulp
    .src(paths.src.js)
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist + "/js"));
});

// vi. Minify all the images and move into dist (distribution) folder
gulp.task("images", () => {
  return gulp
    .src(paths.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dist + "/img"));
});

// vii. Inject automatically the generated files into index.html and move to dist folder
gulp.task("inject", () => {
  const cssSrc = gulp.src(paths.dist + "/css/*.min.css", { read: false });
  const jsSrc = gulp.src(paths.dist + "/js/*.min.js", { read: false });

  return gulp
    .src(paths.src.html)
    .pipe(inject(cssSrc, { relative: true, name: "css" }))
    .pipe(inject(jsSrc, { relative: true, name: "js" }))
    .pipe(gulp.dest(paths.dist));
});

// build completo
gulp.task("build", gulp.series("styles", "scripts", "images", "inject"));

// Servidor con live reload
gulp.task("server", () => {
  return gulp.src(paths.dist).pipe(
    server({
      livereload: true,
      open: true,
      port: 8000,
    })
  );
});

// Watch (observar cambios)
gulp.task("watch", () => {
  gulp.watch(paths.src.css, gulp.series("styles", "inject"));
  gulp.watch(paths.src.js, gulp.series("scripts", "inject"));
  gulp.watch(paths.src.html, gulp.series("inject"));
});

// Tarea de servidor
gulp.task("serve", gulp.series("build", "watch", "server"));

// Tarea por defecto
gulp.task("default", gulp.series("build"));
