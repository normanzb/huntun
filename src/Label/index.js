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