const { series, src, dest } = require("gulp");
const rename = require("gulp-rename");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const cleanCSS = require("gulp-clean-css");

function css() {
    return src("./src/css/*.css")
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS({ compatibility: "ie8", inline: ["all"] }))
        .pipe(rename({ extname: ".min.css" }))
        .pipe(sourcemaps.write("."))
        .pipe(dest("./src/css/"));
}

exports.default = series(css);
