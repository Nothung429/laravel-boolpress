const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// compilazione assets per backoffice
mix.js('resources/js/admin.js', 'public/js')
.sass('resources/sass/admin.scss', 'public/css');

// compilazione assets per frontoffice
mix.js('resources/js/front_office.js', 'public/js')
.sass('resources/sass/guest/front_office.scss', 'public/css');