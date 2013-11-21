# rework-suit

[![Build Status](https://secure.travis-ci.org/suitcss/rework-suit.png?branch=master)](http://travis-ci.org/suitcss/rework-suit)

CSS preprocessor for SUIT, built on top of [Rework](http://github.com/visionmedia/rework).

## Installation

Install with npm:

```
npm install --save rework-suit
```

## Features

* [Autoprefixer](https://github.com/ai/autoprefixer)
* [Variables](https://github.com/visionmedia/rework-vars) based on the draft
  [CSS Variables Spec](http://www.w3.org/TR/css-variables-1/)
* IE "support" for `opacity`.

## API

### suit(config)

Takes an object (configuration) and returns a string of compiled CSS.

#### `config.browsers`: Array (of String)

The browsers you want autoprefixer to know about. See the
[autoprefixer](https://github.com/ai/autoprefixer) documentation for more
details.

#### `config.src`: String

The path to the source file you want to process.

## Use

```js
var fs = require('fs');
// require the module
var suit = require('rework-suit');

// process some CSS
var compiled = suit({
    // the CSS file to process
    src: 'build/build.css'
    // the browsers you want autoprefixer to know about
    browsers: [
        '> 2%'
    ]
});

// write to disk
fs.writeFile('build/build.css', compiled);
```

## Testing

From the repo root:

```
npm install
npm test
```
