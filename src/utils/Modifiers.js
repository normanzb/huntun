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