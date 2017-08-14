(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.demo = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
const UIPrompt = require('./src/Prompt');
const UILabel = require('./src/Label');
const UIPathField = require('./src/fields/TextButton');
const UITextField = require('./src/fields/Text');
const UICheckBoxField = require('./src/fields/CheckBox');

var prompt = new UIPrompt({
    fields: [
        new UILabel({
            text: 'Hit <enter> to create the link'
        }),
        new UIPathField({
            name: 'href',
            label: 'Link URL',
            events: {
                onClick: function() {
                    window.alert('clicked');
                }
            }
        }),
        new UITextField({
            name: 'title',
            label: 'Link Title'
        }),
        new UICheckBoxField({
            name: 'target',
            label: 'Open in new window?'
        })
    ]
});

prompt.mount(document.body);
},{"./src/Label":10,"./src/Prompt":11,"./src/fields/CheckBox":14,"./src/fields/Text":15,"./src/fields/TextButton":16}],2:[function(require,module,exports){
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
/*
 https://github.com/leeoniya/domvm (v3.0.5, full)
*/
(function(z,q){"object"===typeof exports&&"undefined"!==typeof module?module.exports=q():"function"===typeof define&&define.amd?define(q):z.domvm=q()})(this,function(){"use strict";function z(){}function q(a){return null!=a&&a.constructor===Object}function ca(a){a=typeof a;return"string"===a||"number"===a}function P(a){return"function"===typeof a}function D(a){for(var b=arguments,c=1;c<b.length;c++)for(var d in b[c])a[d]=b[c][d];return a}function da(a,b){for(var c=[];b<a.length;b++)c.push(a[b]);return c}function ea(a,
b){for(var c in a)if(a[c]!==b[c])return!1;return!0}function Q(a,b){var c=a.length;if(b.length!==c)return!1;for(var d=0;d<c;d++)if(a[d]!==b[d])return!1;return!0}function fa(a){function b(){c=0;a.apply(d,e)}if(!ha)return a;var c,d,e;return function(){d=this;e=arguments;c||(c=ha(b))}}function Ga(a,b,c){return function(){return a.apply(c,b)}}function v(){}function ia(a){var b=new v;b.type=2;b.body=a;return b}function H(a){return"o"===a[0]&&"n"===a[1]}function I(a,b){switch(b){case "value":case "checked":case "selected":return!0}return!1}
function w(a){for(a=a||A;null==a.vm&&a.parent;)a=a.parent;return a.vm}function R(a,b){var c=S(a,function(a){c&&(null!=b.node&&b.redraw(),J(c))});return ja(a)}function ka(a,b){var c=S(a,function(a){c&&null!=b.node&&b.redraw()});return c}function la(a,b,c,d){var e=new v;e.type=1;null!=d&&(e.flags=d);e.attrs=b;b=ma[a];if(null==b){var f,g,h;for(ma[a]=b={tag:(f=a.match(/^[-\w]+/))?f[0]:"div",id:(g=a.match(/#([-\w]+)/))?g[1]:null,class:(h=a.match(/\.([-\w.]+)/))?h[1].replace(/\./g," "):null,attrs:null};f=
Ha.exec(a);)null==b.attrs&&(b.attrs={}),b.attrs[f[1]]=f[2]||""}a=b;e.tag=a.tag;if(a.id||a.class||a.attrs){f=e.attrs||{};a.id&&null==f.id&&(f.id=a.id);a.class&&(e._class=a.class,f.class=a.class+(null!=f.class?" "+f.class:""));if(a.attrs)for(var k in a.attrs)null==f[k]&&(f[k]=a.attrs[k]);e.attrs=f}k=e.attrs;null!=k&&(null!=k._key&&(e.key=k._key),null!=k._ref&&(e.ref=k._ref),null!=k._hooks&&(e.hooks=k._hooks),null!=k._raw&&(e.raw=k._raw),null!=k._data&&(e.data=k._data),null!=k._flags&&(e.flags=k._flags),
null==e.key&&(null!=e.ref?e.key=e.ref:null!=k.id?e.key=k.id:null!=k.name&&(e.key=k.name+("radio"===k.type||"checkbox"===k.type?k.value:""))));null!=c&&(e.body=c);return e}function C(a,b,c,d){if(5!==a.type&&4!==a.type){a.parent=b;a.idx=c;a.vm=d;if(null!=a.ref){c=w(a);b=["refs"].concat(a.ref.split("."));for(var e;e=b.shift();)c[e]=0===b.length?a:c=c[e]||{}}b=a.hooks;d=d&&d.hooks;if(b&&(b.willRemove||b.didRemove)||d&&(d.willUnmount||d.didUnmount))for(d=a;d=d.parent;)d.flags|=1;if(l(a.body))for(d=a.body,
b=0;b<d.length;b++)c=d[b],!1===c||null==c?d.splice(b--,1):l(c)?(e=b--,d.splice.apply(d,[e,1].concat(c))):(null==c.type&&(d[b]=c=ia(""+c)),2===c.type?null==c.body||""===c.body?d.splice(b--,1):0<b&&2===d[b-1].type?(d[b-1].body+=c.body,d.splice(b--,1)):C(c,a,b,null):C(c,a,b,null));else x(a.body)&&(a.body=R(a.body,w(a)))}}function na(a,b){return isNaN(b)||Ia[a]?b:b+"px"}function p(a,b,c,d){var e=b.hooks[a];if(e)if("d"===a[0]&&"i"===a[1]&&"d"===a[2])d?(a=b.parent,a&&a.el&&a.el.offsetHeight):T.push([e,
b,c]);else return e(b,c)}function K(a){if(T.length)for(a=a.node,a&&a.el&&a.el.offsetHeight;a=T.shift();)a[0](a[1],a[2])}function oa(a){var b=a.hooks,c=a.vm;c=c&&c.hooks&&p("willUnmount",c,c.data);b=b&&p("willRemove",a);if(1===(a.flags&1)&&l(a.body))for(var d=0;d<a.body.length;d++)oa(a.body[d]);return c||b}function U(a,b,c){var d=b._node,e=d.hooks,f=d.vm;if(1===(d.flags&1)&&l(d.body))for(var g=0;g<d.body.length;g++)U(b,d.body[g].el);a.removeChild(b);e&&p("didRemove",d,null,c);f&&f.hooks&&p("didUnmount",
f,f.data,c)}function E(a,b){var c=b._node;if(!c._dead){var d=oa(c);null!=d&&"object"===typeof d&&P(d.then)?(c._dead=!0,d.then(Ga(U,[a,b,!0]))):U(a,b)}}function L(a){var b=a.el;if(0===(a.flags&1))b.textContent=null;else{var c=b.firstChild;do a=c.nextSibling,E(b,c);while(c=a)}}function m(a,b,c){var d=b._node,e=d.hooks,f=null!=b.parentNode,g=(b===c||!f)&&d.vm;g&&g.hooks&&p("willMount",g,g.data);e&&p(f?"willReinsert":"willInsert",d);a.insertBefore(b,c);e&&p(f?"didReinsert":"didInsert",d);g&&g.hooks&&
p("didMount",g,g.data)}function pa(a,b,c){var d;for(d=a.target;null==d._node;)d=d.parentNode;d=d._node;var e=w(d);b=b.apply(null,c.concat([a,d,e,e.data]));e.onevent(a,d,e,e.data,c);V.call(null,a,d,e,e.data,c);!1===b&&(a.preventDefault(),a.stopPropagation())}function qa(a,b){return function(c){pa(c,a,b)}}function Ja(a){return function(b){for(var c in a)if(b.target.matches(c)){var d=a[c],e=l(d),f=e?d[0]:d;d=e?d.slice(1):[];pa(b,f,d)}}}function ra(a,b,c,d){c!==d&&(a=a.el,c._raw?a[b]=c:l(c)?null!=d&&
Q(c,d)||(c=qa(c[0],c.slice(1)),a[b]=c):(c=P(c)?qa(c,[]):Ja(c),a[b]=c))}function sa(a,b,c,d){var e,f;null==c?q(b)?e=b:f=b:(e=b,f=c);return la(a,e,f,d)}function ta(a,b,c){c?a.el[b]="":"xlink:href"===b?a.el.removeAttributeNS("http://www.w3.org/1999/xlink","href"):a.el.removeAttribute(b)}function ua(a,b,c,d,e){var f=a.el;null==c?!e&&ta(a,b,!1):null!=a.ns?"xlink:href"===b?f.setAttributeNS("http://www.w3.org/1999/xlink","href",c):f.setAttribute(b,c):"class"===b?f.className=c:"id"===b||"boolean"===typeof c||
d?f[b]=c:"."===b[0]?f[b.substr(1)]=c:f.setAttribute(b,c)}function W(a,b,c){var d=a.attrs||A,e=b.attrs||A;if(d!==e){for(var f in d){var g=d[f],h=I(a.tag,f),k=h?a.el[f]:e[f];x(g)&&(d[f]=g=R(g,w(a)));if(g!==k)if("style"===f){h=g=void 0;k=a;var l=(k.attrs||A).style,p=b?(b.attrs||A).style:null;if(null==l||ca(l))k.el.style.cssText=l;else{for(h in l){var m=l[h];x(m)&&(m=R(m,w(k)));if(null==p||null!=m&&m!==p[h])k.el.style[h]=na(h,m)}if(p)for(g in p)null==l[g]&&(k.el.style[g]="")}}else"_"!==f[0]&&(H(f)?ra(a,
f,g,k):ua(a,f,g,h,c))}for(f in e)f in d||"_"===f[0]||ta(a,f,I(a.tag,f)||H(f))}}function F(a,b,c,d){4===a.type&&(b=a.data,c=a.key,d=a.opts,a=a.view);return new M(a,b,c,d)}function va(a){for(var b,c=0;c<a.body.length;c++){b=a.body[c];var d=b.type;3>=d?m(a.el,y(b)):4===d?(b=F(b.view,b.data,b.key,b.opts)._redraw(a,c,!1),m(a.el,y(b.node))):5===d&&(b=b.vm,b._redraw(a,c),m(a.el,b.node.el))}}function y(a,b){if(null==a.el)if(1===a.type){if(!b){b=a.tag;var c=a.ns;b=null!=c?N.createElementNS(c,b):N.createElement(b)}a.el=
b;null!=a.attrs&&W(a,A,!0);8===(a.flags&8)&&a.body.body(a);l(a.body)?va(a):null!=a.body&&""!==a.body&&(a.raw?a.el.innerHTML=a.body:a.el.textContent=a.body)}else 2===a.type?a.el=b||N.createTextNode(a.body):3===a.type&&(a.el=b||N.createComment(a.body));a.el._node=a;return a.el}function wa(a,b,c,d){c=c.previousSibling;d=d.nextSibling;a(c,d);return{lftSib:c?c.nextSibling:b.firstChild,rgtSib:d?d.previousSibling:b.lastChild}}function Ka(a,b,c,d,e){var f=e.idx===c.idx+1,g=f?!1:b._node===e,h=f?!0:d._node===
c;return g||h?wa(function(c,e){h&&m(a,d,b);g&&m(a,b,e)},a,b,d):null}function La(a,b,c,d){return wa(function(c,f){for(var e=b;e!==f;e=e.nextSibling){b=c=e;for(var h=e.nextSibling;h!==f;h=h.nextSibling)0<d(c,h)&&(c=h);c!==e&&(m(a,c,b),e=c)}},a,b,c)}function Ma(a,b){return a._node.idx-b._node.idx}function xa(a,b){var c=a.el,d=a.body,e=b.body;b=d[0];var f=d[d.length-1],g=(e[0]||A).el;e=(e[e.length-1]||A).el;var h;a:for(;;){for(;;){if(g){if(null==(h=g._node)){g=g.nextSibling;continue}if(h.parent!==a){var k=
g.nextSibling;null!=h.vm?h.vm.unmount(!0):E(c,g);g=k;continue}}if(null==b)break a;else if(null==b.el)m(c,y(b),g),b=d[b.idx+1];else if(b.el===g)b=d[b.idx+1],g=g.nextSibling;else break}for(;;){if(e){if(null==(h=e._node)){e=e.previousSibling;continue}if(h.parent!==a){k=e.previousSibling;null!=h.vm?h.vm.unmount(!0):E(c,e);e=k;continue}}if(f===b)break a;else if(null==f.el)k=y(f),m(c,k,e?e.nextSibling:null),f=d[f.idx-1];else if(f.el===e)f=d[f.idx-1],e=e.previousSibling;else break}(k=Ka(c,g,b,e,f))||(k=
La(c,g,e,Ma));g=k.lftSib;e=k.rgtSib}}function ya(a){return a.el._node.parent!==a.parent}function Na(a,b,c){return b[c]}function Oa(a,b,c){for(;c<b.length;c++){var d=b[c];if(null!=d.vm){if(4===a.type&&d.vm.view===a.view&&d.vm.key===a.key||5===a.type&&d.vm===a.vm)return d}else if(!ya(d)&&a.tag===d.tag&&a.type===d.type&&a.key===d.key&&(a.flags&-2)===(d.flags&-2))return d}return null}function Pa(a,b,c){for(;c<b.length;c++){var d=b[c];if(d.key===a.key)return d}return null}function O(a,b){b.hooks&&p("willRecycle",
b,a);var c=a.el=b.el,d=b.body,e=a.body;c._node=a;if(2===a.type&&e!==d)c.nodeValue=e;else{null==a.attrs&&null==b.attrs||W(a,b,!1);var f=l(d),g=l(e),h=8===(a.flags&8);if(f)if(g||h){c=a.body;d=c.length;e=b.body;f=e.length;g=8===(a.flags&8);var k=2===(a.flags&2);h=4===(a.flags&4);var m=!k&&1===a.type,t=!0;k=h?Pa:k||g?Na:Oa;if(m&&0===d)L(b),g&&(a.body=[]);else{var A=0,x=!1,B=0;if(g){var y={key:null};var z=Array(d)}for(var u=0;u<d;u++){if(g){var q=!1,v=null;if(t){h&&(y.key=c.key(u));var r=k(y,e,B)}if(null!=
r){var w=r.idx;v=c.diff(u,r);if(!0===v){var n=r;n.parent=a;n.idx=u}else q=!0}else q=!0;q&&(n=c.tpl(u),C(n,a,u),n._diff=null!=v?v:c.diff(u),null!=r&&O(n,r));z[u]=n}else if(n=c[u],q=n.type,3>=q){if(r=t&&k(n,e,B))O(n,r),w=r.idx}else 4===q?(r=t&&k(n,e,B))?(r.vm._update(n.data,a,u),w=r.idx):F(n.view,n.data,n.key,n.opts)._redraw(a,u,!1):5===q&&n.vm._update(n.data,a,u);if(null!=r&&(w===B?(B++,B===f&&d>f&&(r=null,t=!1)):x=!0,100<f&&x&&0===++A%10))for(;B<f&&ya(e[B]);)B++}g&&(a.body=z);m&&xa(a,b)}}else e!==
d&&(null!=e?a.raw?c.innerHTML=e:c.textContent=e:L(b));else g?(L(b),va(a)):e!==d&&(a.raw?c.innerHTML=e:b.raw?c.textContent=e:c.firstChild?c.firstChild.nodeValue=e:c.textContent=e);b.hooks&&p("didRecycle",b,a)}}function M(a,b,c,d){var e=this;e.view=a;e.data=b;e.key=c;x(b)&&(e._stream=ka(b,e));d&&(e.opts=d,e.config(d));a=q(a)?a:a.call(e,e,b,c,d);P(a)?e.render=a:(e.render=a.render,e.config(a));e._redrawAsync=fa(function(a){return e._redraw()});e._updateAsync=fa(function(a){return e._update(a)});e.init&&
e.init.call(e,e,e.data,e.key,d)}function za(a,b,c,d){null!=c&&(c.body[d]=b,b.idx=d,b.parent=c);return a}function X(a,b,c,d){this.view=a;this.data=b;this.key=c;this.opts=d}function Y(a){this.vm=a}function Aa(a,b){a=a.body;if(l(a))for(var c=0;c<a.length;c++){var d=a[c];null!=d.vm?b.push(d.vm):Aa(d,b)}return b}function Ba(a){var b=arguments,c=b.length;if(1<c){var d=1;if(q(b[1])){var e=b[1];d=2}d=c===d+1&&(ca(b[d])||l(b[d])||e&&8===(e._flags&8))?b[d]:da(b,d)}return la(a,e,d)}function Ca(a,b){a.el=b;b._node=
a;var c=a.attrs;for(f in c){var d=c[f],e=I(a.tag,f);"style"!==f&&"_"!==f[0]&&(H(f)?ra(a,f,d):null!=d&&e&&ua(a,f,d,e))}8===(a.flags&8)&&a.body.body(a);if(l(a.body)){b=b.firstChild;c=0;var f=a.body[c];do 4===f.type?f=F(f.view,f.data,f.key,f.opts)._redraw(a,c,!1).node:5===f.type&&(f=f.node||f._redraw(a,c,!1).node),Ca(f,b);while((b=b.nextSibling)&&(f=a.body[++c]))}}function G(a){a=null==a?"":""+a;for(var b=0,c="";b<a.length;b++)switch(a[b]){case "&":c+="&amp;";break;case "<":c+="&lt;";break;case ">":c+=
"&gt;";break;default:c+=a[b]}return c}function Da(a){a=null==a?"":""+a;for(var b=0,c="";b<a.length;b++)c+='"'===a[b]?"&quot;":a[b];return c}function Ea(a,b){for(var c="",d=0;d<a.length;d++)c+=Z(a[d],b);return c}function Z(a,b){switch(a.type){case 4:var c=F(a.view,a.data,a.key,a.opts).html(b);break;case 5:c=a.vm.html();break;case 1:if(null!=a.el&&null==a.tag){c=a.el.outerHTML;break}c="<"+a.tag;if(null!=a.attrs){for(var d in a.attrs)if(!(H(d)||"."===d[0]||"_"===d[0]||!1===b&&I(a.tag,d))){var e=a.attrs[d];
if("style"===d&&null!=e)if("object"===typeof e){var f=void 0;var g="";for(f in e)null!=e[f]&&(g+=f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()+": "+na(f,e[f])+"; ");f=g}else f=e;else!0===e?c+=" "+G(d)+'=""':!1!==e&&null!=e&&(c+=" "+G(d)+'="'+Da(e)+'"')}null!=f&&(c+=' style="'+Da(f.trim())+'"')}if(null==a.body&&null!=a.ns&&"svg"!==a.tag)return c+"/>";c+=">";Qa[a.tag]||(l(a.body)?c+=Ea(a.body,b):8===(a.flags&8)?(a.body.body(a),c+=Ea(a.body,b)):c+=a.raw?a.body:G(a.body),c+="</"+a.tag+">");break;
case 2:c=G(a.body);break;case 3:c="\x3c!--"+G(a.body)+"--\x3e"}return c}var t="undefined"!==typeof window,ha=(t?window:{}).requestAnimationFrame,A={},l=Array.isArray,Fa=v.prototype={constructor:v,type:null,vm:null,key:null,ref:null,data:null,hooks:null,raw:!1,ns:null,el:null,tag:null,attrs:null,body:null,flags:0,_class:null,_diff:null,_dead:!1,idx:null,parent:null},x=function(){return!1},ja=z,S=z,J=z,ma={},Ha=/\[(\w+)(?:=(\w+))?\]/g,Ia={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,
columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,order:!0,lineClamp:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T=[],N=t?document:null,aa={},V=z;t=M.prototype={constructor:M,_diff:null,
init:null,view:null,key:null,data:null,state:null,api:null,opts:null,node:null,hooks:null,onevent:z,refs:null,render:null,mount:function(a,b){b?(L({el:a,flags:0}),this._redraw(null,null,!1),a.nodeName.toLowerCase()!==this.node.tag?(y(this.node),m(a.parentNode,this.node.el,a),a.parentNode.removeChild(a)):m(a.parentNode,y(this.node,a),a)):(this._redraw(null,null),a&&m(a,this.node.el));a&&K(this);return this},unmount:function(a){x(this._stream)&&J(this._stream);var b=this.node;E(b.el.parentNode,b.el);
a||K(this)},config:function(a){a.init&&(this.init=a.init);a.diff&&(this.diff=a.diff);a.onevent&&(this.onevent=a.onevent);a.hooks&&(this.hooks=D(this.hooks||{},a.hooks));a.onemit&&(this.onemit=D(this.onemit||{},a.onemit))},parent:function(){return w(this.node.parent)},root:function(){for(var a=this.node;a.parent;)a=a.parent;return a.vm},redraw:function(a){a?this._redraw():this._redrawAsync();return this},update:function(a,b){b?this._update(a):this._updateAsync(a);return this},_update:function(a,b,
c,d){null!=a&&this.data!==a&&(this.hooks&&p("willUpdate",this,a),this.data=a,x(this._stream)&&J(this._stream),x(a)&&(this._stream=ka(a,this)));return this._redraw(b,c,d)},_redraw:function(a,b,c){var d=null==a,e=this.node&&this.node.el&&this.node.el.parentNode,f=this.node,g;if(null!=this.diff){var h=this._diff;this._diff=g=this.diff(this,this.data);if(null!=f){var k=l(h)?Q:ea;if(h===g||k(h,g))return za(this,f,a,b)}}e&&this.hooks&&p("willRedraw",this,this.data);h=this.render.call(this,this,this.data,
h,g);if(h===f)return za(this,f,a,b);this.refs=null;null!=this.key&&h.key!==this.key&&(h.key=this.key);this.node=h;a?(C(h,a,b,this),a.body[b]=h):f&&f.parent?(C(h,f.parent,f.idx,this),f.parent.body[f.idx]=h):C(h,null,null,this);!1!==c&&(f?f.tag!==h.tag||f.key!==h.key?(f.vm=h.vm=null,a=f.el.parentNode,b=f.el.nextSibling,E(a,f.el),m(a,y(h),b),f.el=h.el,h.vm=this):O(h,f):y(h));e&&this.hooks&&p("didRedraw",this,this.data);d&&e&&K(this);return this},_redrawAsync:null,_updateAsync:null};X.prototype={constructor:X,
type:4,view:null,data:null,key:null,opts:null};Y.prototype={constructor:Y,type:5,vm:null};var ba={config:function(a){V=a.onevent||V;a.onemit&&D(aa,a.onemit);a.stream&&(a=a.stream,x=a.is,ja=a.val,S=a.sub,J=a.unsub)},ViewModel:M,VNode:v,createView:F,defineElement:sa,defineSvgElement:function(a,b,c,d){a=sa(a,b,c,d);a.ns="http://www.w3.org/2000/svg";return a},defineText:ia,defineComment:function(a){var b=new v;b.type=3;b.body=a;return b},defineView:function(a,b,c,d){return new X(a,
b,c,d)},injectView:function(a){return new Y(a)},injectElement:function(a){var b=new v;b.type=1;b.el=b.key=a;return b},lazyList:function(a,b){var c=a.length,d={items:a,length:c,key:function(c){return b.key(a[c],c)},diff:function(c,d){c=b.diff(a[c],c);if(null==d)return c;d=d._diff;return(c===d||l(d)?Q(c,d):ea(c,d))||c},tpl:function(c){return b.tpl(a[c],c)},map:function(a){b.tpl=a;return d},body:function(a){for(var b=Array(c),e=0;e<c;e++){var h=d.tpl(e);h._diff=d.diff(e);b[e]=h;C(h,a,e)}a.body=b}};return d},
FIXED_BODY:2,DEEP_REMOVE:1,KEYED_LIST:4,LAZY_LIST:8};Fa.patch=function(a){a:{if(null!=a.type){if(null!=this.vm){var b=void 0;break a}C(a,this.parent,this.idx,null);this.parent.body[this.idx]=a;O(a,this);K(w(a))}else{b=Object.create(this);b.attrs=D({},this.attrs);a=D(this.attrs,a);if(null!=this._class){var c=a.class;a.class=null!=c&&""!==c?this._class+" "+c:this._class}W(this,b)}b=void 0}return b};t.emit=function(a){var b=this,c=b;c=da(arguments,1).concat(c,c.data);do{var d=b.onemit;if(d=d?d[a]:null){d.apply(b,
c);break}}while(b=b.parent());aa[a]&&aa[a].apply(b,c)};t.onemit=null;t.body=function(){return Aa(this.node,[])};ba.defineElementSpread=Ba;ba.defineSvgElementSpread=function(){var a=Ba.apply(null,arguments);a.ns="http://www.w3.org/2000/svg";return a};t._stream=null;var Qa={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};t.attach=function(a){null==this.node&&this._redraw(null,null,!1);Ca(this.node,a);return this};t.html=
function(a){null==this.node&&this._redraw(null,null,!1);return Z(this.node,a)};Fa.html=function(a){return Z(this,a)};return ba});

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

var domvm = require('domvm');
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
        for(var l = this.model.fields.length; l--;) {
            if (!this.model.fields[l].style) {
                continue;
            }
        }
        if (this.viewModel) {
            ret = this.viewModel.mount(...args);
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
},{"domvm":5}],9:[function(require,module,exports){
'use strict';

var domvm = require('domvm');
var config = require('../config');
var StyleSheet = require('../utils/StyleSheet');
var UIBase = require('../Base');
var el = domvm.defineElement;
var PREFIX_CSS = 'context-ui-close';
var NAME_THEME_OCEAN = 'ocean';

//const SVG_CROSS = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#292c34"></path></svg>`;

var style = new StyleSheet(`
    font-family: Maitree;
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
            this.viewModel.redraw(true);
        }
        else {
            this.model.prvt.container.modifier = '';
            this.viewModel.redraw(true);
        }
    }
    get onClick() {
        return this.model.events.onClick;
    }
    set onClick(func) {
        this.model.events.onClick = func;
    }
}

module.exports = Ctor;
},{"../Base":8,"../config":12,"../utils/StyleSheet":19,"domvm":5}],10:[function(require,module,exports){
'use strict';

var domvm = require('domvm');
var config = require('../config');
var StyleSheet = require('../utils/StyleSheet');
var UIBase = require('../Base');
var el = domvm.defineElement;
var PREFIX_CSS = 'context-ui-label';

var style = new StyleSheet(`
    font-family: Maitree;
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
},{"../Base":8,"../config":12,"../utils/StyleSheet":19,"domvm":5}],11:[function(require,module,exports){
'use strict';

var domvm = require('domvm');
var config = require('../config');
var StyleSheet = require('../utils/StyleSheet');
var ResizeSensor = require('resize-sensor');
var UIBase = require('../Base');
var UIClose = require('../Close');
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
    var offset = getCenterisedOffset(element);
    if (data.style.left != offset.left || data.style.top != offset.top) {
        data.style.left = offset.left;
        data.style.top = offset.top;
        vm.redraw(true);
    }
}

var view = {
    render: function(vm, data) {
        return el('div.' + style.id + 
            '.' + style.modifiers[data.theme].name + 
            (data.animateVisible?'.'+style.modifiers[MODIFIER_START_VISIBLE_ANIMATE].name:'') + 
            (data.hidden?'.' + style.modifiers[MODIFIER_HIDDEN].name:''), {
                'style': 'z-index: ' + data.style.zIndex + ';'
            }, 
            [
            el('div.border', {
                style: 'left: ' + data.style.left + '; top:' + data.style.top + ';',
                onkeydown: function(){
                    window.console.log(arguments);
                },
                _hooks: {
                    didInsert: function(view){
                        updatePosition(view.el, data, vm);
                        vm._resizeHandler = function(){
                            updatePosition(view.el, data, vm);
                        };
                        window.addEventListener('resize', vm._resizeHandler);
                        vm._resizeSensor = new ResizeSensor(view.el, vm._resizeHandler);
                    },
                    didRemove: function() {
                        window.removeEventListener('resize', vm._resizeHandler);
                        vm._resizeSensor.detach();
                    }
                }
            }, [
                el('div.inner', data.views), 
                (data.has.button?el('div.close-container',[
                    data.has.button
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
            hidden: false
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
        this.show();
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
}

module.exports = Ctor;
},{"../Base":8,"../Close":9,"../config":12,"../utils/StyleSheet":19,"domvm":5,"resize-sensor":6}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
'use strict';

var UIBase = require('../../Base');

class Ctor extends UIBase {
    constructor(...args) {
        super(...args);
        var me = this;

        me._name = null;
        
        if (args[0] && args[0].name) {
            me.name = args[0].name;
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}

module.exports = Ctor;
},{"../../Base":8}],14:[function(require,module,exports){
'use strict';

var domvm = require('domvm');
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

            transition-property: border, background-color;;
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
                cross: null,
                onClick () {
                    me.cross.active = !me.cross.active;
                    me.model.active = me.cross.active;
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
},{"../../Close":9,"../../config":12,"../../utils/StyleSheet":19,"../Base":13,"domvm":5}],15:[function(require,module,exports){
'use strict';

var domvm = require('domvm');
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
    render: function(vm, data) {
        return el('div.' + style.id + '.' + style.modifiers[data.theme].name +
            (data.prvt.inputted?'.'+style.modifiers[MODIFIER_HAS_INPUT].name:'') + 
            (data.prvt.focused?'.'+style.modifiers[MODIFIER_HAS_FOCUS].name:''), [
                el('div.inner', [
                    el('div.placeholder', data.label),
                    el('input.text', {
                        value: data.text,
                        onfocus: function(){
                            if (!data.prvt.focused) {
                                data.prvt.focused = true;
                                vm.redraw(true);
                            }
                        },
                        onblur: function() {
                            if (data.prvt.focused) {
                                data.prvt.focused = false;
                                vm.redraw(true);
                            }
                        },
                        _hooks: {
                            didInsert: function(node){
                                vm._xinput = new XInput();
                                vm._xinput.observe(node.el);
                                vm._xinput.oninput = function() {
                                    var inputted;
                                    data.text = node.el.value;
                                    if (node.el.value === '') {
                                        inputted = false;
                                    }
                                    else {
                                        inputted = true;
                                    }
                                    if (data.prvt.inputted !== inputted) {
                                        data.prvt.inputted = inputted;
                                        vm.redraw(true);
                                    }
                                };
                            },
                            didRemove: function() {
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
},{"../../config":12,"../../utils/StyleSheet":19,"../Base":13,"dom-xinput":4,"domvm":5}],16:[function(require,module,exports){
'use strict';

var config = require('../../config');
var StyleSheet = require('../../utils/StyleSheet');
var UIBase = require('../Base');
var UITextField = require('../Text');
var anime = require('animejs');
var domvm = require('domvm');
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
            color: {config.themes.ocean.prominent};
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
        this.model = Object.assign({}, {
            events: {
                onClick:null
            }
        }, this.model, {
            prvt: {
                textField: iv(new UITextField(...args).viewModel),
                mouseentered: false
            }
        });

        this.init(view, style);
    }
    get onClick() {
        return this.modal.events.onClick;
    }
    set onClick(v) {
        this.modal.events.onClick = v;
    }
}

module.exports = Ctor;
},{"../../config":12,"../../utils/StyleSheet":19,"../Base":13,"../Text":15,"animejs":2,"domvm":5}],17:[function(require,module,exports){
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
},{}],18:[function(require,module,exports){
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
},{"./Modifier":17}],19:[function(require,module,exports){
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
},{"./Modifiers":18,"./cssMounter":20,"./fontLoader":21,"blueimp-md5":3,"stylis":7}],20:[function(require,module,exports){
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
},{}],21:[function(require,module,exports){
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
},{"./cssMounter":20,"stylis":7}]},{},[1])(1)
});
//# sourceMappingURL=demo.js.map
