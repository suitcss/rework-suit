'use strict';

var expect = require('chai').expect;
var fs = require('fs-extra');
var rework = require('rework');
var suit = require('../index');

describe('suit()', function () {
  var expectedDefault = fs.readFileSync('test/fixtures/expected-default.css', 'utf-8').toString().trim();
  var expectedCustom = fs.readFileSync('test/fixtures/expected-custom.css', 'utf-8').toString().trim();
  var original = fs.readFileSync('test/fixtures/original.css', 'utf-8').toString().trim();
  var browsers = [
    'android >=4',
    'ff >=20',
    'ie >=8',
    'safari >=6'
  ];

  describe('.compile()', function () {
    it('throws an error when there is no input String', function () {
      var compiled = function () {
        return suit().compile();
      };
      expect(compiled).to.throw(Error);
    });

    it('generates the expected output with default browser config', function () {
      var compiled = suit().compile(original);

      // for debugging
      fs.outputFileSync('test/tmp/compiled-default.css', compiled);

      expect(compiled).to.equal(expectedDefault);
    });

    it('generates the expected output with custom browser config', function () {
      var compiled = suit(browsers).compile(original);

      // for debugging
      fs.outputFileSync('test/tmp/compiled-custom.css', compiled);

      expect(compiled).to.equal(expectedCustom);
    });
  });

  describe('.rework()', function () {
    it('generates the expected output with default browser config', function () {
      var compiled = rework(original)
        .use(suit().rework)
        .toString();

      // for debugging
      fs.outputFileSync('test/tmp/compiled-rework-default.css', compiled);

      expect(compiled).to.equal(expectedDefault);
    });

    it('generates the expected output with custom browser config', function () {
      var compiled = rework(original)
        .use(suit(browsers).rework)
        .toString();

      // for debugging
      fs.outputFileSync('test/tmp/compiled-rework-custom.css', compiled);

      expect(compiled).to.equal(expectedCustom);
    });
  });

});
