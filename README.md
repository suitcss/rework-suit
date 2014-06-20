# rework-suit

[![Build Status](https://secure.travis-ci.org/suitcss/rework-suit.png?branch=master)](http://travis-ci.org/suitcss/rework-suit)

A [Rework](https://github.com/reworkcss/rework) plugin for use with
[SUITCSS](https://github.com/suitcss/suit).

## Installation

Install with npm:

```
npm install --save-dev rework-suit
```

## Features

* [W3C-style CSS Variables](http://www.w3.org/TR/css-variables/). Via [rework-vars](https://github.com/reworkcss/rework-vars).
* [W3C-style CSS Custom Media Queries](http://dev.w3.org/csswg/mediaqueries/#custom-mq). Via [rework-custom-media](https://github.com/reworkcss/rework-custom-media).
* `@import` inliner. Via [rework-npm](https://github.com/conradz/rework-npm).
* Resolve basic `calc()` expressions. Via [rework-calc](https://github.com/reworkcss/rework-calc).
* Check for IE selector limit. Via [rework-ie-limits](https://github.com/reworkcss/rework-ie-limits).

Original:

```css
@import "normalize.css";

@custom-media --narrow-viewport all and (min-width:300px);

:root {
  --color: green;
  --width: 100px;
}

@media (--narrow-viewport) {
  .example {
    /* simple variable */
    color: var(--color);
    /* variable with fallback */
    outline: var(--outline, 1px solid red);
    /* calc */
    width: calc(var(--width) * 2);
  }
}
```

yields:

```css
/* …inlined normalize.css source code… */

@media all and (min-width:300px) {
  .example {
    /* simple variable */
    color: green;
    /* variable with fallback */
    outline: 1px solid red;
    /* calc */
    width: 200px;
  }
}
```

## Use

As a Rework plugin:

```js
var css = fs.readFileSync('build/build.css', 'utf8').toString();

var processed = rework(css)
  .use(suit())
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
