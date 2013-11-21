'use strict';

/**
 * Module dependencies
 */

var autoprefixer = require('autoprefixer');
var fs = require('fs');
var rework = require('rework');
var vars = require('rework-vars');
var opacity = require('./lib/opacity');

/**
 * Module exports
 */

module.exports = suit;

/**
 * @param {Object} options the `browsers` and `src` configuration
 * @return {String} the compiled CSS
 */

function suit(options) {
    options = options || {};
    var browsers = options.browsers || [];
    var src = options.src;

    if (!fs.existsSync(src)) {
        throw new Error('rework-suit: missing a source file');
    }

    var original = fs.readFileSync(src, 'utf8');

    var compiled = rework(original)
        // css variables
        .use(vars())
        // opacity for IE 8
        .use(rework.mixin({
            opacity: opacity
        }))
        // vendor prefixes
        .use(autoprefixer(browsers).rework)
        .toString();

    return compiled;
}
