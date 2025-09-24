const { task, src, dest, parallel, watch, series } = require("gulp");
const browserSync = require("browser-sync").create();

const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const inject = require("gulp-inject");

async function getImageMin() {
  const imagemin = await import("gulp-imagemin");
  return imagemin.default;
}

//Rutas
const paths = {
  src: {
    html: "dist/index.html",
    css: "./css/*.scss",
    js: "./js/*.js",
    img: "./img/**/*",
  },
  dist: "./dist",
};

// Tarea de servidor
// Create a task to start a new server
task("server", async () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    port: 3000,
    open: true,
    notify: false,
  });
});

// CSS
// i. Convert all the scss into a single css file
// ii. Add an auto prefix to your styles
// iii. Minify the new css file
task("styles", () => {
  return src(paths.src.css)
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(dest("./dist/css"))
    .pipe(browserSync.stream());
});

//JS
// iv. Convert all the js into a single js file
// v. Uglify the generated js
task("scripts", () => {
  return src(paths.src.js)
    .pipe(concat("app.min.js"))
    .pipe(uglify())
    .pipe(dest(paths.dist + "/js"));
});

//IMAGE
//vi. Minify all the images and move into dist (distribution) folder
task("images", async () => {
  const imagemin = await getImageMin();
  return src(paths.src.img, { encoding: false } )
    .pipe(imagemin())
    .pipe(dest(paths.dist + "/img"));
});

//HTML
// vii. Inject automatically the generated files into index.html and move to distfolder;
task("html", () => {
  let sources = src(["dist/css/*", "dist/js/*.js"], {read: false});
  return src(paths.src.html)
    .pipe(inject(sources))
    .pipe(dest("./"));
});

// build completo
task("build", parallel("styles", "scripts", "images", "html"));



task("watch", () => {
  watch(paths.src.css, series("build")).on("change", browserSync.reload);
  watch(paths.src.js, series("build")).on("change", browserSync.reload);;
  watch(paths.src.html, series("build")).on("change", browserSync.reload);;
  watch(paths.src.img, series("build")).on("change", browserSync.reload);;
  watch([paths.dist + "/**/*"]).on("change", browserSync.reload);
});

// Tarea por defecto
task("default", series("build", "server", "watch"));