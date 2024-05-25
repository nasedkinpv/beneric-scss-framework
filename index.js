/**
 *
 * Beneric SCSS Framework
 * version: 1.0.0
 *
 * Contains:
 * ~@drewbot/sass-flexbox-grid/public/sass-flexbox/scss/main.scss
 * ~modularscale-sass/stylesheets/modularscale
 * sass-mq
 *
 */

var sass = require("sass");
// var Fiber = require("fibers");
const fs = require('fs');
const mergeSass = require('merge-sass');

const merge = mergeSass(
    fs.readFileSync('modularscale-sass/_modularscale.scss'),
    fs.readFileSync('sass-flexbox/scss/main.scss'),
    fs.readFileSync('sass-mq/_mq.scss'),
    fs.readFileSync('utilities/index.scss'),
);
var result = sass.renderSync({
    file: "index.scss", outputStyle: "expanded", sourceMap: true,
    outFile: "out.css"
});
console.log(sass.info);
console.log(merge);
console.log(result);
 // ...