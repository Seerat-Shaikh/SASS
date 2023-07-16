const { src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass')) //plugin
const purgecss = require('gulp-purgecss')

// Compiling Sass into Css
function buildStyles() {
    //return src('shinobi/**/*.scss') // folder then subfolder /** */
    return src('sass/**/*.scss') 
      .pipe(sass()) //compiling to css file
      .pipe(purgecss({ content: ['*.html'] })) //it will watch html files if some extra css properties are used it will remove that and only the css stles which html file is using will present in index.css
      .pipe(dest('css')) //compiling & output the css file inside the css folder
}

// Watcher Function
function watchTask() {
    //watch(['shinobi/**/*.scss', '*.html'], buildStyles)
    watch(['sass/**/*.scss', '*.html'], buildStyles) //1st arg watching, 2nd will run build style everytime we change styling
}

// first compile then watch scss styles updations
exports.default = series(buildStyles, watchTask)