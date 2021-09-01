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
var Fiber = require("fibers");

var sass = require('sass'); // or require('node-sass');

var result = sass.renderSync({
    file: "index.scss", outputStyle: "expanded", sourceMap: true,
    outFile: "out.css"
});
console.log(sass.info);
console.log(result);
 // ...