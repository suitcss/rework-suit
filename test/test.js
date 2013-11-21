'use strict';

var expect = require('chai').expect;
var fs = require('fs');
var suit = require('../index');

describe('suit()', function () {
    it('throws an error when there is no input file', function () {
        var compiled = function () {
            return suit({});
        };
        expect(compiled).to.throw(Error);
    });

    it('generates the expected output', function () {
        var expected = fs.readFileSync('test/fixtures/expected.css', 'utf-8').toString().trim();
        var compiled = suit({
            browsers: [
                'android >=4',
                'ff >=20',
                'ie >=8',
                'safari >=6'
            ],
            src: 'test/fixtures/original.css'
        });

        // for debugging
        fs.writeFileSync('test/tmp/compiled.css', compiled);

        expect(compiled).to.equal(expected);

    });
});
