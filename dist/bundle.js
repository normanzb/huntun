(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bundle = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var huntun = {
    ScrollBar: require('./src/ScrollBar'),
    Prompt: require('./src/Prompt'),
    Button: require('./src/Button'),
    Close: require('./src/Close'),
    Label: require('./src/Label'),
    fields: {
        CheckBox: require('./src/fields/CheckBox'),
        Text: require('./src/fields/Text'),
        TextButton: require('./src/fields/TextButton')
    }
};
if (typeof window) {
    window.huntun = huntun;
}
module.exports = huntun;
},{"./src/Button":9,"./src/Close":10,"./src/Label":11,"./src/Prompt":12,"./src/ScrollBar":13,"./src/fields/CheckBox":16,"./src/fields/Text":17,"./src/fields/TextButton":18}],2:[function(require,module,exports){
/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp$this=this;
(function(v,p){"function"===typeof define&&define.amd?define([],p):"object"===typeof module&&module.exports?module.exports=p():v.anime=p()})(this,function(){function v(a){if(!g.col(a))try{return document.querySelectorAll(a)}catch(b){}}function p(a){return a.reduce(function(a,d){return a.concat(g.arr(d)?p(d):d)},[])}function w(a){if(g.arr(a))return a;g.str(a)&&(a=v(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function F(a,b){return a.some(function(a){return a===b})}
function A(a){var b={},d;for(d in a)b[d]=a[d];return b}function G(a,b){var d=A(a),c;for(c in a)d[c]=b.hasOwnProperty(c)?b[c]:a[c];return d}function B(a,b){var d=A(a),c;for(c in b)d[c]=g.und(a[c])?b[c]:a[c];return d}function S(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,d,h){return b+b+d+d+h+h});var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);a=parseInt(b[1],16);var d=parseInt(b[2],16),b=parseInt(b[3],16);return"rgb("+a+","+d+","+b+")"}function T(a){function b(a,b,c){0>
c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);a=parseInt(d[1])/360;var c=parseInt(d[2])/100,d=parseInt(d[3])/100;if(0==c)c=d=a=d;else{var e=.5>d?d*(1+c):d+c-d*c,l=2*d-e,c=b(l,e,a+1/3),d=b(l,e,a);a=b(l,e,a-1/3)}return"rgb("+255*c+","+255*d+","+255*a+")"}function x(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(a))return a[2]}function U(a){if(-1<a.indexOf("translate"))return"px";
if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function H(a,b){return g.fnc(a)?a(b.target,b.id,b.total):a}function C(a,b){if(b in a.style)return getComputedStyle(a).getPropertyValue(b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function I(a,b){if(g.dom(a)&&F(V,b))return"transform";if(g.dom(a)&&(a.getAttribute(b)||g.svg(a)&&a[b]))return"attribute";if(g.dom(a)&&"transform"!==b&&C(a,b))return"css";if(null!=a[b])return"object"}function W(a,b){var d=U(b),d=-1<b.indexOf("scale")?
1:0+d;a=a.style.transform;if(!a)return d;for(var c=[],e=[],l=[],h=/(\w+)\((.+?)\)/g;c=h.exec(a);)e.push(c[1]),l.push(c[2]);a=l.filter(function(a,c){return e[c]===b});return a.length?a[0]:d}function J(a,b){switch(I(a,b)){case "transform":return W(a,b);case "css":return C(a,b);case "attribute":return a.getAttribute(b)}return a[b]||0}function K(a,b){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;b=parseFloat(b);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return b+a;case "-":return b-a;case "*":return b*
a}}function D(a){return g.obj(a)&&a.hasOwnProperty("totalLength")}function X(a,b){function d(c){c=void 0===c?0:c;return a.el.getPointAtLength(1<=b+c?b+c:0)}var c=d(),e=d(-1),l=d(1);switch(a.property){case "x":return c.x;case "y":return c.y;case "angle":return 180*Math.atan2(l.y-e.y,l.x-e.x)/Math.PI}}function L(a,b){var d=/-?\d*\.?\d+/g;a=D(a)?a.totalLength:a;if(g.col(a))b=g.rgb(a)?a:g.hex(a)?S(a):g.hsl(a)?T(a):void 0;else{var c=x(a);a=c?a.substr(0,a.length-c.length):a;b=b?a+b:a}b+="";return{original:b,
numbers:b.match(d)?b.match(d).map(Number):[0],strings:b.split(d)}}function Y(a,b){return b.reduce(function(b,c,e){return b+a[e-1]+c})}function M(a){return(a?p(g.arr(a)?a.map(w):w(a)):[]).filter(function(a,d,c){return c.indexOf(a)===d})}function Z(a){var b=M(a);return b.map(function(a,c){return{target:a,id:c,total:b.length}})}function aa(a,b){var d=A(b);if(g.arr(a)){var c=a.length;2!==c||g.obj(a[0])?g.fnc(b.duration)||(d.duration=b.duration/c):a={value:a}}return w(a).map(function(a,c){c=c?0:b.delay;
a=g.obj(a)&&!D(a)?a:{value:a};g.und(a.delay)&&(a.delay=c);return a}).map(function(a){return B(a,d)})}function ba(a,b){var d={},c;for(c in a){var e=H(a[c],b);g.arr(e)&&(e=e.map(function(a){return H(a,b)}),1===e.length&&(e=e[0]));d[c]=e}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return g.arr(a)?y.apply(this,a):N[a]}function da(a,b){var d;return a.tweens.map(function(c){c=ba(c,b);var e=c.value,l=J(b.target,a.name),h=d?d.to.original:l,h=g.arr(e)?e[0]:h,m=K(g.arr(e)?
e[1]:e,h),l=x(m)||x(h)||x(l);c.isPath=D(e);c.from=L(h,l);c.to=L(m,l);c.start=d?d.end:a.offset;c.end=c.start+c.delay+c.duration;c.easing=ca(c.easing);c.elasticity=(1E3-Math.min(Math.max(c.elasticity,1),999))/1E3;g.col(c.from.original)&&(c.round=1);return d=c})}function ea(a,b){return p(a.map(function(a){return b.map(function(b){var c=I(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})).filter(function(a){return!g.und(a)})}
function O(a,b,d){var c="delay"===a?Math.min:Math.max;return b.length?c.apply(Math,b.map(function(b){return b[a]})):d[a]}function fa(a){var b=G(ga,a),d=G(ha,a),c=Z(a.targets),e=[],g=B(b,d),h;for(h in a)g.hasOwnProperty(h)||"targets"===h||e.push({name:h,offset:g.offset,tweens:aa(a[h],d)});a=ea(c,e);return B(b,{children:[],animatables:c,animations:a,duration:O("duration",a,d),delay:O("delay",a,d)})}function n(a){function b(){return window.Promise&&new Promise(function(a){return Q=a})}function d(a){return f.reversed?
f.duration-a:a}function c(a){for(var b=0,c={},d=f.animations,e={};b<d.length;){var g=d[b],h=g.animatable,m=g.tweens;e.tween=m.filter(function(b){return a<b.end})[0]||m[m.length-1];e.isPath$1=e.tween.isPath;e.round=e.tween.round;e.eased=e.tween.easing(Math.min(Math.max(a-e.tween.start-e.tween.delay,0),e.tween.duration)/e.tween.duration,e.tween.elasticity);m=Y(e.tween.to.numbers.map(function(a){return function(b,c){c=a.isPath$1?0:a.tween.from.numbers[c];b=c+a.eased*(b-c);a.isPath$1&&(b=X(a.tween.value,
b));a.round&&(b=Math.round(b*a.round)/a.round);return b}}(e)),e.tween.to.strings);ia[g.type](h.target,g.property,m,c,h.id);g.currentValue=m;b++;e={isPath$1:e.isPath$1,tween:e.tween,eased:e.eased,round:e.round}}if(c)for(var k in c)E||(E=C(document.body,"transform")?"transform":"-webkit-transform"),f.animatables[k].target.style[E]=c[k].join(" ");f.currentTime=a;f.progress=a/f.duration*100}function e(a){if(f[a])f[a](f)}function g(){f.remaining&&!0!==f.remaining&&f.remaining--}function h(a){var h=f.duration,
l=f.offset,n=f.delay,P=f.currentTime,q=f.reversed,r=d(a),r=Math.min(Math.max(r,0),h);if(f.children){var p=f.children;if(r>=f.currentTime)for(var u=0;u<p.length;u++)p[u].seek(r);else for(u=p.length;u--;)p[u].seek(r)}r>l&&r<h?(c(r),!f.began&&r>=n&&(f.began=!0,e("begin")),e("run")):(r<=l&&0!==P&&(c(0),q&&g()),r>=h&&P!==h&&(c(h),q||g()));a>=h&&(f.remaining?(t=m,"alternate"===f.direction&&(f.reversed=!f.reversed)):(f.pause(),"Promise"in window&&(Q(),R=b()),f.completed||(f.completed=!0,e("complete"))),
k=0);e("update")}a=void 0===a?{}:a;var m,t,k=0,Q=null,R=b(),f=fa(a);f.reset=function(){var a=f.direction,b=f.loop;f.currentTime=0;f.progress=0;f.paused=!0;f.began=!1;f.completed=!1;f.reversed="reverse"===a;f.remaining="alternate"===a&&1===b?2:b;for(a=f.children.length;a--;)b=f.children[a],b.seek(b.offset),b.reset()};f.tick=function(a){m=a;t||(t=m);h((k+m-t)*n.speed)};f.seek=function(a){h(d(a))};f.pause=function(){var a=q.indexOf(f);-1<a&&q.splice(a,1);f.paused=!0};f.play=function(){f.paused&&(f.paused=
!1,t=0,k=d(f.currentTime),q.push(f),z||ja())};f.reverse=function(){f.reversed=!f.reversed;t=0;k=d(f.currentTime)};f.restart=function(){f.pause();f.reset();f.play()};f.finished=R;f.reset();f.autoplay&&f.play();return f}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},ha={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},V="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
E,g={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||g.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return g.hex(a)||
g.rgb(a)||g.hsl(a)}},y=function(){function a(a,d,c){return(((1-3*c+3*d)*a+(3*c-6*d))*a+3*d)*a}return function(b,d,c,e){if(0<=b&&1>=b&&0<=c&&1>=c){var g=new Float32Array(11);if(b!==d||c!==e)for(var h=0;11>h;++h)g[h]=a(.1*h,b,c);return function(h){if(b===d&&c===e)return h;if(0===h)return 0;if(1===h)return 1;for(var m=0,k=1;10!==k&&g[k]<=h;++k)m+=.1;--k;var k=m+(h-g[k])/(g[k+1]-g[k])*.1,l=3*(1-3*c+3*b)*k*k+2*(3*c-6*b)*k+3*b;if(.001<=l){for(m=0;4>m;++m){l=3*(1-3*c+3*b)*k*k+2*(3*c-6*b)*k+3*b;if(0===l)break;
var n=a(k,b,c)-h,k=k-n/l}h=k}else if(0===l)h=k;else{var k=m,m=m+.1,f=0;do n=k+(m-k)/2,l=a(n,b,c)-h,0<l?m=n:k=n;while(1e-7<Math.abs(l)&&10>++f);h=n}return a(h,d,e)}}}}(),N=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var b="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,
.335],[.6,-.28,.735,.045],a],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},c={linear:y(.25,.25,.75,.75)},e={},l;for(l in d)e.type=l,d[e.type].forEach(function(a){return function(d,
e){c["ease"+a.type+b[e]]=g.fnc(d)?d:y.apply($jscomp$this,d)}}(e)),e={type:e.type};return c}(),ia={css:function(a,b,d){return a.style[b]=d},attribute:function(a,b,d){return a.setAttribute(b,d)},object:function(a,b,d){return a[b]=d},transform:function(a,b,d,c,e){c[e]||(c[e]=[]);c[e].push(b+"("+d+")")}},q=[],z=0,ja=function(){function a(){z=requestAnimationFrame(b)}function b(b){var c=q.length;if(c){for(var d=0;d<c;)q[d]&&q[d].tick(b),d++;a()}else cancelAnimationFrame(z),z=0}return a}();n.version="2.0.2";
n.speed=1;n.running=q;n.remove=function(a){a=M(a);for(var b=q.length;b--;)for(var d=q[b],c=d.animations,e=c.length;e--;)F(a,c[e].animatable.target)&&(c.splice(e,1),c.length||d.pause())};n.getValue=J;n.path=function(a,b){var d=g.str(a)?v(a)[0]:a,c=b||100;return function(a){return{el:d,property:a,totalLength:d.getTotalLength()*(c/100)}}};n.setDashoffset=function(a){var b=a.getTotalLength();a.setAttribute("stroke-dasharray",b);return b};n.bezier=y;n.easings=N;n.timeline=function(a){var b=n(a);b.pause();
b.duration=0;b.add=function(a){b.children.forEach(function(a){a.began=!0;a.completed=!0});w(a).forEach(function(a){var c=b.duration,d=a.offset;a.autoplay=!1;a.offset=g.und(d)?c:K(d,c);b.seek(a.offset);a=n(a);a.duration>c&&(b.duration=a.duration);a.began=!0;b.children.push(a)});b.reset();b.seek(0);b.autoplay&&b.restart();return b};return b};n.random=function(a,b){return Math.floor(Math.random()*(b-a+1))+a};return n});
},{}],3:[function(require,module,exports){
/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/* global define */

;(function ($) {
  'use strict'

  /*
  * Add integers, wrapping at 2^32. This uses 16-bit operations internally
  * to work around bugs in some JS interpreters.
  */
  function safeAdd (x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF)
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
    return (msw << 16) | (lsw & 0xFFFF)
  }

  /*
  * Bitwise rotate a 32-bit number to the left.
  */
  function bitRotateLeft (num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt))
  }

  /*
  * These functions implement the four basic operations the algorithm uses.
  */
  function md5cmn (q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
  }
  function md5ff (a, b, c, d, x, s, t) {
    return md5cmn((b & c) | ((~b) & d), a, b, x, s, t)
  }
  function md5gg (a, b, c, d, x, s, t) {
    return md5cmn((b & d) | (c & (~d)), a, b, x, s, t)
  }
  function md5hh (a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t)
  }
  function md5ii (a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | (~d)), a, b, x, s, t)
  }

  /*
  * Calculate the MD5 of an array of little-endian words, and a bit length.
  */
  function binlMD5 (x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << (len % 32)
    x[(((len + 64) >>> 9) << 4) + 14] = len

    var i
    var olda
    var oldb
    var oldc
    var oldd
    var a = 1732584193
    var b = -271733879
    var c = -1732584194
    var d = 271733878

    for (i = 0; i < x.length; i += 16) {
      olda = a
      oldb = b
      oldc = c
      oldd = d

      a = md5ff(a, b, c, d, x[i], 7, -680876936)
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)

      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
      b = md5gg(b, c, d, a, x[i], 20, -373897302)
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)

      a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
      d = md5hh(d, a, b, c, x[i], 11, -358537222)
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)

      a = md5ii(a, b, c, d, x[i], 6, -198630844)
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)

      a = safeAdd(a, olda)
      b = safeAdd(b, oldb)
      c = safeAdd(c, oldc)
      d = safeAdd(d, oldd)
    }
    return [a, b, c, d]
  }

  /*
  * Convert an array of little-endian words to a string
  */
  function binl2rstr (input) {
    var i
    var output = ''
    var length32 = input.length * 32
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF)
    }
    return output
  }

  /*
  * Convert a raw string to an array of little-endian words
  * Characters >255 have their high-byte silently ignored.
  */
  function rstr2binl (input) {
    var i
    var output = []
    output[(input.length >> 2) - 1] = undefined
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0
    }
    var length8 = input.length * 8
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32)
    }
    return output
  }

  /*
  * Calculate the MD5 of a raw string
  */
  function rstrMD5 (s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8))
  }

  /*
  * Calculate the HMAC-MD5, of a key and some data (raw strings)
  */
  function rstrHMACMD5 (key, data) {
    var i
    var bkey = rstr2binl(key)
    var ipad = []
    var opad = []
    var hash
    ipad[15] = opad[15] = undefined
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8)
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636
      opad[i] = bkey[i] ^ 0x5C5C5C5C
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8)
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128))
  }

  /*
  * Convert a raw string to a hex string
  */
  function rstr2hex (input) {
    var hexTab = '0123456789abcdef'
    var output = ''
    var x
    var i
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i)
      output += hexTab.charAt((x >>> 4) & 0x0F) +
      hexTab.charAt(x & 0x0F)
    }
    return output
  }

  /*
  * Encode a string as utf-8
  */
  function str2rstrUTF8 (input) {
    return unescape(encodeURIComponent(input))
  }

  /*
  * Take string arguments and return either raw or hex encoded strings
  */
  function rawMD5 (s) {
    return rstrMD5(str2rstrUTF8(s))
  }
  function hexMD5 (s) {
    return rstr2hex(rawMD5(s))
  }
  function rawHMACMD5 (k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
  }
  function hexHMACMD5 (k, d) {
    return rstr2hex(rawHMACMD5(k, d))
  }

  function md5 (string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string)
      }
      return rawMD5(string)
    }
    if (!raw) {
      return hexHMACMD5(key, string)
    }
    return rawHMACMD5(key, string)
  }

  if (typeof define === 'function' && define.amd) {
    define(function () {
      return md5
    })
  } else if (typeof module === 'object' && module.exports) {
    module.exports = md5
  } else {
    $.md5 = md5
  }
}(this))

},{}],4:[function(require,module,exports){
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.returnExportsGlobal=b()}):"object"==typeof exports?module.exports=b():a.XInput=b()}(this,function(){var a=Function("return this")(),b=function(a){var b=a.Function.prototype,c=a.Array.prototype;return b.bind||function(a){var b=c.slice,d=this,e=b.call(arguments);return e.shift(),function f(){return this instanceof f&&(a=this),d.apply(a,e.concat(b.call(arguments)))}}}(a),c=function(a){function b(a){var b=this;null!=window.event&&j in window.event&&null!=window.event[j]&&""!==window.event[j]&&"value"!==window.event[j]||b._el.value!=b._old&&(b._old=b._el.value,b.oninput(a))}function c(){document.attachEvent("onselectionchange",this._onchange)}function d(){document.detachEvent("onselectionchange",this._onchange)}function e(){this.oninput()}function f(){this._old="",this._el=null,this._onchange=a.call(b,this),this._onfocus=a.call(c,this),this._onblur=a.call(d,this),this._oninput=a.call(e,this),this.oninput=function(){}}var g="input",h="textarea",i="change",j="propertyName",k=function(){function a(a){if(a.setAttribute("oninput","return"),"function"==typeof a.oninput)return!0;try{var b=document.createEvent("KeyboardEvent"),c=!1,d=function(a){c=!0,a.preventDefault(),a.stopPropagation()};return b.initKeyEvent("keypress",!0,!0,window,!1,!1,!1,!1,0,"e".charCodeAt(0)),document.body.appendChild(a),a.addEventListener(g,d,!1),a.focus(),a.dispatchEvent(b),a.removeEventListener(g,d,!1),document.body.removeChild(a),c}catch(e){}}var b=document.createElement(g);return"oninput"in b||a(b)}(),l=f.prototype;return l.trigger=function(){return this._onchange()},l.sync=function(){this._old=this._el.value},l.observe=function(a){if(null==a||a.tagName.toLowerCase()!=g&&a.tagName.toLowerCase()!=h)throw"Target input element must be specified.";var b=this;if(b._el=a,a.attachEvent)b._old=a.value,a.attachEvent("onpropertychange",b._onchange),a.attachEvent("onfocus",b._onfocus),a.attachEvent("onblur",b._onblur),a.attachEvent("onkeypress",b._onchange),a.attachEvent("onkeyup",b._onchange);else{if(!k)throw"Something wrong, should never goes to here.";a.addEventListener(g,b._onchange,!1),a.addEventListener(i,b._onchange,!1)}},l.neglect=function(){var a=this,b=a._el;b.attachEvent?(b.detachEvent("onpropertychange",a._onchange),b.detachEvent("onfocus",a._onfocus),b.detachEvent("onblur",a._onblur),b.detachEvent("onkeypress",a._onchange),b.detachEvent("onkeyup",a._onchange)):(b.removeEventListener(g,a._onchange),b.removeEventListener(i,a._onchange))},l.dispose=function(){var a=this;a.neglect(),a._el=null},f}(b);return c});
},{}],5:[function(require,module,exports){
/**
* Copyright (c) 2017, Leon Sorokin
* All rights reserved. (MIT Licensed)
*
* domvm.full.js - DOM ViewModel
* A thin, fast, dependency-free vdom view layer
* @preserve https://github.com/leeoniya/domvm (v3.0.5, nano)
*/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.domvm = factory());
}(this, (function () { 'use strict';

// NOTE: if adding a new *VNode* type, make it < COMMENT and renumber rest.
// There are some places that test <= COMMENT to assert if node is a VNode

// VNode types
var ELEMENT	= 1;
var TEXT		= 2;
var COMMENT	= 3;

// placeholder types
var VVIEW		= 4;
var VMODEL		= 5;

var ENV_DOM = typeof window !== "undefined";
var win = ENV_DOM ? window : {};
var rAF = win.requestAnimationFrame;

var emptyObj = {};

function noop() {}

var isArr = Array.isArray;

function isSet(val) {
	return val != null;
}

function isPlainObj(val) {
	return val != null && val.constructor === Object;		//  && typeof val === "object"
}

function insertArr(targ, arr, pos, rem) {
	targ.splice.apply(targ, [pos, rem].concat(arr));
}

function isVal(val) {
	var t = typeof val;
	return t === "string" || t === "number";
}

function isFunc(val) {
	return typeof val === "function";
}

function isProm(val) {
	return typeof val === "object" && isFunc(val.then);
}



function assignObj(targ) {
	var args = arguments;

	for (var i = 1; i < args.length; i++)
		{ for (var k in args[i])
			{ targ[k] = args[i][k]; } }

	return targ;
}

// export const defProp = Object.defineProperty;

function deepSet(targ, path, val) {
	var seg;

	while (seg = path.shift()) {
		if (path.length === 0)
			{ targ[seg] = val; }
		else
			{ targ[seg] = targ = targ[seg] || {}; }
	}
}

/*
export function deepUnset(targ, path) {
	var seg;

	while (seg = path.shift()) {
		if (path.length === 0)
			targ[seg] = val;
		else
			targ[seg] = targ = targ[seg] || {};
	}
}
*/



function cmpObj(a, b) {
	for (var i in a)
		{ if (a[i] !== b[i])
			{ return false; } }

	return true;
}

function cmpArr(a, b) {
	var alen = a.length;

	if (b.length !== alen)
		{ return false; }

	for (var i = 0; i < alen; i++)
		{ if (a[i] !== b[i])
			{ return false; } }

	return true;
}

// https://github.com/darsain/raft
// rAF throttler, aggregates multiple repeated redraw calls within single animframe
function raft(fn) {
	if (!rAF)
		{ return fn; }

	var id, ctx, args;

	function call() {
		id = 0;
		fn.apply(ctx, args);
	}

	return function() {
		ctx = this;
		args = arguments;
		if (!id) { id = rAF(call); }
	};
}

function curry(fn, args, ctx) {
	return function() {
		return fn.apply(ctx, args);
	};
}

/*
export function prop(val, cb, ctx, args) {
	return function(newVal, execCb) {
		if (newVal !== undefined && newVal !== val) {
			val = newVal;
			execCb !== false && isFunc(cb) && cb.apply(ctx, args);
		}

		return val;
	};
}
*/

// adapted from https://github.com/Olical/binary-search

function VNode() {}

var VNodeProto = VNode.prototype = {
	constructor: VNode,

	type:	null,

	vm:		null,

	// all this stuff can just live in attrs (as defined) just have getters here for it
	key:	null,
	ref:	null,
	data:	null,
	hooks:	null,
	raw:	false,
	ns:		null,

	el:		null,

	tag:	null,
	attrs:	null,
	body:	null,

	flags:	0,

	_class:	null,
	_diff:	null,

	// pending removal on promise resolution
	_dead:	false,

	idx:	null,
	parent:	null,

	/*
	// break out into optional fluent module
	key:	function(val) { this.key	= val; return this; },
	ref:	function(val) { this.ref	= val; return this; },		// deep refs
	data:	function(val) { this.data	= val; return this; },
	hooks:	function(val) { this.hooks	= val; return this; },		// h("div").hooks()
	html:	function(val) { this.html	= true; return this.body(val); },

	body:	function(val) { this.body	= val; return this; },
	*/
};

function defineText(body) {
	var node = new VNode;
	node.type = TEXT;
	node.body = body;
	return node;
}

function isEvProp(name) {
	return name[0] === "o" && name[1] === "n";
}

function isSplProp(name) {
	return name[0] === "_";
}

function isStyleProp(name) {
	return name === "style";
}

function repaint(node) {
	node && node.el && node.el.offsetHeight;
}

// tests interactive props where real val should be compared
function isDynProp(tag, attr) {
//	switch (tag) {
//		case "input":
//		case "textarea":
//		case "select":
//		case "option":
			switch (attr) {
				case "value":
				case "checked":
				case "selected":
//				case "selectedIndex":
					return true;
			}
//	}

	return false;
}

function getVm(n) {
	n = n || emptyObj;
	while (n.vm == null && n.parent)
		{ n = n.parent; }
	return n.vm;
}

// creates a one-shot self-ending stream that redraws target vm
// TODO: if it's already registered by any parent vm, then ignore to avoid simultaneous parent & child refresh

var tagCache = {};

var RE_ATTRS = /\[(\w+)(?:=(\w+))?\]/g;

function cssTag(raw) {
	{
		var cached = tagCache[raw];

		if (cached == null) {
			var tag, id, cls, attr;

			tagCache[raw] = cached = {
				tag:	(tag	= raw.match( /^[-\w]+/))		?	tag[0]						: "div",
				id:		(id		= raw.match( /#([-\w]+)/))		? 	id[1]						: null,
				class:	(cls	= raw.match(/\.([-\w.]+)/))		?	cls[1].replace(/\./g, " ")	: null,
				attrs:	null,
			};

			while (attr = RE_ATTRS.exec(raw)) {
				if (cached.attrs == null)
					{ cached.attrs = {}; }
				cached.attrs[attr[1]] = attr[2] || "";
			}
		}

		return cached;
	}
}

// (de)optimization flags

// forces slow bottom-up removeChild to fire deep willRemove/willUnmount hooks,
var DEEP_REMOVE = 1;
// prevents inserting/removing/reordering of children
var FIXED_BODY = 2;
// enables fast keyed lookup of children via binary search, expects homogeneous keyed body
var KEYED_LIST = 4;
// indicates an vnode match/diff/recycler function for body
var LAZY_LIST = 8;

function initElementNode(tag, attrs, body, flags) {
	var node = new VNode;

	node.type = ELEMENT;

	if (isSet(flags))
		{ node.flags = flags; }

	node.attrs = attrs;

	var parsed = cssTag(tag);

	node.tag = parsed.tag;

	// meh, weak assertion, will fail for id=0, etc.
	if (parsed.id || parsed.class || parsed.attrs) {
		var p = node.attrs || {};

		if (parsed.id && !isSet(p.id))
			{ p.id = parsed.id; }

		if (parsed.class) {
			node._class = parsed.class;		// static class
			p.class = parsed.class + (isSet(p.class) ? (" " + p.class) : "");
		}
		if (parsed.attrs) {
			for (var key in parsed.attrs)
				{ if (!isSet(p[key]))
					{ p[key] = parsed.attrs[key]; } }
		}

//		if (node.attrs !== p)
			node.attrs = p;
	}

	var mergedAttrs = node.attrs;

	if (isSet(mergedAttrs)) {
		if (isSet(mergedAttrs._key))
			{ node.key = mergedAttrs._key; }

		if (isSet(mergedAttrs._ref))
			{ node.ref = mergedAttrs._ref; }

		if (isSet(mergedAttrs._hooks))
			{ node.hooks = mergedAttrs._hooks; }

		if (isSet(mergedAttrs._raw))
			{ node.raw = mergedAttrs._raw; }

		if (isSet(mergedAttrs._data))
			{ node.data = mergedAttrs._data; }

		if (isSet(mergedAttrs._flags))
			{ node.flags = mergedAttrs._flags; }

		if (!isSet(node.key)) {
			if (isSet(node.ref))
				{ node.key = node.ref; }
			else if (isSet(mergedAttrs.id))
				{ node.key = mergedAttrs.id; }
			else if (isSet(mergedAttrs.name))
				{ node.key = mergedAttrs.name + (mergedAttrs.type === "radio" || mergedAttrs.type === "checkbox" ? mergedAttrs.value : ""); }
		}
	}

	if (body != null)
		{ node.body = body; }

	return node;
}

function setRef(vm, name, node) {
	var path = ["refs"].concat(name.split("."));
	deepSet(vm, path, node);
}

function setDeepRemove(node) {
	while (node = node.parent)
		{ node.flags |= DEEP_REMOVE; }
}

// vnew, vold
function preProc(vnew, parent, idx, ownVm) {
	if (vnew.type === VMODEL || vnew.type === VVIEW)
		{ return; }

	vnew.parent = parent;
	vnew.idx = idx;
	vnew.vm = ownVm;

	if (vnew.ref != null)
		{ setRef(getVm(vnew), vnew.ref, vnew); }

	var nh = vnew.hooks,
		vh = ownVm && ownVm.hooks;

	if (nh && (nh.willRemove || nh.didRemove) ||
		vh && (vh.willUnmount || vh.didUnmount))
		{ setDeepRemove(vnew); }

	if (isArr(vnew.body))
		{ preProcBody(vnew); }
	else {}
}

function preProcBody(vnew) {
	var body = vnew.body;

	for (var i = 0; i < body.length; i++) {
		var node2 = body[i];

		// remove false/null/undefined
		if (node2 === false || node2 == null)
			{ body.splice(i--, 1); }
		// flatten arrays
		else if (isArr(node2)) {
			insertArr(body, node2, i--, 1);
		}
		else {
			if (node2.type == null)
				{ body[i] = node2 = defineText(""+node2); }

			if (node2.type === TEXT) {
				// remove empty text nodes
				if (node2.body == null || node2.body === "")
					{ body.splice(i--, 1); }
				// merge with previous text node
				else if (i > 0 && body[i-1].type === TEXT) {
					body[i-1].body += node2.body;
					body.splice(i--, 1);
				}
				else
					{ preProc(node2, vnew, i, null); }
			}
			else
				{ preProc(node2, vnew, i, null); }
		}
	}
}

function autoPx(name, val) {
	{ return val; }
}

// assumes if styles exist both are objects or both are strings
function patchStyle(n, o) {
	var ns =     (n.attrs || emptyObj).style;
	var os = o ? (o.attrs || emptyObj).style : null;

	// replace or remove in full
	if (ns == null || isVal(ns))
		{ n.el.style.cssText = ns; }
	else {
		for (var nn in ns) {
			var nv = ns[nn];

			if (os == null || nv != null && nv !== os[nn])
				{ n.el.style[nn] = autoPx(nn, nv); }
		}

		// clean old
		if (os) {
			for (var on in os) {
				if (ns[on] == null)
					{ n.el.style[on] = ""; }
			}
		}
	}
}

var didQueue = [];

function fireHook(name, o, n, immediate) {
	var fn = o.hooks[name];

	if (fn) {
		if (name[0] === "d" && name[1] === "i" && name[2] === "d") {	// did*
			//	console.log(name + " should queue till repaint", o, n);
			immediate ? repaint(o.parent) && fn(o, n) : didQueue.push([fn, o, n]);
		}
		else {		// will*
			//	console.log(name + " may delay by promise", o, n);
			return fn(o, n);		// or pass  done() resolver
		}
	}
}

function drainDidHooks(vm) {
	if (didQueue.length) {
		repaint(vm.node);

		var item;
		while (item = didQueue.shift())
			{ item[0](item[1], item[2]); }
	}
}

var doc = ENV_DOM ? document : null;

function closestVNode(el) {
	while (el._node == null)
		{ el = el.parentNode; }
	return el._node;
}

function createElement(tag, ns) {
	if (ns != null)
		{ return doc.createElementNS(ns, tag); }
	return doc.createElement(tag);
}

function createTextNode(body) {
	return doc.createTextNode(body);
}

function createComment(body) {
	return doc.createComment(body);
}

// ? removes if !recycled
function nextSib(sib) {
	return sib.nextSibling;
}

// ? removes if !recycled
function prevSib(sib) {
	return sib.previousSibling;
}

// TODO: this should collect all deep proms from all hooks and return Promise.all()
function deepNotifyRemove(node) {
	var hooks = node.hooks, vm = node.vm;

	var wuRes = vm && vm.hooks && fireHook("willUnmount", vm, vm.data);

	var wrRes = hooks && fireHook("willRemove", node);

	if ((node.flags & DEEP_REMOVE) === DEEP_REMOVE && isArr(node.body)) {
		for (var i = 0; i < node.body.length; i++)
			{ deepNotifyRemove(node.body[i]); }
	}

	return wuRes || wrRes;
}

function _removeChild(parEl, el, immediate) {
	var node = el._node, hooks = node.hooks, vm = node.vm;

	if ((node.flags & DEEP_REMOVE) === DEEP_REMOVE && isArr(node.body)) {
	//	var parEl = node.el;
		for (var i = 0; i < node.body.length; i++)
			{ _removeChild(el, node.body[i].el); }
	}

	parEl.removeChild(el);

	hooks && fireHook("didRemove", node, null, immediate);

	vm && vm.hooks && fireHook("didUnmount", vm, vm.data, immediate);
}

// todo: should delay parent unmount() by returning res prom?
function removeChild(parEl, el) {
	var node = el._node, hooks = node.hooks;

	// already marked for removal
	if (node._dead) { return; }

	var res = deepNotifyRemove(node);

	if (res != null && isProm(res)) {
		node._dead = true;
		res.then(curry(_removeChild, [parEl, el, true]));
	}
	else
		{ _removeChild(parEl, el); }
}

function clearChildren(parent) {
	var parEl = parent.el;

	if ((parent.flags & DEEP_REMOVE) === 0)
		{ parEl.textContent = null; }
	else {
		var el = parEl.firstChild;

		do {
			var next = nextSib(el);
			removeChild(parEl, el);
		} while (el = next);
	}
}

// todo: hooks
function insertBefore(parEl, el, refEl) {
	var node = el._node, hooks = node.hooks, inDom = el.parentNode != null;

	// el === refEl is asserted as a no-op insert called to fire hooks
	var vm = (el === refEl || !inDom) && node.vm;

	vm && vm.hooks && fireHook("willMount", vm, vm.data);

	hooks && fireHook(inDom ? "willReinsert" : "willInsert", node);
	parEl.insertBefore(el, refEl);
	hooks && fireHook(inDom ? "didReinsert" : "didInsert", node);

	vm && vm.hooks && fireHook("didMount", vm, vm.data);
}

function insertAfter(parEl, el, refEl) {
	insertBefore(parEl, el, refEl ? nextSib(refEl) : null);
}

var onevent = noop;

function config(newCfg) {
	onevent = newCfg.onevent || onevent;

	
}

function bindEv(el, type, fn) {
//	DEBUG && console.log("addEventListener");
	el[type] = fn;
}

function handle(e, fn, args) {
	var node = closestVNode(e.target);
	var vm = getVm(node);
	var out = fn.apply(null, args.concat([e, node, vm, vm.data]));

	// should these respect out === false?
	vm.onevent(e, node, vm, vm.data, args);
	onevent.call(null, e, node, vm, vm.data, args);

	if (out === false) {
		e.preventDefault();
		e.stopPropagation();
	}
}

function wrapHandler(fn, args) {
//	console.log("wrapHandler");

	return function wrap(e) {
		handle(e, fn, args);
	};
}

// delagated handlers {".moo": [fn, a, b]}, {".moo": fn}
function wrapHandlers(hash) {
//	console.log("wrapHandlers");

	return function wrap(e) {
		for (var sel in hash) {
			if (e.target.matches(sel)) {
				var hnd = hash[sel];
				var isarr = isArr(hnd);
				var fn = isarr ? hnd[0] : hnd;
				var args = isarr ? hnd.slice(1) : [];

				handle(e, fn, args);
			}
		}
	}
}

// could merge with on*

function patchEvent(node, name, nval, oval) {
	if (nval === oval)
		{ return; }

	var el = node.el;

	if (nval._raw) {
		bindEv(el, name, nval);
		return;
	}

	if (isArr(nval)) {
		var diff = oval == null || !cmpArr(nval, oval);
		diff && bindEv(el, name, wrapHandler(nval[0], nval.slice(1)));
	}
	// basic onclick: myFn (or extracted)
	else if (isFunc(nval)) {
		bindEv(el, name, wrapHandler(nval, []));
	}
	// delegated onclick: {".sel": myFn} & onclick: {".sel": [myFn, 1, 2, 3]}
	else		// isPlainObj, TODO:, diff with old/clean
		{ bindEv(el, name, wrapHandlers(nval)); }
}

function defineElement(tag, arg1, arg2, flags) {
	var attrs, body;

	if (arg2 == null) {
		if (isPlainObj(arg1))
			{ attrs = arg1; }
		else
			{ body = arg1; }
	}
	else {
		attrs = arg1;
		body = arg2;
	}

	return initElementNode(tag, attrs, body, flags);
}

//export const XML_NS = "http://www.w3.org/2000/xmlns/";
var SVG_NS = "http://www.w3.org/2000/svg";
var XLINK_NS = "http://www.w3.org/1999/xlink";

function defineSvgElement(tag, arg1, arg2, flags) {
	var n = defineElement(tag, arg1, arg2, flags);
	n.ns = SVG_NS;
	return n;
}

var XLINKHREF = "xlink:href";

function remAttr(node, name, asProp) {
	if (asProp)
		{ node.el[name] = ""; }
	else {
		if (name === XLINKHREF)
			{ node.el.removeAttributeNS(XLINK_NS, "href"); }
		else
			{ node.el.removeAttribute(name); }
	}
}

// setAttr
// diff, ".", "on*", bool vals, skip _*, value/checked/selected selectedIndex
function setAttr(node, name, val, asProp, initial) {
	var el = node.el;

	if (val == null)
		{ !initial && remAttr(node, name, false); }		//, asProp?  // will also removeAttr of style: null
	else if (node.ns != null) {
		if (name === XLINKHREF)
			{ el.setAttributeNS(XLINK_NS, "href", val); }
		else
			{ el.setAttribute(name, val); }
	}
	else if (name === "class")
		{ el.className = val; }
	else if (name === "id" || typeof val === "boolean" || asProp)
		{ el[name] = val; }
	else if (name[0] === ".")
		{ el[name.substr(1)] = val; }
	else
		{ el.setAttribute(name, val); }
}

function patchAttrs(vnode, donor, initial) {
	var nattrs = vnode.attrs || emptyObj;
	var oattrs = donor.attrs || emptyObj;

	if (nattrs === oattrs) {
		
	}
	else {
		for (var key in nattrs) {
			var nval = nattrs[key];
			var isDyn = isDynProp(vnode.tag, key);
			var oval = isDyn ? vnode.el[key] : oattrs[key];

			if (nval === oval) {}
			else if (isStyleProp(key))
				{ patchStyle(vnode, donor); }
			else if (isSplProp(key)) {}
			else if (isEvProp(key))
				{ patchEvent(vnode, key, nval, oval); }
			else
				{ setAttr(vnode, key, nval, isDyn, initial); }
		}

		// TODO: handle key[0] === "."
		// should bench style.cssText = "" vs removeAttribute("style")
		for (var key in oattrs) {
			!(key in nattrs) &&
			!isSplProp(key) &&
			remAttr(vnode, key, isDynProp(vnode.tag, key) || isEvProp(key));
		}
	}
}

function createView(view, data, key, opts) {
	if (view.type === VVIEW) {
		data	= view.data;
		key		= view.key;
		opts	= view.opts;
		view	= view.view;
	}

	return new ViewModel(view, data, key, opts);
}

//import { XML_NS, XLINK_NS } from './defineSvgElement';
function hydrateBody(vnode) {
	for (var i = 0; i < vnode.body.length; i++) {
		var vnode2 = vnode.body[i];
		var type2 = vnode2.type;

		// ELEMENT,TEXT,COMMENT
		if (type2 <= COMMENT)
			{ insertBefore(vnode.el, hydrate(vnode2)); }		// vnode.el.appendChild(hydrate(vnode2))
		else if (type2 === VVIEW) {
			var vm = createView(vnode2.view, vnode2.data, vnode2.key, vnode2.opts)._redraw(vnode, i, false);		// todo: handle new data updates
			type2 = vm.node.type;
			insertBefore(vnode.el, hydrate(vm.node));
		}
		else if (type2 === VMODEL) {
			var vm = vnode2.vm;
			vm._redraw(vnode, i);					// , false
			type2 = vm.node.type;
			insertBefore(vnode.el, vm.node.el);		// , hydrate(vm.node)
		}
	}
}

//  TODO: DRY this out. reusing normal patch here negatively affects V8's JIT
function hydrate(vnode, withEl) {
	if (vnode.el == null) {
		if (vnode.type === ELEMENT) {
			vnode.el = withEl || createElement(vnode.tag, vnode.ns);

		//	if (vnode.tag === "svg")
		//		vnode.el.setAttributeNS(XML_NS, 'xmlns:xlink', XLINK_NS);

			if (vnode.attrs != null)
				{ patchAttrs(vnode, emptyObj, true); }

			if ((vnode.flags & LAZY_LIST) === LAZY_LIST)	// vnode.body instanceof LazyList
				{ vnode.body.body(vnode); }

			if (isArr(vnode.body))
				{ hydrateBody(vnode); }
			else if (vnode.body != null && vnode.body !== "") {
				if (vnode.raw)
					{ vnode.el.innerHTML = vnode.body; }
				else
					{ vnode.el.textContent = vnode.body; }
			}
		}
		else if (vnode.type === TEXT)
			{ vnode.el = withEl || createTextNode(vnode.body); }
		else if (vnode.type === COMMENT)
			{ vnode.el = withEl || createComment(vnode.body); }
	}

	vnode.el._node = vnode;

	return vnode.el;
}

function nextNode(node, body) {
	return body[node.idx + 1];
}

function prevNode(node, body) {
	return body[node.idx - 1];
}

function parentNode(node) {
	return node.parent;
}

function tmpEdges(fn, parEl, lftSib, rgtSib) {
	// get outer immute edges
	var lftLft = prevSib(lftSib);
	var rgtRgt = nextSib(rgtSib);

	fn(lftLft, rgtRgt);

	return {
		lftSib: lftLft ? nextSib(lftLft) : parEl.firstChild,
		rgtSib: rgtRgt ? prevSib(rgtRgt) : parEl.lastChild,
	};
}

function headTailTry(parEl, lftSib, lftNode, rgtSib, rgtNode) {
	var areAdjacent	= rgtNode.idx === lftNode.idx + 1;
	var headToTail = areAdjacent ? false : lftSib._node === rgtNode;
	var tailToHead = areAdjacent ? true  : rgtSib._node === lftNode;

	if (headToTail || tailToHead) {
		return tmpEdges(function(lftLft, rgtRgt) {
			if (tailToHead)
				{ insertBefore(parEl, rgtSib, lftSib); }

			if (headToTail)
				{ insertBefore(parEl, lftSib, rgtRgt); }
		}, parEl, lftSib, rgtSib);
	}

	return null;
}

// init vm,

// selection sort of DOM (cause move cost >> cmp cost)
// todo: skip removed
function sortDOM(parEl, lftSib, rgtSib, cmpFn) {
//	DEBUG && console.log("selection sort!");

	return tmpEdges(function(lftLft, rgtRgt) {
		var min;

		for (var i = lftSib; i !== rgtRgt; i = nextSib(i)) {
			lftSib = min = i;

			for (var j = nextSib(i); j !== rgtRgt; j = nextSib(j)) {
				if (cmpFn(min, j) > 0)
					{ min = j; }
			}

			if (min === i)
				{ continue; }

			insertBefore(parEl, min, lftSib);

			i = min;
		}
	}, parEl, lftSib, rgtSib);
}

function cmpElNodeIdx(a, b) {
	return a._node.idx - b._node.idx;
}

function syncChildren(node, donor) {
	var parEl		= node.el,
		body		= node.body,
		obody		= donor.body,
		lftNode		= body[0],
		rgtNode		= body[body.length - 1],
		lftSib		= ((obody)[0] || emptyObj).el,
	//	lftEnd		= prevSib(lftSib),
		rgtSib		= (obody[obody.length - 1] || emptyObj).el,
	//	rgtEnd		= nextSib(rgtSib),
		newSibs,
		tmpSib,
		lsNode,
		rsNode;

	converge:
	while (1) {
//		from_left:
		while (1) {
			// remove any non-recycled sibs whose el.node has the old parent
			if (lftSib) {
				// skip dom elements not created by domvm
				if ((lsNode = lftSib._node) == null) {
					lftSib = nextSib(lftSib);
					continue;
				}

				if (parentNode(lsNode) !== node) {
					tmpSib = nextSib(lftSib);
					lsNode.vm != null ? lsNode.vm.unmount(true) : removeChild(parEl, lftSib);
					lftSib = tmpSib;
					continue;
				}
			}

			if (lftNode == null)		// reached end
				{ break converge; }
			else if (lftNode.el == null) {
				insertBefore(parEl, hydrate(lftNode), lftSib);		// lftNode.vm != null ? lftNode.vm.mount(parEl, false, true, lftSib) :
				lftNode = nextNode(lftNode, body);
			}
			else if (lftNode.el === lftSib) {
				lftNode = nextNode(lftNode, body);
				lftSib = nextSib(lftSib);
			}
			else
				{ break; }
		}

//		from_right:
		while (1) {
		//	if (rgtSib === lftEnd)
		//		break converge;

			if (rgtSib) {
				if ((rsNode = rgtSib._node) == null) {
					rgtSib = prevSib(rgtSib);
					continue;
				}

				if (parentNode(rsNode) !== node) {
					tmpSib = prevSib(rgtSib);
					rsNode.vm != null ? rsNode.vm.unmount(true) : removeChild(parEl, rgtSib);
					rgtSib = tmpSib;
					continue;
				}
			}

			if (rgtNode === lftNode)		// converged
				{ break converge; }
			else if (rgtNode.el == null) {
				insertAfter(parEl, hydrate(rgtNode), rgtSib);		// rgtNode.vm != null ? rgtNode.vm.mount(parEl, false, true, nextSib(rgtSib) :
				rgtNode = prevNode(rgtNode, body);
			}
			else if (rgtNode.el === rgtSib) {
				rgtNode = prevNode(rgtNode, body);
				rgtSib = prevSib(rgtSib);
			}
			else
				{ break; }
		}

		if (newSibs = headTailTry(parEl, lftSib, lftNode, rgtSib, rgtNode)) {
			lftSib = newSibs.lftSib;
			rgtSib = newSibs.rgtSib;
			continue;
		}

		newSibs = sortDOM(parEl, lftSib, rgtSib, cmpElNodeIdx);
		lftSib = newSibs.lftSib;
		rgtSib = newSibs.rgtSib;
	}
}

function alreadyAdopted(vnode) {
	return vnode.el._node.parent !== vnode.parent;
}

function takeSeqIndex(n, obody, fromIdx) {
	return obody[fromIdx];
}

function findSeqThorough(n, obody, fromIdx) {		// pre-tested isView?
	for (; fromIdx < obody.length; fromIdx++) {
		var o = obody[fromIdx];

		if (o.vm != null) {
			// match by key & viewFn || vm
			if (n.type === VVIEW && o.vm.view === n.view && o.vm.key === n.key || n.type === VMODEL && o.vm === n.vm)
				{ return o; }
		}
		else if (!alreadyAdopted(o) && n.tag === o.tag && n.type === o.type && n.key === o.key && (n.flags & ~DEEP_REMOVE) === (o.flags & ~DEEP_REMOVE))
			{ return o; }
	}

	return null;
}

function findSeqKeyed(n, obody, fromIdx) {
	for (; fromIdx < obody.length; fromIdx++) {
		var o = obody[fromIdx];

		if (o.key === n.key)
			{ return o; }
	}

	return null;
}

// have it handle initial hydrate? !donor?
// types (and tags if ELEM) are assumed the same, and donor exists
function patch(vnode, donor) {
	donor.hooks && fireHook("willRecycle", donor, vnode);

	var el = vnode.el = donor.el;

	var obody = donor.body;
	var nbody = vnode.body;

	el._node = vnode;

	// "" => ""
	if (vnode.type === TEXT && nbody !== obody) {
		el.nodeValue = nbody;
		return;
	}

	if (vnode.attrs != null || donor.attrs != null)
		{ patchAttrs(vnode, donor, false); }

	// patch events

	var oldIsArr = isArr(obody);
	var newIsArr = isArr(nbody);
	var lazyList = (vnode.flags & LAZY_LIST) === LAZY_LIST;

//	var nonEqNewBody = nbody != null && nbody !== obody;

	if (oldIsArr) {
		// [] => []
		if (newIsArr || lazyList)
			{ patchChildren(vnode, donor); }
		// [] => "" | null
		else if (nbody !== obody) {
			if (nbody != null) {
				if (vnode.raw)
					{ el.innerHTML = nbody; }
				else
					{ el.textContent = nbody; }
			}
			else
				{ clearChildren(donor); }
		}
	}
	else {
		// "" | null => []
		if (newIsArr) {
			clearChildren(donor);
			hydrateBody(vnode);
		}
		// "" | null => "" | null
		else if (nbody !== obody) {
			if (vnode.raw)
				{ el.innerHTML = nbody; }
			else if (donor.raw)
				{ el.textContent = nbody; }
			else if (el.firstChild)
				{ el.firstChild.nodeValue = nbody; }
			else
				{ el.textContent = nbody; }
		}
	}

	donor.hooks && fireHook("didRecycle", donor, vnode);
}

// larger qtys of KEYED_LIST children will use binary search
//const SEQ_FAILS_MAX = 100;

// TODO: modify vtree matcher to work similar to dom reconciler for keyed from left -> from right -> head/tail -> binary
// fall back to binary if after failing nri - nli > SEQ_FAILS_MAX
// while-advance non-keyed fromIdx
// [] => []
function patchChildren(vnode, donor) {
	var nbody		= vnode.body,
		nlen		= nbody.length,
		obody		= donor.body,
		olen		= obody.length,
		isLazy		= (vnode.flags & LAZY_LIST) === LAZY_LIST,
		isFixed		= (vnode.flags & FIXED_BODY) === FIXED_BODY,
		isKeyed		= (vnode.flags & KEYED_LIST) === KEYED_LIST,
		domSync		= !isFixed && vnode.type === ELEMENT,
		doFind		= true,
		find		= (
			isKeyed ? findSeqKeyed :				// keyed lists/lazyLists (falls back to findBinKeyed when > SEQ_FAILS_MAX)
			isFixed || isLazy ? takeSeqIndex :		// unkeyed lazyLists and FIXED_BODY
			findSeqThorough							// more complex stuff
		);

	if (domSync && nlen === 0) {
		clearChildren(donor);
		if (isLazy)
			{ vnode.body = []; }	// nbody.tpl(all);
		return;
	}

	var donor2,
		node2,
		foundIdx,
		patched = 0,
		everNonseq = false,
		fromIdx = 0;		// first unrecycled node (search head)

	if (isLazy) {
		var fnode2 = {key: null};
		var nbodyNew = Array(nlen);
	}

	for (var i = 0; i < nlen; i++) {
		if (isLazy) {
			var remake = false;
			var diffRes = null;

			if (doFind) {
				if (isKeyed)
					{ fnode2.key = nbody.key(i); }

				donor2 = find(fnode2, obody, fromIdx);
			}

			if (donor2 != null) {
                foundIdx = donor2.idx;
				diffRes = nbody.diff(i, donor2);

				// diff returns same, so cheaply adopt vnode without patching
				if (diffRes === true) {
					node2 = donor2;
					node2.parent = vnode;
					node2.idx = i;
				}
				// diff returns new diffVals, so generate new vnode & patch
				else
					{ remake = true; }
			}
			else
				{ remake = true; }

			if (remake) {
				node2 = nbody.tpl(i);			// what if this is a VVIEW, VMODEL, injected element?
				preProc(node2, vnode, i);

				node2._diff = diffRes != null ? diffRes : nbody.diff(i);

				if (donor2 != null)
					{ patch(node2, donor2); }
			}
			else {
				// TODO: flag tmp FIXED_BODY on unchanged nodes?

				// domSync = true;		if any idx changes or new nodes added/removed
			}

			nbodyNew[i] = node2;
		}
		else {
			var node2 = nbody[i];
			var type2 = node2.type;

			// ELEMENT,TEXT,COMMENT
			if (type2 <= COMMENT) {
				if (donor2 = doFind && find(node2, obody, fromIdx)) {
					patch(node2, donor2);
					foundIdx = donor2.idx;
				}
			}
			else if (type2 === VVIEW) {
				if (donor2 = doFind && find(node2, obody, fromIdx)) {		// update/moveTo
					var vm = donor2.vm._update(node2.data, vnode, i);		// withDOM
					foundIdx = donor2.idx;
				}
				else
					{ var vm = createView(node2.view, node2.data, node2.key, node2.opts)._redraw(vnode, i, false); }	// createView, no dom (will be handled by sync below)

				type2 = vm.node.type;
			}
			else if (type2 === VMODEL) {
				var vm = node2.vm._update(node2.data, vnode, i);
				type2 = vm.node.type;
			}
		}

		// found donor & during a sequential search ...at search head
		if (donor2 != null) {
			if (foundIdx === fromIdx) {
				// advance head
				fromIdx++;
				// if all old vnodes adopted and more exist, stop searching
				if (fromIdx === olen && nlen > olen) {
					// short-circuit find, allow loop just create/init rest
					donor2 = null;
					doFind = false;
				}
			}
			else
				{ everNonseq = true; }

			if (olen > 100 && everNonseq && ++patched % 10 === 0)
				{ while (fromIdx < olen && alreadyAdopted(obody[fromIdx]))
					{ fromIdx++; } }
		}
	}

	// replace List w/ new body
	if (isLazy)
		{ vnode.body = nbodyNew; }

	domSync && syncChildren(vnode, donor);
}

// view + key serve as the vm's unique identity
function ViewModel(view, data, key, opts) {
	var vm = this;

	vm.view = view;
	vm.data = data;
	vm.key = key;

	if (opts) {
		vm.opts = opts;
		vm.config(opts);
	}

	var out = isPlainObj(view) ? view : view.call(vm, vm, data, key, opts);

	if (isFunc(out))
		{ vm.render = out; }
	else {
		vm.render = out.render;
		vm.config(out);
	}

	// these must be wrapped here since they're debounced per view
	vm._redrawAsync = raft(function (_) { return vm._redraw(); });
	vm._updateAsync = raft(function (newData) { return vm._update(newData); });

	vm.init && vm.init.call(vm, vm, vm.data, vm.key, opts);
}

var ViewModelProto = ViewModel.prototype = {
	constructor: ViewModel,

	_diff:	null,	// diff cache

	init:	null,
	view:	null,
	key:	null,
	data:	null,
	state:	null,
	api:	null,
	opts:	null,
	node:	null,
	hooks:	null,
	onevent: noop,
	refs:	null,
	render:	null,

	mount: mount,
	unmount: unmount,
	config: function(opts) {
		var t = this;

		if (opts.init)
			{ t.init = opts.init; }
		if (opts.diff)
			{ t.diff = opts.diff; }
		if (opts.onevent)
			{ t.onevent = opts.onevent; }

		// maybe invert assignment order?
		if (opts.hooks)
			{ t.hooks = assignObj(t.hooks || {}, opts.hooks); }

		
	},
	parent: function() {
		return getVm(this.node.parent);
	},
	root: function() {
		var p = this.node;

		while (p.parent)
			{ p = p.parent; }

		return p.vm;
	},
	redraw: function(sync) {
		var vm = this;
		sync ? vm._redraw() : vm._redrawAsync();
		return vm;
	},
	update: function(newData, sync) {
		var vm = this;
		sync ? vm._update(newData) : vm._updateAsync(newData);
		return vm;
	},

	_update: updateSync,
	_redraw: redrawSync,
	_redrawAsync: null,
	_updateAsync: null,
};

function mount(el, isRoot) {
	var vm = this;

	if (isRoot) {
		clearChildren({el: el, flags: 0});

		vm._redraw(null, null, false);

		// if placeholder node doesnt match root tag
		if (el.nodeName.toLowerCase() !== vm.node.tag) {
			hydrate(vm.node);
			insertBefore(el.parentNode, vm.node.el, el);
			el.parentNode.removeChild(el);
		}
		else
			{ insertBefore(el.parentNode, hydrate(vm.node, el), el); }
	}
	else {
		vm._redraw(null, null);

		if (el)
			{ insertBefore(el, vm.node.el); }
	}

	if (el)
		{ drainDidHooks(vm); }

	return vm;
}

// asSub means this was called from a sub-routine, so don't drain did* hook queue
function unmount(asSub) {
	var vm = this;

	var node = vm.node;
	var parEl = node.el.parentNode;

	// edge bug: this could also be willRemove promise-delayed; should .then() or something to make sure hooks fire in order
	removeChild(parEl, node.el);

	if (!asSub)
		{ drainDidHooks(vm); }
}

function reParent(vm, vold, newParent, newIdx) {
	if (newParent != null) {
		newParent.body[newIdx] = vold;
		vold.idx = newIdx;
		vold.parent = newParent;
	}
	return vm;
}

function redrawSync(newParent, newIdx, withDOM) {
	var isRedrawRoot = newParent == null;
	var vm = this;
	var isMounted = vm.node && vm.node.el && vm.node.el.parentNode;

	var vold = vm.node, oldDiff, newDiff;

	if (vm.diff != null) {
		oldDiff = vm._diff;
		vm._diff = newDiff = vm.diff(vm, vm.data);

		if (vold != null) {
			var cmpFn = isArr(oldDiff) ? cmpArr : cmpObj;
			var isSame = oldDiff === newDiff || cmpFn(oldDiff, newDiff);

			if (isSame)
				{ return reParent(vm, vold, newParent, newIdx); }
		}
	}

	isMounted && vm.hooks && fireHook("willRedraw", vm, vm.data);

	var vnew = vm.render.call(vm, vm, vm.data, oldDiff, newDiff);

	if (vnew === vold)
		{ return reParent(vm, vold, newParent, newIdx); }

	// todo: test result of willRedraw hooks before clearing refs
	vm.refs = null;

	// always assign vm key to root vnode (this is a de-opt)
	if (vm.key != null && vnew.key !== vm.key)
		{ vnew.key = vm.key; }

	vm.node = vnew;

	if (newParent) {
		preProc(vnew, newParent, newIdx, vm);
		newParent.body[newIdx] = vnew;
	}
	else if (vold && vold.parent) {
		preProc(vnew, vold.parent, vold.idx, vm);
		vold.parent.body[vold.idx] = vnew;
	}
	else
		{ preProc(vnew, null, null, vm); }

	if (withDOM !== false) {
		if (vold) {
			// root node replacement
			if (vold.tag !== vnew.tag || vold.key !== vnew.key) {
				// hack to prevent the replacement from triggering mount/unmount
				vold.vm = vnew.vm = null;

				var parEl = vold.el.parentNode;
				var refEl = nextSib(vold.el);
				removeChild(parEl, vold.el);
				insertBefore(parEl, hydrate(vnew), refEl);

				// another hack that allows any higher-level syncChildren to set
				// reconciliation bounds using a live node
				vold.el = vnew.el;

				// restore
				vnew.vm = vm;
			}
			else
				{ patch(vnew, vold); }
		}
		else
			{ hydrate(vnew); }
	}

	isMounted && vm.hooks && fireHook("didRedraw", vm, vm.data);

	if (isRedrawRoot && isMounted)
		{ drainDidHooks(vm); }

	return vm;
}

// this also doubles as moveTo
// TODO? @withRedraw (prevent redraw from firing)
function updateSync(newData, newParent, newIdx, withDOM) {
	var vm = this;

	if (newData != null) {
		if (vm.data !== newData) {
			vm.hooks && fireHook("willUpdate", vm, newData);
			vm.data = newData;

			
		}
	}

	return vm._redraw(newParent, newIdx, withDOM);
}

function defineComment(body) {
	var node = new VNode;
	node.type = COMMENT;
	node.body = body;
	return node;
}

// placeholder for declared views
function VView(view, data, key, opts) {
	this.view = view;
	this.data = data;
	this.key = key;
	this.opts = opts;
}

VView.prototype = {
	constructor: VView,

	type: VVIEW,
	view: null,
	data: null,
	key: null,
	opts: null,
};

function defineView(view, data, key, opts) {
	return new VView(view, data, key, opts);
}

// placeholder for injected ViewModels
function VModel(vm) {
	this.vm = vm;
}

VModel.prototype = {
	constructor: VModel,

	type: VMODEL,
	vm: null,
};

function injectView(vm) {
//	if (vm.node == null)
//		vm._redraw(null, null, false);

//	return vm.node;

	return new VModel(vm);
}

function injectElement(el) {
	var node = new VNode;
	node.type = ELEMENT;
	node.el = node.key = el;
	return node;
}

function lazyList(items, cfg) {
	var len = items.length;

	var self = {
		items: items,
		length: len,
		// defaults to returning item identity (or position?)
		key: function(i) {
			return cfg.key(items[i], i);
		},
		// default returns 0?
		diff: function(i, donor) {
			var newVals = cfg.diff(items[i], i);
			if (donor == null)
				{ return newVals; }
			var oldVals = donor._diff;
			var same = newVals === oldVals || isArr(oldVals) ? cmpArr(newVals, oldVals) : cmpObj(newVals, oldVals);
			return same || newVals;
		},
		tpl: function(i) {
			return cfg.tpl(items[i], i);
		},
		map: function(tpl) {
			cfg.tpl = tpl;
			return self;
		},
		body: function(vnode) {
			var nbody = Array(len);

			for (var i = 0; i < len; i++) {
				var vnode2 = self.tpl(i);

			//	if ((vnode.flags & KEYED_LIST) === KEYED_LIST && self. != null)
			//		vnode2.key = getKey(item);

				vnode2._diff = self.diff(i);			// holds oldVals for cmp

				nbody[i] = vnode2;

				// run preproc pass (should this be just preProc in above loop?) bench
				preProc(vnode2, vnode, i);
			}

			// replace List with generated body
			vnode.body = nbody;
		}
	};

	return self;
}

// prevent GCC from inlining some large funcs (which negatively affects Chrome's JIT)
window.syncChildren = syncChildren;

var nano$1 = {
	config: config,

	ViewModel: ViewModel,
	VNode: VNode,

	createView: createView,

	defineElement: defineElement,
	defineSvgElement: defineSvgElement,
	defineText: defineText,
	defineComment: defineComment,
	defineView: defineView,

	injectView: injectView,
	injectElement: injectElement,

	lazyList: lazyList,

	FIXED_BODY: FIXED_BODY,
	DEEP_REMOVE: DEEP_REMOVE,
	KEYED_LIST: KEYED_LIST,
	LAZY_LIST: LAZY_LIST,
};

function protoPatch(n) {
	return patch$1(this, n);
}

// newNode can be either {class: style: } or full new VNode
// will/didPatch hooks?
function patch$1(o, n) {
	if (n.type != null) {
		// no full patching of view roots, just use redraw!
		if (o.vm != null)
			{ return; }

		preProc(n, o.parent, o.idx, null);
		o.parent.body[o.idx] = n;
		patch(n, o);
		drainDidHooks(getVm(n));
	}
	else {
		// TODO: re-establish refs

		// shallow-clone target
		var donor = Object.create(o);
		// fixate orig attrs
		donor.attrs = assignObj({}, o.attrs);
		// assign new attrs into live targ node
		var oattrs = assignObj(o.attrs, n);
		// prepend any fixed shorthand class
		if (o._class != null) {
			var aclass = oattrs.class;
			oattrs.class = aclass != null && aclass !== "" ? o._class + " " + aclass : o._class;
		}

		patchAttrs(o, donor);
	}
}

VNodeProto.patch = protoPatch;

return nano$1;

})));


},{}],6:[function(require,module,exports){
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.returnExportsGlobal=b()}):"object"==typeof exports?module.exports=b():a.ResizeSensor=b()}(this,function(){var a=function(){"use strict";function a(){this.q=[],this.add=function(a){this.q.push(a)};var a,b;this.call=function(){for(a=0,b=this.q.length;b>a;a++)this.q[a].call()}}function b(a,b){return a.currentStyle?a.currentStyle[b]:window.getComputedStyle?window.getComputedStyle(a,null).getPropertyValue(b):a.style[b]}function c(c,e){if(c.resizedAttached){if(c.resizedAttached)return void c.resizedAttached.add(e)}else c.resizedAttached=new a,c.resizedAttached.add(e);c.resizeSensor=document.createElement("div"),c.resizeSensor.className="resize-sensor";var f="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; opacity: 0;",g="position: absolute; left: 0; top: 0; transition: 0s;";c.resizeSensor.style.cssText=f,c.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+f+'"><div style="'+g+'"></div></div><div class="resize-sensor-shrink" style="'+f+'"><div style="'+g+' width: 200%; height: 200%"></div></div>',c.appendChild(c.resizeSensor),"static"==b(c,"position")&&(c.style.position="relative");var h=c.resizeSensor.childNodes[0],i=h.childNodes[0],j=c.resizeSensor.childNodes[1],k=function(){i.style.width=1e5+"px",i.style.height=1e5+"px",h.scrollLeft=1e5,h.scrollTop=1e5,j.scrollLeft=1e5,j.scrollTop=1e5};k();var l=!1,m=function(){c.resizedAttached&&(l&&(c.resizedAttached.call(),l=!1),d(m))};d(m);var n,o,p,q,r=function(){((p=c.offsetWidth)!=n||(q=c.offsetHeight)!=o)&&(l=!0,n=p,o=q),k()},s=function(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener(b,c)};s(h,"scroll",r),s(j,"scroll",r)}var d=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){return window.setTimeout(a,20)},e=function(a,b){var d=this,e=Object.prototype.toString.call(a),f=d._isCollectionTyped="[object Array]"===e||"[object NodeList]"===e||"[object HTMLCollection]"===e||"undefined"!=typeof jQuery&&a instanceof window.jQuery||"undefined"!=typeof Elements&&a instanceof window.Elements;if(d._element=a,f)for(var g=0,h=a.length;h>g;g++)c(a[g],b);else c(a,b)};return e.prototype.detach=function(){var a=this,b=a._isCollectionTyped,c=a._element;if(b)for(var d=0,f=c.length;f>d;d++)e.detach(c[d]);else e.detach(c)},e.detach=function(a){a.resizeSensor&&(a.removeChild(a.resizeSensor),delete a.resizeSensor,delete a.resizedAttached)},e}();return a});
},{}],7:[function(require,module,exports){
/*
 *          __        ___
 *    _____/ /___  __/ (_)____
 *   / ___/ __/ / / / / / ___/
 *  (__  ) /_/ /_/ / / (__  )
 * /____/\__/\__, /_/_/____/
 *          /____/
 *
 * light - weight css preprocessor @licence MIT
 */
/* eslint-disable */
(function (factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? (module['exports'] = factory(null)) :
		typeof define === 'function' && define['amd'] ? define(factory(null)) :
			(window['stylis'] = factory(null))
}(/** @param {*=} options */function factory (options) {

	'use strict'

	/**
	 * Notes
	 *
	 * The ['<method name>'] pattern is used to support closure compiler
	 * the jsdoc signatures are also used to the same effect
	 *
	 * ---- 
	 *
	 * int + int + int === n4 [faster]
	 *
	 * vs
	 *
	 * int === n1 && int === n2 && int === n3
	 *
	 * ----
	 *
	 * switch (int) { case ints...} [faster]
	 *
	 * vs
	 *
	 * if (int == 1 && int === 2 ...)
	 *
	 * ----
	 *
	 * The (first*n1 + second*n2 + third*n3) format used in the property parser
	 * is a simple way to hash the sequence of characters
	 * taking into account the index they occur in
	 * since any number of 3 character sequences could produce duplicates.
	 *
	 * On the other hand sequences that are directly tied to the index of the character
	 * resolve a far more accurate measure, it's also faster
	 * to evaluate one condition in a switch statement
	 * than three in an if statement regardless of the added math.
	 *
	 * This allows the vendor prefixer to be both small and fast.
	 */

	var nullptn = /^\0+/g /* matches leading null characters */
	var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
	var colonptn = /: */g /* splits animation rules */
	var cursorptn = /zoo|gra/ /* assert cursor varient */
	var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
	var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
	var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
	var elementptn = / *[\0] */g /* selector elements */
	var selectorptn = /,\r+?/g /* splits selectors */
	var andptn = /([\t\r\n ])*\f?&/g /* match & */
	var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
	var invalidptn = /\W+/g /* removes invalid characters from keyframes */
	var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
	var plcholdrptn = /::(place)/g /* match ::placeholder varient */
	var readonlyptn = /:(read-only)/g /* match :read-only varient */
	var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
	var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
	var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
	var whiteptn = /\s{2,}/g /* matches repeating whitespace */
	var pseudoptn = /([^\(])(:+) */g /* pseudo element */
	var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */

	/* vendors */
	var webkit = '-webkit-'
	var moz = '-moz-'
	var ms = '-ms-'

	/* character codes */
	var SEMICOLON = 59 /* ; */
	var CLOSEBRACES = 125 /* } */
	var OPENBRACES = 123 /* { */
	var OPENPARENTHESES = 40 /* ( */
	var CLOSEPARENTHESES = 41 /* ) */
	var OPENBRACKET = 91 /* [ */
	var CLOSEBRACKET = 93 /* ] */
	var NEWLINE = 10 /* \n */
	var CARRIAGE = 13 /* \r */
	var TAB = 9 /* \t */
	var AT = 64 /* @ */
	var SPACE = 32 /*   */
	var AND = 38 /* & */
	var DASH = 45 /* - */
	var UNDERSCORE = 95 /* _ */
	var STAR = 42 /* * */
	var COMMA = 44 /* , */
	var COLON = 58 /* : */
	var SINGLEQUOTE = 39 /* ' */
	var DOUBLEQUOTE = 34 /* " */
	var FOWARDSLASH = 47 /* / */
	var GREATERTHAN = 62 /* > */
	var PLUS = 43 /* + */
	var TILDE = 126 /* ~ */
	var NULL = 0 /* \0 */
	var FORMFEED = 12 /* \f */
	var VERTICALTAB = 11 /* \v */

	/* special identifiers */
	var KEYFRAME = 107 /* k */
	var MEDIA = 109 /* m */
	var SUPPORTS = 115 /* s */
	var PLACEHOLDER = 112 /* p */
	var READONLY = 111 /* o */
	var IMPORT = 169 /* <at>i */
	var CHARSET = 163 /* <at>c */
	var DOCUMENT = 100 /* <at>d */

	var column = 1 /* current column */
	var line = 1 /* current line numebr */
	var pattern = 0 /* :pattern */

	var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
	var vendor = 1 /* vendor prefix */
	var escape = 1 /* escape :global() pattern */
	var compress = 0 /* compress output */
	var semicolon = 0 /* no/semicolon option */
	var preserve = 0 /* preserve empty selectors */

	/* empty reference */
	var array = []

	/* plugins */
	var plugins = []
	var plugged = 0

	/* plugin context */
	var POSTS = -2
	var PREPS = -1
	var UNKWN = 0
	var PROPS = 1
	var BLCKS = 2
	var ATRUL = 3

	/* plugin newline context */
	var unkwn = 0

	/* keyframe animation */
	var keyed = 1
	var key = ''

	/* selector namespace */
	var nscopealt = ''
	var nscope = ''

	/**
	 * Compile
	 *
	 * @param {Array<string>} parent
	 * @param {Array<string>} current
	 * @param {string} body
	 * @param {number} id
	 * @return {string}
	 */
	function compile (parent, current, body, id) {
		var bracket = 0 /* brackets [] */
		var comment = 0 /* comments /* // or /* */
		var parentheses = 0 /* functions () */
		var quote = 0 /* quotes '', "" */

		var first = 0 /* first character code */
		var second = 0 /* second character code */
		var code = 0 /* current character code */
		var tail = 0 /* previous character code */
		var trail = 0 /* character before previous code */
		var peak = 0 /* previous non-whitespace code */
		
		var counter = 0 /* count sequence termination */
		var context = 0 /* track current context */
		var atrule = 0 /* track @at-rule context */
		var pseudo = 0 /* track pseudo token index */
		var caret = 0 /* current character index */
		var format = 0 /* control character formating context */
		var insert = 0 /* auto semicolon insertion */
		var invert = 0 /* inverted selector pattern */
		var length = 0 /* generic length address */
		var eof = body.length /* end of file(length) */
		var eol = eof - 1 /* end of file(characters) */

		var char = '' /* current character */
		var chars = '' /* current buffer of characters */
		var child = '' /* next buffer of characters */
		var out = '' /* compiled body */
		var children = '' /* compiled children */
		var flat = '' /* compiled leafs */
		var selector /* generic selector address */
		var result /* generic address */

		// ...build body
		while (caret < eof) {
			code = body.charCodeAt(caret)

			if (comment + quote + parentheses + bracket === 0) {
				// eof varient
				if (caret === eol) {
					if (format > 0) {
						chars = chars.replace(formatptn, '')
					}

					if ((chars = chars.trim()).length > 0) {
						switch (code) {
							case SPACE:
							case TAB:
							case SEMICOLON:
							case CARRIAGE:
							case NEWLINE: {
								break
							}
							default: {
								chars += body.charAt(caret)
							}
						}

						code = SEMICOLON
					}
				}

				// auto semicolon insertion
				if (insert === 1) {
					switch (code) {
						// false flags
						case OPENBRACES:
						case COMMA: {
							insert = 0
							break
						}
						// ignore
						case TAB:
						case CARRIAGE:
						case NEWLINE:
						case SPACE: {
							break
						}
						// valid
						default: {
							caret--
							code = SEMICOLON
						}
					}
				}

				// token varient
				switch (code) {
					case OPENBRACES: {
						chars = chars.trim()
						first = chars.charCodeAt(0)
						counter = 1
						caret++

						while (caret < eof) {
							code = body.charCodeAt(caret)

							switch (code) {
								case OPENBRACES: {
									counter++
									break
								}
								case CLOSEBRACES: {
									counter--
									break
								}
							}

							if (counter === 0) {
								break
							}

							child += body.charAt(caret++)
						}

						if (first === NULL) {
							first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0)
						}

						switch (first) {
							// @at-rule
							case AT: {
								if (format > 0) {
									chars = chars.replace(formatptn, '')
								}

								second = chars.charCodeAt(1)

								switch (second) {
									case DOCUMENT:
									case MEDIA:
									case SUPPORTS: {
										selector = current
										break
									}
									default: {
										selector = array
									}
								}

								child = compile(current, selector, child, second)
								length = child.length

								// preserve empty @at-rule
								if (preserve > 0 && length === 0) {
									length = chars.length
								}

								// execute plugins, @at-rule context
								if (plugged > 0) {
									selector = select(array, chars, invert)
									result = proxy(ATRUL, child, selector, current, line, column, length, second)
									chars = selector.join('')

									if (result !== void 0) {
										if ((length = (child = result.trim()).length) === 0) {
											second = 0
											child = ''
										}
									}
								}

								if (length > 0) {
									switch (second) {
										case DOCUMENT:
										case MEDIA:
										case SUPPORTS: {
											child = chars + '{' + child + '}'
											break
										}
										case KEYFRAME: {
											chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''))
											child = chars + '{' + child + '}'
											child = '@' + (vendor > 0 ? webkit + child + '@' + child : child)
											break
										}
										default: {
											child = chars + child
										}
									}
								} else {
									child = ''
								}

								break
							}
							// selector
							default: {
								child = compile(current, select(current, chars, invert), child, id)
							}
						}

						children += child

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						atrule = 0
						chars = ''
						child = ''
						code = body.charCodeAt(++caret)
						break
					}
					case CLOSEBRACES:
					case SEMICOLON: {
						chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim()

						if (chars.length > 1) {
							// monkey-patch missing colon
							if (pseudo === 0) {
								first = chars.charCodeAt(0)

								// first character is a letter or dash, buffer has a space character
								if ((first === DASH || first > 96 && first < 123) && chars.indexOf(' ')) {
									chars = chars.replace(' ', ':')
								}
							}

							// execute plugins, property context
							if (plugged > 0) {
								if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id)) !== void 0) {
									if ((chars = result.trim()).length === 0) {
										chars = '\0\0'
									}
								}
							}

							first = chars.charCodeAt(0)
							second = chars.charCodeAt(1)

							switch (first + second) {
								case NULL: {
									break
								}
								case IMPORT:
								case CHARSET: {
									flat += chars + body.charAt(caret)
									break
								}
								default: {
									out += pseudo > 0 ? property(chars, first, second, chars.charCodeAt(2)) : chars + ';'
								}
							}
						}

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						chars = ''
						code = body.charCodeAt(++caret)
						break
					}
				}
			}

			// parse characters
			switch (code) {
				case CARRIAGE:
				case NEWLINE: {
					// auto insert semicolon
					if (comment + quote + parentheses + bracket + semicolon === 0) {
						// valid non-whitespace characters that
						// may precede a newline
						switch (peak) {
							case CLOSEPARENTHESES:
							case SINGLEQUOTE:
							case DOUBLEQUOTE:
							case AT:
							case TILDE:
							case GREATERTHAN:
							case STAR:
							case PLUS:
							case FOWARDSLASH:
							case DASH:
							case COLON:
							case COMMA:
							case SEMICOLON:
							case OPENBRACES:
							case CLOSEBRACES: {
								break
							}
							default: {
								// current buffer has a colon
								if (pseudo > 0) {
									insert = 1
								}
							}
						}
					}

					// terminate line comment
					if (comment === FOWARDSLASH) {
						comment = 0
					}

					// execute plugins, newline context
					if (plugged * unkwn > 0) {
						proxy(UNKWN, chars, current, parent, line, column, out.length, id)
					}

					// next line, reset column position
					column = 1
					line++
					break
				}
				case SEMICOLON:
				case CLOSEBRACES: {
					if (comment + quote + parentheses + bracket === 0) {
						column++
						break
					}
				}
				default: {
					// increment column position
					column++

					// current character
					char = body.charAt(caret)
						
					// remove comments, escape functions, strings, attributes and prepare selectors
					switch (code) {
						case TAB:
						case SPACE: {
							if (quote + bracket === 0) {
								switch (tail) {
									case COMMA:
									case COLON:
									case TAB:
									case SPACE: {
										char = ''
										break
									}
									default: {
										if (code !== SPACE) {
											char = ' '
										}
									}
								}
							}
							break
						}
						// escape breaking control characters
						case NULL: {
							char = '\\0'
							break
						}
						case FORMFEED: {
							char = '\\f'
							break
						}
						case VERTICALTAB: {
							char = '\\v'
							break
						}
						// &
						case AND: {
							// inverted selector pattern i.e html &
							if (quote + comment + bracket === 0 && cascade > 0) {
								invert = 1
								format = 1
								char = '\f' + char
							}
							break
						}
						// ::p<l>aceholder, l
						// :read-on<l>y, l
						case 108: {
							if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
								switch (caret - pseudo) {
									// ::placeholder
									case 2: {
										if (tail === PLACEHOLDER && body.charCodeAt(caret-3) === COLON) {
											pattern = tail
										}
									}
									// :read-only
									case 8: {
										if (trail === READONLY) {
											pattern = trail
										}
									}
								}
							}
							break
						}
						// :<pattern>
						case COLON: {
							if (quote + comment + bracket === 0) {
								pseudo = caret
							}
							break
						}
						// selectors
						case COMMA: {
							if (comment + parentheses + quote + bracket === 0) {
								format = 1
								char += '\r'
							}
							break
						}
						// quotes
						case DOUBLEQUOTE: {
							if (comment === 0) {
								quote = quote === code ? 0 : (quote === 0 ? code : quote)
								// " last character, add synthetic padding
								if (caret === eol) {
									eol++
									eof++
								}
							}
							break
						}
						case SINGLEQUOTE: {
							if (comment === 0) {
								quote = quote === code ? 0 : (quote === 0 ? code : quote)
								// ' last character, add synthetic padding
								if (caret === eol) {
									eol++
									eof++
								}
							}
							break
						}
						// attributes
						case OPENBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket++
							}
							break
						}
						case CLOSEBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket--
							}
							break
						}
						// functions
						case CLOSEPARENTHESES: {
							if (quote + comment + bracket === 0) {
								// ) last character, add synthetic padding
								if (caret === eol) {
									eol++
									eof++
								}

								parentheses--
							}
							break
						}
						case OPENPARENTHESES: {
							if (quote + comment + bracket === 0) {
								if (context === 0) {
									switch (tail*2 + trail*3) {
										// :matches
										case 533: {
											break
										}
										// :global, :not, :nth-child etc...
										default: {
											counter = 0
											context = 1
										}
									}
								}

								parentheses++
							}
							break
						}
						case AT: {
							if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
								atrule = 1
							}
							break
						}
						// block/line comments
						case STAR:
						case FOWARDSLASH: {
							if (quote + bracket + parentheses > 0) {
								break
							}

							switch (comment) {
								// initialize line/block comment context
								case 0: {
									switch (code*2 + body.charCodeAt(caret+1)*3) {
										// //
										case 235: {
											comment = FOWARDSLASH
											break
										}
										// /*
										case 220: {
											comment = STAR
											break
										}
									}
									break
								}
								// end block comment context
								case STAR: {
									if (code === FOWARDSLASH && tail === STAR) {
										char = ''
										comment = 0
									}
								}
							}
						}
					}

					// ignore comment blocks
					if (comment === 0) {
						// aggressive isolation mode, divide each individual selector
						// including selectors in :not function but excluding selectors in :global function
						if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
							switch (code) {
								case COMMA:
								case TILDE:
								case GREATERTHAN:
								case PLUS:
								case CLOSEPARENTHESES:
								case OPENPARENTHESES: {
									if (context === 0) {
										// outside of an isolated context i.e nth-child(<...>)
										switch (tail) {
											case TAB:
											case SPACE:
											case NEWLINE:
											case CARRIAGE: {
												char = char + '\0'
												break
											}
											default: {
												char = '\0' + char + (code === COMMA ? '' : '\0')
											}
										}
										format = 1
									} else {
										// within an isolated context, sleep untill it's terminated
										switch (code) {
											case OPENPARENTHESES: {
												context = ++counter
												break
											}
											case CLOSEPARENTHESES: {
												if ((context = --counter) === 0) {
													format = 1
													char += '\0'
												}
												break
											}
										}
									}
									break
								}
								case SPACE: {
									switch (tail) {
										case NULL:
										case OPENBRACES:
										case CLOSEBRACES:
										case SEMICOLON:
										case COMMA:
										case FORMFEED:
										case TAB:
										case SPACE:
										case NEWLINE:
										case CARRIAGE: {
											break
										}
										default: {
											// ignore in isolated contexts
											if (context === 0) {
												format = 1
												char += '\0'
											}
										}
									}
								}
							}
						}

						// concat buffer of characters
						chars += char

						// previous non-whitespace character code
						if (code !== SPACE) {
							peak = code
						}
					}
				}
			}

			// tail character codes
			trail = tail
			tail = code

			// visit every character
			caret++
		}

		length = out.length

		// preserve empty selector
 		if (preserve > 0) {
 			if (length === 0 && children.length === 0 && (current[0].length === 0) === false) {
 				if (id !== MEDIA || (current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0])) {
					length = current.join(',').length + 2 					
 				}
 			}
		}

		if (length > 0) {
			// cascade isolation mode?
			selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current

			// execute plugins, block context
			if (plugged > 0) {
				result = proxy(BLCKS, out, selector, parent, line, column, length, id)

				if (result !== void 0 && (out = result).length === 0) {
					return flat + out + children
				}
			}

			out = selector.join(',') + '{' + out + '}'

			if (vendor*pattern > 0) {
				switch (pattern) {
					// ::read-only
					case READONLY: {
						out = out.replace(readonlyptn, ':'+moz+'$1')+out
						break
					}
					// ::placeholder
					case PLACEHOLDER: {
						out = (
							out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
							out.replace(plcholdrptn, '::' + moz + '$1') +
							out.replace(plcholdrptn, ':' + ms + 'input-$1') + out
						)
						break
					}
				}
				pattern = 0
			}
		}

		return flat + out + children
	}

	/**
	 * Select
	 *
	 * @param {Array<string>} parent
	 * @param {string} current
	 * @param {number} invert
	 * @return {Array<string>}
	 */
	function select (parent, current, invert) {
		var selectors = current.trim().split(selectorptn)
		var out = selectors

		var length = selectors.length
		var l = parent.length

		switch (l) {
			// 0-1 parent selectors
			case 0:
			case 1: {
				for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; i++) {
					out[i] = scope(selector, out[i], invert, l).trim()
				}
				break
			}
			// >2 parent selectors, nested
			default: {
				for (var i = 0, j = 0, out = []; i < length; i++) {
					for (var k = 0; k < l; k++) {
						out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim()
					}
				}
			}
		}

		return out
	}

	/**
	 * Scope
	 *
	 * @param {string} parent
	 * @param {string} current
	 * @param {number} invert
	 * @param {number} level
	 * @return {string}
	 */
	function scope (parent, current, invert, level) {
		var selector = current
		var code = selector.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (selector = selector.trim()).charCodeAt(0)
		}

		switch (code) {
			// &
			case AND: {
				switch (cascade + level) {
					case 0:
					case 1: {
						if (parent.trim().length === 0) {
							break
						}
					}
					default: {
						return selector.replace(andptn, '$1'+parent.trim())
					}
				}
				break
			}
			// :
			case COLON: {
				switch (selector.charCodeAt(1)) {
					// g in :global
					case 103: {
						if (escape > 0 && cascade > 0) {
							return selector.replace(escapeptn, '$1').replace(andptn, '$1'+nscope)
						}
						break
					}
					default: {
						// :hover
						return parent.trim() + selector
					}
				}
			}
			default: {
				// html &
				if (invert*cascade > 0 && selector.indexOf('\f') > 0) {
					return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1')+parent.trim())
				}
			}
		}

		return parent + selector
	}

	/**
	 * Property
	 *
	 * @param {string} input
	 * @param {number} first
	 * @param {number} second
	 * @param {number} third
	 * @return {string}
	 */
	function property (input, first, second, third) {
		var out = input + ';'
		var index = 0
		var hash = (first*2) + (second*3) + (third*4)
		var cache

		// animation: a, n, i characters
		if (hash === 944) {
			out = animation(out)
		} else if (vendor > 0) {
			// vendor prefix
			switch (hash) {
				// color/column, c, o, l
				case 963: {
					// column
					if (out.charCodeAt(5) === 110) {
						out = webkit + out + out
					}
					break
				}
				// appearance: a, p, p
				case 978: {
					out = webkit + out + moz + out + out
					break
				}
				// hyphens: h, y, p
				// user-select: u, s, e
				case 1019:
				case 983: {
					out = webkit + out + moz + out + ms + out + out
					break
				}
				// background/backface-visibility, b, a, c
				case 883: {
					// backface-visibility, -
					if (out.charCodeAt(8) === DASH) {
						out = webkit + out + out
					}
					break
				}
				// flex: f, l, e
				case 932: {
					out = webkit + out + ms + out + out
					break
				}
				// order: o, r, d
				case 964: {
					out = webkit + out + ms + 'flex' + '-' + out + out
					break
				}
				// justify-content, j, u, s
				case 1023: {
					cache = out.substring(out.indexOf(':', 15)).replace('flex-', '')
					out = webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out
					break
				}
				// display(flex/inline-flex/inline-box): d, i, s
				case 975: {
					index = (out = input).length-10
					cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(8).trim()

					switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7)|0)) {
						// inline-
						case 203: {
							// inline-box
							if (cache.charCodeAt(8) > 110) {
								out = out.replace(cache, webkit+cache)+';'+out
							}
							break
						}
						// inline-flex
						// flex
						case 207:
						case 102: {
							out = (
								out.replace(cache, webkit+(hash > 102 ? 'inline-' : '')+'box')+';'+
								out.replace(cache, webkit+cache)+';'+
								out.replace(cache, ms+cache+'box')+';'+
								out
							)
						}
					}
					
					out += ';'
					break
				}
				// align-items, align-center, align-self: a, l, i, -
				case 938: {
					if (out.charCodeAt(5) === DASH) {
						switch (out.charCodeAt(6)) {
							// align-items, i
							case 105: {
								cache = out.replace('-items', '')
								out = webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out
								break
							}
							// align-self, s
							case 115: {
								out = webkit + out + ms + 'flex-item-' + out.replace('-self', '') + out
								break
							}
							// align-content
							default: {
								out = webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '') + out
							}
						}
					}
					break
				}
				// cursor, c, u, r
				case 1005: {
					if (cursorptn.test(out)) {
						out = out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out
					}
					break
				}
				// width: min-content / width: max-content
				case 953: {
					if ((index = out.indexOf('-content', 9)) > 0) {
						// width: min-content / width: max-content
						cache = out.substring(index - 3)
						out = 'width:' + webkit + cache + 'width:' + moz + cache + 'width:' + cache
					}
					break
				}
				// text-size-adjust: t, e, x
				case 1015: {
					if (input.charCodeAt(9) !== DASH) {
						break
					}
				}
				// transform, transition: t, r, a
				case 962: {
					out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out

					// transitions
					if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
						out = out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out
					}

					break
				}
				// writing-mode, w, r, i
				case 1000: {
					cache = out.substring(13).trim()
					index = cache.indexOf('-')+1

					switch (cache.charCodeAt(0)+cache.charCodeAt(index)) {
						// vertical-lr
						case 226: {
							cache = out.replace(writingptn, 'tb')
							break
						}
						// vertical-rl
						case 232: {
							cache = out.replace(writingptn, 'tb-rl')
							break
						}
						// horizontal-tb
						case 220: {
							cache = out.replace(writingptn, 'lr')
							break
						}
						default: {
							return out
						}
					}

					out = webkit+out+ms+cache+out
					break
				}
			}
		}

		return out
	}

	/**
	 * Animation
	 *
	 * @param {string} input
	 * @return {string}
	 */
	function animation (input) {
		var length = input.length
		var index = input.indexOf(':', 9) + 1
		var declare = input.substring(0, index).trim()
		var body = input.substring(index, length-1).trim()
		var out = ''

		// shorthand
		if (input.charCodeAt(9) !== DASH) {
			// split in case of multiple animations
			var list = body.split(animationptn)

			for (var i = 0, index = 0, length = list.length; i < length; index = 0, i++) {
				var value = list[i]
				var items = value.split(propertiesptn)

				while (value = items[index]) {
					var peak = value.charCodeAt(0)

					if (keyed === 1 && (
						// letters
						(peak > AT && peak < 90) || (peak > 96 && peak < 123) || peak === UNDERSCORE ||
						// dash but not in sequence i.e --
						(peak === DASH && value.charCodeAt(1) !== DASH)
					)) {
						// not a number/function
						switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
							case 1: {
								switch (value) {
									// not a valid reserved keyword
									case 'infinite': case 'alternate': case 'backwards': case 'running':
									case 'normal': case 'forwards': case 'both': case 'none': case 'linear':
									case 'ease': case 'ease-in': case 'ease-out': case 'ease-in-out':
									case 'paused': case 'reverse': case 'alternate-reverse': case 'inherit':
									case 'initial': case 'unset': case 'step-start': case 'step-end': {
										break
									}
									default: {
										value += key
									}
								}
							}
						}
					}

					items[index++] = value
				}

				out += (i === 0 ? '' : ',') + items.join(' ')
			}
		} else {
			// animation-name, n
			out += input.charCodeAt(10) === 110 ? body + (keyed === 1 ? key : '') : body
		}

		out = declare + out + ';'

		return vendor > 0 ? webkit + out + out : out
	}

	/**
	 * Isolate
	 *
	 * @param {Array<string>} current
	 */
	function isolate (current) {
		for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; i++) {
			// split individual elements in a selector i.e h1 h2 === [h1, h2]
			var elements = current[i].split(elementptn)
			var out = ''

			for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; j++) {
				// empty element
				if ((size = (element = elements[j]).length) === 0 && l > 1) {
					continue
				}

				tail = out.charCodeAt(out.length-1)
				code = element.charCodeAt(0)
				padding = ''

				if (j !== 0) {
					// determine if we need padding
					switch (tail) {
						case STAR:
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case OPENPARENTHESES:  {
							break
						}
						default: {
							padding = ' '
						}
					}
				}

				switch (code) {
					case AND: {
						element = padding + nscopealt
					}
					case TILDE:
					case GREATERTHAN:
					case PLUS:
					case SPACE:
					case CLOSEPARENTHESES:
					case OPENPARENTHESES: {
						break
					}
					case OPENBRACKET: {
						element = padding + element + nscopealt
						break
					}
					case COLON: {
						switch (element.charCodeAt(1)*2 + element.charCodeAt(2)*3) {
							// :global
							case 530: {
								if (escape > 0) {
									element = padding + element.substring(8, size - 1)
									break
								}
							}
							// :hover, :nth-child(), ...
							default: {
								if (j < 1 || elements[j-1].length < 1) {
									element = padding + nscopealt + element
								}
							}
						}
						break
					}
					case COMMA: {
						padding = ''
					}
					default: {
						if (size > 1 && element.indexOf(':') > 0) {
							element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2')
						} else {
							element = padding + element + nscopealt
						}
					}
				}

				out += element
			}

			selector[i] = out.replace(formatptn, '').trim()
		}

		return selector
	}

	/**
	 * Proxy
	 *
	 * @param {number} context
	 * @param {string} content
	 * @param {Array<string>} selectors
	 * @param {Array<string>} parents
	 * @param {number} line
	 * @param {number} column
	 * @param {number} length
	 * @param {number} id
	 * @return {(string|void|*)}
	 */
	function proxy (context, content, selectors, parents, line, column, length, id) {
		for (var i = 0, out = content, next; i < plugged; i++) {
			switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id)) {
				case void 0:
				case false:
				case true:
				case null: {
					break
				}
				default: {
					out = next
				}
			}
		}

		switch (out) {
			case void 0:
			case false:
			case true:
			case null:
			case content: {
				break
			}
			default: {
				return out
			}
		}
	}

	/**
	 * Minify
	 *
	 * @param {(string|*)} output
	 * @return {string}
	 */
	function minify (output) {
		return output
			.replace(formatptn, '')
			.replace(beforeptn, '')
			.replace(afterptn, '$1')
			.replace(tailptn, '$1')
			.replace(whiteptn, ' ')
	}

	/**
	 * Use
	 *
	 * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
	 */
	function use (plugin) {
		switch (plugin) {
			case void 0:
			case null: {
				plugged = plugins.length = 0
				break
			}
			default: {
				switch (plugin.constructor) {
					case Array: {
						for (var i = 0, length = plugin.length; i < length; i++) {
							use(plugin[i])
						}
						break
					}
					case Function: {
						plugins[plugged++] = plugin
						break
					}
					case Boolean: {
						unkwn = !!plugin|0
					}
				}
			}
 		}

 		return use
	}

	/**
	 * Set
	 *
	 * @param {*} options
	 */
	function set (options) {		
		for (var name in options) {
			var value = options[name]
			switch (name) {
				case 'keyframe': keyed = value|0; break
				case 'global': escape = value|0; break
				case 'cascade': cascade = value|0; break
				case 'compress': compress = value|0; break
				case 'prefix': vendor = value|0; break
				case 'semicolon': semicolon = value|0; break
				case 'preserve': preserve = value|0; break
			}
		}

		return set
	}

	/**
	 * Stylis
	 *
	 * @param {string} selector
	 * @param {string} input
	 * @return {*}
	 */
	function stylis (selector, input) {
		if (this !== void 0 && this.constructor === stylis) {
			return factory(selector)
		}

		// setup
		var ns = selector
		var code = ns.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (ns = ns.trim()).charCodeAt(0)
		}

		// keyframe/animation namespace
		if (keyed > 0) {
			key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
		}

		// reset, used to assert if a plugin is moneky-patching the return value
		code = 1

		// cascade/isolate
		if (cascade === 1) {
			nscope = ns
		} else {
			nscopealt = ns
		}

		var selectors = [nscope]
		var result

		// execute plugins, pre-process context
		if (plugged > 0) {
			result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0)

			if (result !== void 0 && typeof result === 'string') {
				input = result
			}
		}

		// build
		var output = compile(array, selectors, input, 0)

		// execute plugins, post-process context
		if (plugged > 0) {
			result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0)
	
			// bypass minification
			if (result !== void 0 && typeof(output = result) !== 'string') {
				code = 0
			}
		}

		// reset
		key = ''
		nscope = ''
		nscopealt = ''
		pattern = 0
		line = 1
		column = 1

		return compress*code === 0 ? output : minify(output)
	}

	stylis['use'] = use
	stylis['set'] = set

	if (options !== void 0) {
		set(options)
	}

	return stylis
}));

},{}],8:[function(require,module,exports){
'use strict';

var domvm = require('domvm/dist/nano/domvm.nano.js');
var iv = domvm.injectView;

class Ctor {
    constructor(options) {
        this.model = Object.assign({}, {
            fields:[],
            views: []
        }, options);
        for(var l = this.model.fields.length; l--;) {
            this.model.views[l] = iv(this.model.fields[l].viewModel);
        }
        this.viewModel = null;
    }
    mount(...args) {
        var ret;
        if (this.viewModel) {
            ret = this.viewModel.mount(...args);
        }
        return ret;
    }
    unmount(...args) {
        var ret;
        if (this.viewModel) {
            ret = this.viewModel.unmount(...args);
        }
        return ret;
    }
    init(view, style) {
        var me = this;
        me.view = view;
        me.style = style;
        var wrapperView = Object.create(this.view);
        wrapperView.init = function() {
            me.style.mount();
        };
        this.viewModel = domvm.createView(wrapperView, this.model);
        this.viewModel.__container = this;
    }
}

module.exports = Ctor;
},{"domvm/dist/nano/domvm.nano.js":5}],9:[function(require,module,exports){
'use strict';

var domvm = require('domvm/dist/nano/domvm.nano.js');
var config = require('../config');
var StyleSheet = require('../utils/StyleSheet');
var UIBase = require('../Base');
var el = domvm.defineElement;
var PREFIX_CSS = 'context-ui-button';
var NAME_THEME_OCEAN = 'ocean';

var style = new StyleSheet(`
    display: flex;

    font-family: ${config.fields.fontFamily};
    font-size: ${config.fields.fontSize};
    line-height: ${config.fields.lineHeight};
    margin: ${config.fields.marginBlock} auto;

    border-radius: 2px;
    border-width: 1px;
    border-style: solid;

    box-sizing: border-box;
    padding: 0 .8em;

    transition-property: color, background-color;;
    transition-duration: .3s;
    transition-timing-function: cubic-bezier(.52,.02,.19,1.02);

    cursor: pointer;

    > .inner
    {
        margin: .5em auto;
        text-align: center;
        font-size: 1.2em;
    }
`, {
    prefix: PREFIX_CSS
});

style.modifiers[NAME_THEME_OCEAN] = `
    border-color: ${config.themes.ocean.prominent};
    background-color: ${config.themes.ocean.assisting};
    color: ${config.themes.ocean.prominent};

    &:hover 
    {
        background-color: ${config.themes.ocean.prominent};
        color: ${config.themes.ocean.assisting};
    }
`;

style.fonts.google.push(config.fields.fontFamily);

var view = {
    render: function(vm, model) {
        return el('div.' + style.id + 
            (model.theme?('.'+style.modifiers[model.theme].name):''), 
            {
                onclick: model.events.onClick
            },
            [
                el('div.inner', [
                    el('span.text', (model.views && model.views.length > 0)?model.views:model.text)
                ])
            ]);
    }
};

class Ctor extends UIBase {
    constructor(...args) {
        super(...args);
        var me = this;
        me.model = Object.assign({}, {
            text: '',
            theme: NAME_THEME_OCEAN,
            events: {
                onClick: ()=> void 0
            }
        }, me.model);

        me.init(view, style);
    }
    set onClick(v) {
        this.model.events.onClick = v;
        this.viewModel.redraw(true);
    }
    get onClick() {
        return this.model.events.onClick;
    }
}

module.exports = Ctor;
},{"../Base":8,"../config":14,"../utils/StyleSheet":21,"domvm/dist/nano/domvm.nano.js":5}],10:[function(require,module,exports){
'use strict';

var domvm = require('domvm/dist/nano/domvm.nano.js');
var config = require('../config');
var StyleSheet = require('../utils/StyleSheet');
var UIBase = require('../Base');
var el = domvm.defineElement;
var PREFIX_CSS = 'context-ui-close';
var NAME_THEME_OCEAN = 'ocean';

//const SVG_CROSS = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#292c34"></path></svg>`;

var style = new StyleSheet(`
    font-family: ${config.fields.fontFamily};
    position: relative;
    width: 40px;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;

    transition-property: color;
    transition-duration: .3s;

    cursor: pointer;

    &:before
    {
        content: ' ';
        display: block;
        border-radius: 50%;

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;

        transform: scale(.1);
        transition-property: transform,opacity;
        transition-duration: .3s;
        transition-delay: .05s;
        transition-timing-function: cubic-bezier(.52,.02,.19,1.02);

        z-index: 0;
    }

    > .inner
    {
        position: relative;
        z-index: 1
        > .text 
        {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            transform: rotate(0);

            transition-property: transform;
            transition-duration: .3s;
            transition-delay: .05s;
            transition-timing-function: cubic-bezier(.52,.02,.19,1.02);
        }
        > .text.no-cross
        {
            display: none;
        }
    }

    &.active
    {
        &:before
        {
            opacity: 1;
            transform: scale(1);
        }
        > .inner
        {
            > .text
            {
                transform: rotate(90deg);
            }
            > .text.no-cross
            {
                display inline-flex;
            }
        }
    }
`, {
    prefix: PREFIX_CSS
});

style.modifiers[NAME_THEME_OCEAN] = `
    background-color: ${config.themes.ocean.assisting};
    &:before
    {
        background-color: ${config.themes.ocean.prominent};
    }
    &.active
    {
        color: ${config.themes.ocean.assisting};
    }
`;

style.fonts.google.push('Maitree');

var view = {
    render: function(vm, model) {
        return el('div.' + style.id + '.' + style.modifiers[model.theme].name + 
                (
                    (model.prvt.container.modifier && model.prvt.container.modifier!=='')?
                    '.'+model.prvt.container.modifier:''
                ), {
                onclick: model.events.onClick,
                onmouseenter: model.prvt.mouseEnterHandler,
                onmouseleave: model.prvt.mouseLeaveHandler,
                style: model.size?(`
                    width: ${model.size}px;
                    height: ${model.size}px;
                    border-radius: ${(model.size / 2)}px;
                    font-size: ${(model.size / 2)}px;
                    line-height: ${(model.size / 2) + 1}px;
                    `
                ):''
            }, [
                el('div.inner', [
                    el('span.text' + 
                        (model.noCrossByDefault?'.no-cross':''), '✕')
                ])
            ]);
    }
};

class Ctor extends UIBase {
    constructor(...args) {
        super(...args);
        var me = this;
        me.model = Object.assign({}, {
            events: {
                onClick: ()=> void 0
            },
            theme: NAME_THEME_OCEAN,
            size: null,
            hoverToActive: true,
            noCrossByDefault: false
        }, me.model, {
            prvt: {
                container: {
                    modifier: ''
                },
                mouseEnterHandler: function () {
                    if (!me.model.hoverToActive) {
                        return;
                    }
                    me.active = true;
                },
                mouseLeaveHandler: function () {
                    if (!me.model.hoverToActive) {
                        return;
                    }
                    me.active = false;
                }
            }
        });

        me.init(view, style);
    }
    get active () {
        return this.model.prvt.container.modifier === 'active';
    }
    set active (value) {
        if (value) {
            this.model.prvt.container.modifier = 'active';
        }
        else {
            this.model.prvt.container.modifier = '';
        }
        this.viewModel.redraw(true);
    }
    get onClick() {
        return this.model.events.onClick;
    }
    set onClick(func) {
        this.model.events.onClick = func;
        this.viewModel.redraw(true);
    }
}

module.exports = Ctor;
},{"../Base":8,"../config":14,"../utils/StyleSheet":21,"domvm/dist/nano/domvm.nano.js":5}],11:[function(require,module,exports){
'use strict';

var domvm = require('domvm/dist/nano/domvm.nano.js');
var config = require('../config');
var StyleSheet = require('../utils/StyleSheet');
var UIBase = require('../Base');
var el = domvm.defineElement;
var PREFIX_CSS = 'context-ui-label';

var style = new StyleSheet(`
    font-family: ${config.fields.fontFamily};
    font-size: 20px;
    line-height: 1.2em;
    margin: 14px auto;
`, {
    prefix: PREFIX_CSS
});

style.fonts.google.push(config.fields.fontFamily);

var view = {
    render: function(vm, data) {
        return el('div.' + style.id, [
                el('div.inner', [
                    el('span.text', data.text)
                ])
            ]);
    }
};

class Ctor extends UIBase {
    constructor(...args) {
        super(...args);
        this.model = Object.assign({}, {
            text: ''
        }, this.model);

        this.init(view, style);
    }
}

module.exports = Ctor;
},{"../Base":8,"../config":14,"../utils/StyleSheet":21,"domvm/dist/nano/domvm.nano.js":5}],12:[function(require,module,exports){
'use strict';

var domvm = require('domvm/dist/nano/domvm.nano.js');
var config = require('../config');
var StyleSheet = require('../utils/StyleSheet');
var ResizeSensor = require('resize-sensor');
var UIBase = require('../Base');
var UIClose = require('../Close');
var UIFieldBase = require('../fields/Base');
var el = domvm.defineElement;
var vi = domvm.injectView;

var PREFIX_CSS = 'context-ui-prompt';
var NAME_THEME_BRIGHT = 'bright';
var MODIFIER_START_VISIBLE_ANIMATE = 'animate-visible';
var MODIFIER_HIDDEN = 'is-hidden';

var style = new StyleSheet(`
    position: fixed;
    top: 0;
    left: 0;
    > .border
    {
        position: fixed;
        z-index: 1;

        box-sizing: border-box;
        background: #fff;
        box-shadow: 0 8px 46px rgba(0,0,0,.08), 0 2px 6px rgba(0,0,0,.03);
        max-width: 640px;
        border-radius: 2px;
        transform: scale(.9);
        opacity: 0;
        transition-property: transform,opacity;
        transition-duration: .3s;
        transition-delay: .05s;
        transition-timing-function: cubic-bezier(.52,.02,.19,1.02);

        > .inner
        {
            margin: 4ex;
            text-align: center;
        }

        > .close-container
        {
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%, -50%);
            border-radius: 50%;
        }
    }
    > .backdrop
    {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 0;
        transition-property: background-color;
        transition-duration: .3s;
        transition-delay: .05s;
    }
`, {
    prefix: PREFIX_CSS
});

style.fonts.google.push(config.fields.fontFamily);

style.modifiers[MODIFIER_START_VISIBLE_ANIMATE] = `
    > .border
    {
        transform: scale(1);
        opacity: 1;
    }
`;

style.modifiers[NAME_THEME_BRIGHT] = `
    > .border
    {
        
    }
    > .backdrop
    {
        background: rgba(255, 255, 255, 0);
    }
    &.${style.modifiers[MODIFIER_START_VISIBLE_ANIMATE].name}
    {
        > .backdrop
        {
            background: rgba(255, 255, 255, .8);
        }
    }
`;

style.modifiers[MODIFIER_HIDDEN] = `
    display: none;
`;

function updatePosition(element, data, vm) {
    var rootElement = element.parentNode;
    var backUp = rootElement.style.display;
    rootElement.style.display = 'block';
    var offset = getCenterisedOffset(element);
    rootElement.style.display = backUp;
    if (data.style.left != offset.left || data.style.top != offset.top) {
        data.style.left = offset.left;
        data.style.top = offset.top;
        vm.redraw(true);
    }
}

var view = {
    render: function(vm, model) {
        return el('div.' + style.id + 
            '.' + style.modifiers[model.theme].name + 
            (model.animateVisible?'.'+style.modifiers[MODIFIER_START_VISIBLE_ANIMATE].name:'') + 
            (model.hidden?'.' + style.modifiers[MODIFIER_HIDDEN].name:''), {
                'style': 'z-index: ' + model.style.zIndex + ';'
            }, 
            [
            el('div.border', {
                style: 'left: ' + model.style.left + '; top:' + model.style.top + ';',
                _hooks: {
                    didInsert: function(view){
                        updatePosition(view.el, model, vm);
                        vm._resizeHandler = function(){
                            updatePosition(view.el, model, vm);
                        };
                        window.addEventListener('resize', vm._resizeHandler);
                        vm._resizeSensor = new ResizeSensor(view.el, vm._resizeHandler);
                    },
                    willRemove: function() {
                        window.removeEventListener('resize', vm._resizeHandler);
                        vm._resizeSensor.detach();
                    }
                }
            }, [
                el('div.inner', model.views), 
                (model.has.button?el('div.close-container',[
                    model.has.button
                ]):null)
            ]),
            el('div.backdrop')
        ]);
    }
};

function getMaximumZIndex(base) {
    var all = document.body.querySelectorAll('*');
    var css, z;
    var max = base;
    for(var l = all.length; l--;) {
        css = window.getComputedStyle(all[l]);
        z = css.zIndex>>0;
        if (z > max) {
            max = z;
        }
    }
    return max;
}

function getCenterisedOffset(element) {
    let box = element.getBoundingClientRect();
    var ret = {
        top: 0,
        left: 0
    };
    ret.top = (window.innerHeight - box.height) / 2 + "px";
    ret.left = (window.innerWidth - box.width) / 2 + "px";
    return ret;
}

class Ctor extends UIBase {
    constructor(...args) {
        super(...args);
        var me = this;
        this.model = Object.assign({}, {
            theme: NAME_THEME_BRIGHT,
            has: {
                button: true
            }
        }, this.model, {
            style: {
                zIndex: 0,
                left: 0,
                top: 0
            },
            animateVisible: false,
            hidden: true
        });

        if (this.model.has.button) {
            this.uiClose = new UIClose();
            this.uiClose.onClick = function() {
                me.hide();
            };
            this.model.has.button = vi(this.uiClose.viewModel);
        }

        this.model.style.zIndex = getMaximumZIndex(this.model.style.zIndex) + 1;

        this.init(view, style);
    }
    show() {
        var me = this;
        me.model.hidden = false;
        setTimeout(function(){
            me.model.animateVisible=true;
            me.viewModel.redraw(true);
        }, 0);
        me.viewModel.redraw(true);
    }
    hide() {
        var me = this;
        me.model.animateVisible = false;
        setTimeout(function(){
            me.model.hidden = true;
            me.viewModel.redraw(true);
        }, 500);
        me.viewModel.redraw(true);
    }
    get value() {
        var ret = {};
        var field;
        for(var l = this.model.fields.length; l--;) {
            field = this.model.fields[l];
            if (!(field instanceof UIFieldBase)) {
                continue;
            }
            ret[field.name] = field.value;
        }
        return ret;
    }
}

module.exports = Ctor;
},{"../Base":8,"../Close":10,"../config":14,"../fields/Base":15,"../utils/StyleSheet":21,"domvm/dist/nano/domvm.nano.js":5,"resize-sensor":6}],13:[function(require,module,exports){
'use strict';

var domvm = require('domvm/dist/nano/domvm.nano.js');
var ResizeSensor = require('resize-sensor');
var animationFrame = require('../utils/animationFrame');
var config = require('../config');
var StyleSheet = require('../utils/StyleSheet');
var UIBase = require('../Base');
var el = domvm.defineElement;
var PREFIX_CSS = 'context-ui-scrollbar';
var NAME_THEME_OCEAN = 'ocean';
var THICKNESS = '10';

var style = new StyleSheet(`
    font-family: ${config.fields.fontFamily};
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    height: 100%;
    transition: opacity .3s;

    > .inner
    {
        width: 2px;

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;

        transition: width .3s, background-color .3s;

        > .indicator,
        > .handle
        {
            position: absolute;
            left: 0; right: 0;

            height: 20px;
            width: 100%;

            border-radius: 0;
            transition: border-radius .3s;
        }

        > .handle
        {
            cursor: pointer;
            z-index: 2;
        }

        > .indicator
        {
            z-index: 1;
        }
    }

    &:hover
    {
        > .inner
        {
            width: 100%;
            > .handle
            {
                border-radius: 0px;
            }
        }
    }
`, {
    prefix: PREFIX_CSS
});

style.fonts.google.push(config.fields.fontFamily);

style.modifiers['on-top'] = `
    bottom: auto;
    height: ${THICKNESS}px;

    > .inner
    {
        bottom: auto;
        > .handle
        {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    }
`;

style.modifiers['on-bottom'] = `
    top: auto;
    height: ${THICKNESS}px;

    > .inner
    {
        top: auto;
        > .handle
        {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
`;

style.modifiers['on-left'] = `
    right: auto;
    width: ${THICKNESS}px;

    > .inner
    {
        right: auto;
        > .handle
        {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
    }
`;

style.modifiers['on-right'] = `
    left: auto;
    width: ${THICKNESS}px;

    > .inner
    {
        left: auto;
        > .handle
        {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
`;

style.modifiers[NAME_THEME_OCEAN] = `
    > .inner
    {
        background-color: rgba(0,0,0,0);
        > .handle 
        {
            background-color: ${config.themes.ocean.prominent};
        }

        > .indicator
        {
            background-color: rgba(0,0,0,.3);
        }
    }
    &:hover
    {
        > .inner
        {
            background-color: rgba(0,0,0,.03);
        }
    }
`;

var view = {
    render: function(vm, data) {
        var indicatorDisplay = data.enable.indicator?'block':'none';
        var indicatorPositionRuleName = data.directions.scrolling==='vertical'?'top':data.directions.text;
        return el(
            'div.' + style.id + 
            '.' + style.modifiers['on-' + data.directions.bar].name +
            '.' + style.modifiers[NAME_THEME_OCEAN].name, {
                _hooks: {
                    didInsert: function(view){
                        var parent = view.el.parentNode;
                        if (!parent) {
                            return;
                        }
                        data.prvt.originalOverflow = parent.style.overflow;
                        parent.style.overflow = 'hidden';
                        var parentViewportSizeProp = data.directions.scrolling === 'vertical'?
                            'offsetHeight':'offsetWidth';
                        var parentPositionProp = data.directions.scrolling === 'vertical'?
                            'scrollTop':'scrollLeft';
                        var parentLengthProp = data.directions.scrolling === 'vertical'?
                            'scrollHeight':'scrollWidth';
                        var innerPositionProp = (data.directions.bar === 'left' || data.directions.bar === 'right')?'scrollTop':'scrollLeft';
                        function handleResize(){
                            if (data.handlers.resize) {
                                data.handlers.resize();
                            }
                            else {
                                data.length = parent[parentLengthProp] * 1;
                                data.viewport = parent[parentViewportSizeProp] * 1;
                                data.position = parent[parentPositionProp] * 1;
                            }
                            data.prvt.innerElementPosition = parent[innerPositionProp] * 1;
                            data.prvt.handle = data.viewport / data.length * parent[parentViewportSizeProp];
                            if (data.prvt.handle < 20) {
                                data.prvt.handle = 20;
                            }
                            data.prvt.position = data.position / (data.length - data.viewport) * (parent[parentViewportSizeProp] - data.prvt.handle);
                            data.directions.text = window.getComputedStyle(parent).direction === 'rtl'?'right':'left';
                            vm.redraw(true);
                        }

                        function handleFrameRequest(){
                            var maxScrollTop = parent.scrollHeight - parent.offsetHeight;
                            var maxScrollLeft = parent.scrollWidth - parent.offsetWidth;
                            if (data.prvt.scrollTop > maxScrollTop) {
                                data.prvt.scrollTop = maxScrollTop;
                            }
                            if (data.prvt.scrollTop < 0) {
                                data.prvt.scrollTop = 0;
                            }
                            if (data.prvt.scrollLeft > maxScrollLeft) {
                                data.prvt.scrollLeft = maxScrollLeft;
                            }
                            if (data.prvt.scrollLeft < 0) {
                                data.prvt.scrollLeft = 0;
                            }
                            parent.scrollTop += (data.prvt.scrollTop - parent.scrollTop) / 2;
                            parent.scrollLeft += (data.prvt.scrollLeft - parent.scrollLeft) / 2;
                            animationFrame.request(handleFrameRequest);
                        }

                        vm.__container.handleResize = handleResize;
                        vm._handleFrameRequest = handleFrameRequest;
                        vm._resizeSensor = new ResizeSensor(parent, handleResize);
                        parent.addEventListener('scroll', handleResize, {passive: false});
                        parent.addEventListener('mousewheel', data.handlers.mousewheel, {passive: false});
                        animationFrame.request(handleFrameRequest);
                        handleResize();
                    },
                    willRemove: function(view) {
                        var parent = view.el.parentNode;
                        if (!parent) {
                            return;
                        }
                        vm._resizeSensor.detach();
                        vm._resizeSensor = null;
                        parent.removeEventListener('scroll', vm.__container.handleResize);
                        parent.removeEventListener('mousewheel', data.handlers.mousewheel);
                        animationFrame.cancel(vm._handleFrameRequest);
                        vm.__container.handleResize = null;
                        vm._handleFrameRequest = null;
                        parent.style.overflow = data.prvt.originalOverflow;
                    }
                },
                style: `
                    top: ${data.prvt.innerElementPosition}px;
                    opacity: ${data.prvt.handle >= data.viewport?'0':'1'};
                `
            }, [
                el('div.inner', [
                    el('div.handle', {
                        style: `
                            height: ${data.prvt.handle}px;
                            ${indicatorPositionRuleName}: ${data.prvt.position}px;
                        `
                    }),
                    el('div.indicator', {
                        style: `
                            display: ${indicatorDisplay};
                            height: ${data.prvt.handle}px;
                            ${indicatorPositionRuleName}: ${data.prvt.position}px;
                        `
                    })
                ])
            ]);
    }
};

class Ctor extends UIBase {
    constructor(...args) {
        super(...args);
        var me = this;
        me.model = Object.assign({}, {
            length: 0,
            position: 0,
            viewport: 0,
            enable: {
                indicator: true
            }
        }, me.model, {
            prvt: {
                handle: 0,
                scrollTop: 0,
                scrollLeft: 0,
                originalOverflow: ''
            }
        });
        me.model.handlers = Object.assign({
            mousewheel: function(evt) {
                var delta = me.model.directions.scrolling === 'vertical'?evt.deltaY:evt.deltaX;
                var prop = me.model.directions.scrolling === 'vertical'?'scrollTop':'scrollLeft';
                me.model.prvt[prop] = me.model.prvt[prop] + delta * 3;
                if (me.model.prvt[prop] > 0 && me.model.prvt[prop] < me.model.length) {
                    evt.preventDefault();
                }
            }
        }, me.model.handlers);
        me.model.directions = Object.assign({
            scrolling: 'vertical',
            bar: 'right',
            text: 'left'
        }, me.model.directions);

        me.init(view, style);
    }
}

module.exports = Ctor;
},{"../Base":8,"../config":14,"../utils/StyleSheet":21,"../utils/animationFrame":22,"domvm/dist/nano/domvm.nano.js":5,"resize-sensor":6}],14:[function(require,module,exports){
'use strict';

module.exports = {
	fields: {
		fontFamily: 'Maitree',
		fontSize: '12px',
		lineHeight: '1.2em',
		marginBlock: '14px'
	},
	themes: {
		ocean: {
			prominent: '#039BE5',
			assisting: '#FFF'
		}
	}
};
},{}],15:[function(require,module,exports){
'use strict';

var UIBase = require('../../Base');

class Ctor extends UIBase {
    constructor(...args) {
        super(...args);
    }
    get name() {
        return this.model.name;
    }
    set name(value) {
        this.model.name = value;
    }
    get value() {
        return this.model.prvt.raw;
    }
}

module.exports = Ctor;
},{"../../Base":8}],16:[function(require,module,exports){
'use strict';

var domvm = require('domvm/dist/nano/domvm.nano.js');
var iv = domvm.injectView;
var el = domvm.defineElement;

var config = require('../../config');
var StyleSheet = require('../../utils/StyleSheet');
var UIClose = require('../../Close');
var UIBase = require('../Base');

var PREFIX_CSS = 'context-ui-fields-checkbox';
var NAME_THEME_OCEAN = 'ocean';
var SIZE = 17;

var style = new StyleSheet(`
    font-family: ${config.fields.fontFamily};
    font-size: ${config.fields.fontSize};
    line-height: ${config.fields.lineHeight};

    > .inner 
    {
        margin: ${config.fields.marginBlock} auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;

        > .ui-cross-container
        {
            position: relative;
            width: ${SIZE}px;
            height: ${SIZE}px;
            border-radius: ${SIZE/2}px;
            border-width: 1px;
            border-style: solid;

            transition-property: border, background-color;
            transition-duration: .3s;
            transition-timing-function: cubic-bezier(.52,.02,.19,1.02);

            > div
            {
                position: absolute;
                top: 0;
                left: 0;
            }
        }
        > .check-box
        {
            display: none;
        }
        > .text 
        {
            margin: auto .5em;
        }
    }
`, {
    prefix: PREFIX_CSS
});

style.modifiers[NAME_THEME_OCEAN] = `
    > .inner
    {
        > .ui-cross-container
        {
            border: 1px solid #EFEFEF;
            background-color: #EFEFEF;
        }
    }

    &:hover
    {
        > .inner
        {
            > .ui-cross-container
            {
                border: 1px solid #ADADAD;
                background-color: #ADADAD;
            }
        }
    }

    &.active 
    {
        > .inner
        {
            > .ui-cross-container
            {
                border-color: ${config.themes.ocean.assisting};
                background-color: transparent;
            }
        }
    }
`;

style.fonts.google.push(config.fields.fontFamily);

var view = {
    render: function(vm, model) {
        return el('div.' + style.id + '.' + style.modifiers[model.theme].name + 
                (model.active?'.active':''), {
                    onclick: model.prvt.onClick
                }, [
                el('div.inner', [
                    el('div.ui-cross-container', [model.prvt.cross]),
                    el('input.check-box', {
                        name: model.name,
                        type: 'checkbox',
                        checked: (model.active?true:false)
                    }),
                    el('span.text', model.label)
                ])
            ]);
    }
};

class Ctor extends UIBase {
    constructor(...args) {
        super(...args);
        var me = this;
        me.model = Object.assign({}, {
            label: '',
            theme: NAME_THEME_OCEAN,
            active: false
        }, me.model, {
            prvt: {
                raw: false,
                cross: null,
                onClick () {
                    me.cross.active = !me.cross.active;
                    me.model.active = me.cross.active;
                    me.model.prvt.raw = me.cross.active;
                    me.viewModel.redraw(true);
                }
            }
        });
        me.cross = new UIClose({
            theme: me.model.theme,
            hoverToActive: false,
            noCrossByDefault: true,
            size: SIZE
        });
        me.model.prvt.cross = iv(me.cross.viewModel);

        me.init(view, style);
    }
}

module.exports = Ctor;
},{"../../Close":10,"../../config":14,"../../utils/StyleSheet":21,"../Base":15,"domvm/dist/nano/domvm.nano.js":5}],17:[function(require,module,exports){
'use strict';

var domvm = require('domvm/dist/nano/domvm.nano.js');
var config = require('../../config');
var StyleSheet = require('../../utils/StyleSheet');
var UIBase = require('../Base');
var XInput = require('dom-xinput');
var el = domvm.defineElement;
var PREFIX_CSS = 'context-ui-fields-text';
var NAME_THEME_OCEAN = 'ocean';
var MODIFIER_HAS_INPUT = 'has-input';
var MODIFIER_HAS_FOCUS = 'has-focus';
var BEZIER_NORMAL = 'transition-timing-function: cubic-bezier(.52,.02,.19,1.02);';

var style = new StyleSheet(`
    font-family: ${config.fields.fontFamily};
    font-size: ${config.fields.fontSize};
    line-height: ${config.fields.lineHeight};
    position: relative;
    
    > .inner
    {
        &:before
        {
            visibility: hidden;
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            width: 0;
            height: 2px;

            transition-property: visibility, width;
            transition-duration: .3s;
            ${BEZIER_NORMAL}
        }
        position: relative;
        margin: ${config.fields.marginBlock} 0;

        transition-property: box-shadow;
        transition-duration: .3s;
        ${BEZIER_NORMAL}
        height: 20px;

        > .placeholder
        {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            pointer-events: none;
            cursor: text;
            transform: scale(1) translateY(0);
            transform-origin: 0 100%;

            transition-property: transform, bottom;
            transition-duration: .3s;
            ${BEZIER_NORMAL}
        }
        > input.text
        {
            display: block;
            outline: none;
            border: 0;
            width: 100%;
            box-sizing: border-box;
            vertical-align: middle;
            height: 20px;

            &:hover,
            &:focus
            {
                outline: none;
            }
        }
    }
    
`, {
    prefix: PREFIX_CSS
});

style.modifiers[MODIFIER_HAS_INPUT] = `
    > .inner
    {
        > .placeholder 
        {
            transform: scale(.7) translateY(-130%)
        }
    }
`;

style.modifiers[MODIFIER_HAS_FOCUS] = `
    > .inner 
    {
        &:before 
        {
            visibility: visible;
            width: 100%;
        }
    }
`;

style.modifiers[NAME_THEME_OCEAN] = `
    background-color: ${config.themes.ocean.assisting};
    > .inner
    {
        &:before 
        {
            background-color: ${config.themes.ocean.prominent};
        }

        box-shadow: 0 1px 0 #EFEFEF;

        > .placeholder 
        {
            color: #AEAEAE;
        }
    }
    &:hover 
    {
        > .inner 
        {
            box-shadow: 0 2px 0 #ADADAD;
        }
    }
    
`;

style.fonts.google.push(config.fields.fontFamily);

var view = {
    render: function(vm, model) {
        if (model.text) {
            model.prvt.inputted = true;
        }
        return el('div.' + style.id + '.' + style.modifiers[model.theme].name +
            (model.prvt.inputted?'.'+style.modifiers[MODIFIER_HAS_INPUT].name:'') + 
            (model.prvt.focused?'.'+style.modifiers[MODIFIER_HAS_FOCUS].name:''), [
                el('div.inner', [
                    el('div.placeholder', model.label),
                    el('input.text', {
                        name: model.name,
                        value: model.text,
                        onfocus: function(){
                            if (!model.prvt.focused) {
                                model.prvt.focused = true;
                                vm.redraw(true);
                            }
                        },
                        onblur: function() {
                            if (model.prvt.focused) {
                                model.prvt.focused = false;
                                vm.redraw(true);
                            }
                        },
                        _hooks: {
                            didInsert: function(node){
                                vm._xinput = new XInput();
                                vm._xinput.observe(node.el);
                                vm._xinput.oninput = function() {
                                    var inputted;
                                    model.text = node.el.value;
                                    model.prvt.raw = model.text;
                                    if (node.el.value === '') {
                                        inputted = false;
                                    }
                                    else {
                                        inputted = true;
                                    }
                                    if (model.prvt.inputted !== inputted) {
                                        model.prvt.inputted = inputted;
                                        vm.redraw(true);
                                    }
                                };
                            },
                            willRemove: function() {
                                vm._xinput = null;
                            }
                        }
                    })
                ])
            ]);
    }
};

class Ctor extends UIBase {
    constructor(...args) {
        super(...args);
        this.model = Object.assign({}, {
            text: '',
            label: '',
            theme: NAME_THEME_OCEAN
        }, this.model, {
            prvt: {
                inputted: false,
                focused: false
            }
        });

        this.init(view, style);
    }
}

module.exports = Ctor;
},{"../../config":14,"../../utils/StyleSheet":21,"../Base":15,"dom-xinput":4,"domvm/dist/nano/domvm.nano.js":5}],18:[function(require,module,exports){
'use strict';

var config = require('../../config');
var StyleSheet = require('../../utils/StyleSheet');
var UIBase = require('../Base');
var UITextField = require('../Text');
var anime = require('animejs');
var domvm = require('domvm/dist/nano/domvm.nano.js');
var el = domvm.defineElement;
var iv = domvm.injectView;
var svg = domvm.defineSvgElement;

var PREFIX_CSS = 'context-ui-fields-textbutton';

var style = new StyleSheet(`
    font-family: ${config.fields.fontFamily};
    display: flex;
    justify-content: stretch;
    align-items: center;
    margin: ${config.fields.marginBlock} auto;

    > .inner 
    {
        margin: -14px 10px;
    }
    > .inner.start
    {
        margin-left: 0;
        flex-grow: 1;
    }
    > .inner.end
    {
        margin-right: 0;
        flex-grow: 0;
        flex-shrink: 1;
        position: relative;
        width: 70px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        > svg
        {
            position: absolute;
            top: -2px; 
            left: -4px;
            right: 0;
            bottom: 0;
            width: 74px;
            height: 33px;
            z-index: 0;
            pointer-events: none;
        }
        > .select 
        {
            font-family: system-ui;
            font-size: 9px;
            text-align: center;
            position: relative;
            z-index: 1;

            transform: scale(1);
            pointer-events: none;
            transition-property: color;
            transition-duration: .5s;
            transition-delay: .3s;
        }
    }
    > .inner.end.is-hovered
    {
        > .select 
        {
            color: ${config.themes.ocean.prominent};
            transition-delay: 0s;
        }
    }
`, {
    prefix: PREFIX_CSS
});

style.fonts.google.push(config.fields.fontFamily);

var view = {
    render: function(vm, data) {
        return el(
                'div.' + style.id, [
                    el('div.inner.start', [
                        data.prvt.textField
                    ]),
                    el('div.inner.end' + (data.prvt.mouseentered?'.is-hovered':''), {
                        onmouseenter: function(evt){
                            if (evt.currentTarget !== evt.target) {
                                return;
                            }
                            if (data.prvt.mouseentered) {
                                return;
                            }
                            data.prvt.mouseentered = true;
                            if (vm._svgAnime) {
                                vm._svgAnime.restart();
                                vm._svgAnime.play();
                            }
                            if (vm._sltAnime) {
                                vm._sltAnime.restart();
                                vm._sltAnime.play();
                            }
                            vm.redraw(true);
                        },
                        onmouseleave: function(evt) {
                            if (evt.currentTarget !== evt.target) {
                                return;
                            }
                            if (!data.prvt.mouseentered) {
                                return;
                            }
                            data.prvt.mouseentered = false;
                            if (vm._svgAnime) {
                                vm._svgAnime.restart();
                                vm._svgAnime.play();
                                vm._svgAnime.reverse();
                            }
                            if (vm._sltAnime) {
                                vm._sltAnime.restart();
                                vm._sltAnime.play();
                                vm._sltAnime.reverse();
                            }
                            vm.redraw(true);
                        },
                        onclick: data.events.onClick?data.events.onClick.bind(vm.__container):null
                    }, [
                        svg('svg', {
                            viewBox: '0 0 74 33',
                            _raw: true,
                            _hooks: {
                                didInsert: function(node){
                                    var path = node.el.querySelector('path');
                                    var ani = anime({
                                        targets: path,
                                        d: 'M2,4 C22,-0 52,-0 72,4 C74,12 74,20 72,29 C52,33 22,33 2,29 C0,20 0,12 2,4 Z',
                                        stroke: config.themes.ocean.prominent,
                                        strokeWidth: 1,
                                        duration: 500,
                                        elasticity: 300,
                                        autoplay: false,
                                        easing: 'easeInOutBack'
                                    });
                                    vm._svgAnime = ani;
                                }
                            }
                        }, 
                        `
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path d="M2,4 C22,4 52,4 72,4 C72,12 72,20 72,29 C52,29 22,29 2,29 C2,20 2,12 2,4 Z" 
                                stroke="#EFEFEF" stroke-width="1" fill="#fff"></path>
                        </g>
                        `),
                        el('span.select', {
                            _hooks: {
                                didInsert: function(node){
                                    var ani = anime({
                                        targets: node.el,
                                        scale: 1.2,
                                        duration: 500,
                                        elasticity: 300,
                                        autoplay: false,
                                        easing: 'easeInOutBack'
                                    });
                                    vm._sltAnime = ani;
                                }
                            }
                        }, 'Select...')
                    ])
                ]
                );
    }
};

class Ctor extends UIBase {
    constructor(...args) {
        super(...args);
        var me = this;
        me._textField = new UITextField(...args);
        me.model = Object.assign({}, {
            events: {
                onClick:null
            }
        }, me.model, {
            prvt: {
                textField: iv(me._textField.viewModel),
                mouseentered: false
            }
        });

        me.init(view, style);
    }
    get onClick() {
        return this.modal.events.onClick;
    }
    set onClick(v) {
        this.modal.events.onClick = v;
        this.viewModel.redraw(true);
    }
    get name() {
        return this._textField.name;
    }
    get value() {
        return this._textField.value;
    }
    set value(value) {
        this._textField.model.text = value;
        me.viewModel.redraw(true);
        return this._textField.value = value;
    }
}

module.exports = Ctor;
},{"../../config":14,"../../utils/StyleSheet":21,"../Base":15,"../Text":17,"animejs":2,"domvm/dist/nano/domvm.nano.js":5}],19:[function(require,module,exports){
'use strict';

class Modifier {
    constructor(context, name) {
        this.context = context;
        this._name = name;
        this.text = '';
    }
    get name() {
        return this.context.id + '--' + this._name;
    }
}

module.exports = Modifier;
},{}],20:[function(require,module,exports){
'use strict';
var Modifier = require('./Modifier');
var contextMap = new WeakMap();

function Modifiers(context) {
    var me = this;
    contextMap.set(me, context);
    var modifiers = {};
    return new Proxy(modifiers, {
        set (target, key, value){
            var modifier = new Modifier(contextMap.get(me), key);
            modifier.text = value;
            modifiers[key] = modifier; 
            return true;
        },
        get (target, key) {
            return modifiers[key];
        }
    });
}

module.exports = Modifiers;
},{"./Modifier":19}],21:[function(require,module,exports){
'use strict';

var md5 = require('blueimp-md5');
var StylisCtor = require('stylis');
var cssMounter = require('./cssMounter');
var fontLoader = require('./fontLoader');
var Modifiers = require('./Modifiers');
var addedStyles = {};
var stylis = new StylisCtor({
    compress: false
});

class StyleSheet {
    constructor (cssText, options) {
        this.prefix = (options && options.prefix + '-') || '_';
        this.id = this.prefix + md5(cssText);
        this.cssText = cssText;
        this.modifiers = new Modifiers(this);
        this.fonts = {
            google: []
        };
    }
    mount(){
        if (addedStyles[this.id]) {
            return;
        }
        var cssText = stylis('.' + this.id, this.cssText);

        for(var key in this.modifiers) {
            if (!this.modifiers.hasOwnProperty(key)) {
                continue;
            }
            cssText += stylis('.' + this.id + '.' + this.modifiers[key].name, this.modifiers[key].text);
        }

        for(var l = this.fonts.google.length; l--;) {
            fontLoader.load(this.fonts.google[l]);
        }
        cssMounter.mount(cssText);
        addedStyles[this.id] = true;
    }
}


module.exports = StyleSheet;
},{"./Modifiers":20,"./cssMounter":23,"./fontLoader":24,"blueimp-md5":3,"stylis":7}],22:[function(require,module,exports){
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
},{}],23:[function(require,module,exports){
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
},{}],24:[function(require,module,exports){
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
},{"./cssMounter":23,"stylis":7}]},{},[1])(1)
});
//# sourceMappingURL=bundle.js.map
