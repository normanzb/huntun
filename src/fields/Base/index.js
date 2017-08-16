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