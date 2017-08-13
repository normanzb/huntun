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