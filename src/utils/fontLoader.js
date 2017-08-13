'use strict';
var Stylis = require('stylis');
var mounter = require('./cssMounter');
var loaded = {};

module.exports.load = function(familyName) {
    if (loaded[familyName]) {
        return;
    }
    var s = new Stylis({
        global: true
    });
    var cssText = s('','@import url(\'https://fonts.googleapis.com/css?family=' + familyName + '\');');
    mounter.mount(cssText);
    loaded[familyName] = true;
};