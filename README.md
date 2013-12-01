# rework-suit

[![Build Status](https://secure.travis-ci.org/suitcss/rework-suit.png?branch=master)](http://travis-ci.org/suitcss/rework-suit)

CSS preprocessor for [SUIT](https://github.com/suitcss/suit), built on top of
[Rework](https://github.com/visionmedia/rework).

## Installation

Install with npm:

```
npm install rework-suit
```

## Features

* [Autoprefixer](https://github.com/ai/autoprefixer)
* [Variables](https://github.com/visionmedia/rework-vars) based on the draft
  [W3C-style CSS Variables](http://www.w3.org/TR/css-variables/)
* IE 8 "support" for `opacity`.

Original:

```css
:root {
    var-color: green;
}

.example {
    /* vendor prefixes */
    background: linear-gradient(to top, #fff, #000);
    display: flex;
    /* IE opacity */
    opacity: 0.5;
    /* simple variable */
    color: var(color);
    /* variable with fallback */
    outline: var(outline, 1px solid red);
}
```

Compiled:

```css
.example {
  /* vendor prefixes */
  background: -webkit-gradient(linear, bottom left, top left, from(#fff), to(#000));
  background: -webkit-linear-gradient(bottom, #fff, #000);
  background: linear-gradient(to top, #fff, #000);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  /* IE opacity */
  opacity: 0.5;
  -ms-filter: "alpha(opacity=50)";
  /* simple variable */
  color: green;
  /* variable with fallback */
  outline: 1px solid red;
}
```

## API

### suit([browsers])

Optionally pass an array of the browsers you want autoprefixer to know about.
See the [autoprefixer](https://github.com/ai/autoprefixer) documentation for
more details.

### suit([browsers]).compile(css)

Process a string of CSS. Returns a string.

### suit([browsers]).rework

Use as a Rework plugin.

## Use

To process CSS directly:

```js
var fs = require('fs');
// require the module
var suit = require('rework-suit');

// get the CSS
var css = fs.readFileSync('build/build.css', 'utf8').toString();

// process the CSS
var compiled = suit(['> 2%']).compile(css)

// write to disk
fs.writeFileSync('build/build.css', compiled);
```

As a Rework plugin:


```js
var fs = require('fs');
var rework = require('rework');
// require the module
var suit = require('rework-suit');

// get the CSS
var css = fs.readFileSync('build/build.css', 'utf8').toString();

// process the CSS with Rework
var compiled = rework(css)
  .use(suit(['> 2%']).rework)
  .toString();

// write to disk
fs.writeFileSync('build/build.css', compiled);
```

## Testing

Install all dependencies and run the tests:

```
make
```

Run just the tests:

```
make test
```
