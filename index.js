'use strict';

/**
 * Module dependencies
 */

var calc = require('rework-calc');
var customMedia = require('rework-custom-media');
var rework = require('rework');
var vars = require('rework-vars')();

/**
 * Module exports
 */

module.exports = suit;

/**
 * Apply rework plugins to a rework instance; export as a rework plugin
 *
 * @param {String} ast Rework AST
 * @param {Object} reworkObj Rework instance
 */

function suit(options) {
  return function (ast, reworkObj) {
    reworkObj
      // custom media queries
      .use(customMedia)
      // variables
      .use(vars)
      // calc
      .use(calc);
  };
}
