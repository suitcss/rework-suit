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
* IE 8 "support" for `opacity`.

Original:

```css
:root {
    var-border: 5px solid red;
    var-color: #069;
}

.example {
    background: linear-gradient(to top, #fff, #000);
    border: var(border);
    color: var(color);
    display: flex;
    opacity: 0.5;
}
```

Compiled:

```css
:root {
  var-border: 5px solid red;
  var-color: #069;
}

.example {
  background: -webkit-linear-gradient(bottom, #fff, #000);
  background: linear-gradient(to top, #fff, #000);
  border: 5px solid red;
  color: #069;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  opacity: 0.5;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
}
```

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
