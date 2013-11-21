'use strict';

/**
 * Provide IE 8 opacity
 * Adapted from rework-mixins
 */

module.exports = function (str) {
    var vals = str.split(/\s+/);
    var a = parseFloat(vals.shift());
    var n = a * 100 | 0;
    var tail = vals.length ? ' ' + vals.join(' ') : '';
    return {
        'opacity': a + tail,
        '-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + n + ')' + tail
    };
};
