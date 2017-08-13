'use strict';
exports.mount = function(cssText) {
    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = cssText;
    }
    else {
        style.appendChild(document.createTextNode(cssText));
    }
    var head = document.documentElement.querySelector('head');
    head.appendChild(style);
};