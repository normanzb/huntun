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