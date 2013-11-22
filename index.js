'use strict';

/**
 * Module dependencies
 */

var autoprefixer = require('autoprefixer');
var fs = require('fs');
var rework = require('rework');
var vars = require('rework-vars')();
var opacity = require('./lib/opacity');

/**
 * Module exports
 */

module.exports = suit;

/**
 * Specify the browsers that autoprefixer should know about
 *
 * @param {Array} browsers browser configuration data for autoprefixer
 * @return {suit}
 */

var browserConfig;

function suit(browsers) {
    if (browsers && Object.prototype.toString.call(browsers) !== '[object Array]') {
        throw new Error('rework-suit: `suit(browsers)` If supplied, the argument must be an Array');
    }

    browserConfig = browsers || autoprefixer['default'];
    return suit;
}

/**
 * Compile CSS using Rework rework plugins to a rework instance; export as a
 * rework plugin
 *
 * @param {String} css the source CSS
 * @return {String}
 */

suit.compile = function (css) {
    if (typeof css !== 'string') {
        throw new Error('rework-suit: `compile(css)` The argument must be a String');
    }

    return rework(css)
      .use(suit(browserConfig).rework)
      .toString();
};

/**
 * Apply rework plugins to a rework instance; export as a rework plugin
 *
 * @param {String} css
 * @param {Object} reworkInstance
 */

suit.rework = function (css, reworkInstance) {
    reworkInstance
    // css variables
    .use(vars)
    // opacity for IE 8
    .use(rework.mixin({
        opacity: opacity
    }))
    // vendor prefixes
    .use(autoprefixer(browserConfig).rework);
};
