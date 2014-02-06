'use strict';

var expect = require('chai').expect;
var fs = require('fs');
var rework = require('rework');
var suit = require('../index');

describe('suit()', function () {
  var expected = fs.readFileSync('test/fixtures/expected.css', 'utf-8').toString().trim();
  var original = fs.readFileSync('test/fixtures/original.css', 'utf-8').toString().trim();

  it('generates the expected output', function () {
    var processed = rework(original).use(suit).toString().trim();
    expect(processed).to.equal(expected);
  });
});
