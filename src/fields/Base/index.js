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