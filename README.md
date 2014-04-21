# rework-suit

[![Build Status](https://secure.travis-ci.org/suitcss/rework-suit.png?branch=master)](http://travis-ci.org/suitcss/rework-suit)

A [Rework](https://github.com/visionmedia/rework) plugin for use with
[SUITCSS](https://github.com/suitcss/suit).

## Installation

Install with npm:

```
npm install --save-dev rework-suit
```

## Features

* [W3C-style CSS Variables](http://www.w3.org/TR/css-variables/). Via [rework-](https://github.com/reworkcss/rework-vars).
* IE 8 "support" for basic use of `calc()`. Via [rework-calc](https://github.com/reworkcss/rework-calc).
* IE 8 "support" for `opacity`. Via [rework-mixin-opacity](https://github.com/reworkcss/rework-mixin-opacity).

Original:

```css
:root {
  --color: green;
  --width: 100px;
}

.example {
  /* IE opacity */
  opacity: 0.5;
  /* simple variable */
  color: var(--color);
  /* variable with fallback */
  outline: var(--outline, 1px solid red);
  /* calc */
  width: calc(var(--width) * 2);
}
```

yields:

```css
.example {
  /* IE opacity */
  opacity: 0.5;
  -ms-filter: "alpha(opacity=50)";
  /* simple variable */
  color: green;
  /* variable with fallback */
  outline: 1px solid red;
  /* calc */
  width: 200px;
}
```

## Use

As a Rework plugin:

```js
var css = fs.readFileSync('build/build.css', 'utf8').toString();

var processed = rework(css)
  .use(suit)
  .toString();
```

## Testing

Install all dependencies and run the tests:

```
npm install && npm test
```

Watch and re-run the tests:

```
npm run watch
```
