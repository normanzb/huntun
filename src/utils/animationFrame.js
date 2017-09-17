'use strict';

var request = window.requestAnimationFrame;
var cancel = window.cancelAnimationFrame;

var lastTime = 0;
var vendors = ['ms', 'moz', 'webkit', 'o'];
for(var x = 0; x < vendors.length && !request; ++x) {
    request = window[vendors[x]+'RequestAnimationFrame'];
    cancel = window[vendors[x]+'CancelAnimationFrame'] || 
        window[vendors[x]+'CancelRequestAnimationFrame'];
}

if (!request)
    request = function(callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

if (!cancel)
    cancel = function(id) {
        clearTimeout(id);
    };

module.exports.request = request.bind(window);
module.exports.cancel = cancel.bind(window);