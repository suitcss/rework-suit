'use strict';

/**
 * Module dependencies
 */

var calc = require('rework-calc');
var customMedia = require('rework-custom-media');
var mixin = require('rework-plugin-mixin');
var rework = require('rework');
var opacity = require('rework-mixin-opacity');
var vars = require('rework-vars')();

/**
 * Module exports
 */

module.exports = suit;

/**
 * Apply rework plugins to a rework instance; export as a rework plugin
 *
 * @param {String} ast Rework AST
 * @param {Object} reworkInstance Rework instance
 */

function suit(ast, reworkInstance) {
  reworkInstance
    // css custom media queries
    .use(customMedia)
    // css variables
    .use(vars)
    // css calc
    .use(calc)
    // opacity for IE 8
    .use(mixin({
      opacity: opacity
    }));
}
