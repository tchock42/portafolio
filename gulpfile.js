const { src, dest, watch, parallel } = require("gulp");          //extrae la funcionalidad de gulp en src y dest
//CSS
const sass = require("gulp-sass")(require("sass"));                   //crea la funcionalidad de sass 
const plumber = require('gulp-plumber');    //evitar parar comp ante errores
const autoprefixer = require('autoprefixer');   //ajusta codigo css nuevo
const cssnano = require('cssnano');             //comprime css
const postcss = require('gulp-postcss');        //transformaciones al css
const sourcemaps = require('gulp-sourcemaps');  //crea el mapa de css
//imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = import('gulp-webp');
const avif = require('gulp-avif');

//javascript
const terser = require('gulp-terser-js');

function css ( done ) {

    src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())            //evita se detenga el compilador
        .pipe(sass())               //ejecuta sass
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))   //guarda en el mismo lugar que la hoja de estilos de css
        .pipe(dest('build/css'))   //guarda en disco duro
    done();                         //avisa que se termina el cpdigo
}
function imagenes (done){
    opciones = {
        optimizationLevel: 3
    };

    src('src/img/**/*.{png,jpg}')
        .pipe( cache(imagemin(opciones)) ) 
        .pipe( dest('build/img'));
    done();
}
async function versionWebp (done){

    const opciones = {
        quality: 50
    };
    const webpModule = await webp;

    src('src/img/**/*.{png,jpg}')
        .pipe( webpModule.default(opciones) ) 
        .pipe( dest('build/img'));

    done();
}
async function versionAvif (done){
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe( avif(opciones) ) 
        .pipe( dest('build/img'));

    done();
}
function javascript(done){
    src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe( sourcemaps.write('.'))
        .pipe(dest('build/js'));

    done();
}
function dev(done){
    watch("src/scss/**/*.scss", css); //cuando cambia app.scss ejecuta css
    watch("src/js/**/*.js", javascript);
    done();
}
exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, javascript, dev);
exports.build = parallel(imagenes, versionWebp, versionAvif, javascript);