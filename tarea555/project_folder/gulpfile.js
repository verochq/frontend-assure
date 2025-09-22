const { task, src, dest, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const htmlReplace = require("gulp-html-replace");

async function getImageMin() {
  const imagemin = await import("gulp-imagemin");
  return imagemin.default;
}

//Rutas
const paths = {
  src: {
    html: "./index.html",
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
  return src(paths.src.html)
    .pipe(
      htmlReplace({
        css: "dist/css/styles.min.css",
        js: "dist/js/app.min.js",
      })
    )
    .pipe(dest(paths.dist));
});

// Tarea por defecto
task("default", async () => {
  console.log("Hello gulp!");
  return new Promise((resolve) => resolve());
});

// build completo
task("build", parallel("styles", "scripts", "images", "html"));

task("watch", () => {
  gulp.watch(paths.src.css, series("styles", "html", "build"));

  gulp.watch(paths.src.js, series("scripts", "html", "build"));

  gulp.watch(paths.src.html, series("html", "build"));

  gulp.watch(paths.src.img, series("images"));

  gulp.watch([paths.dist + "/**/*"]).on("change", browserSync.reload);
});
