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
                onClick: null
            }
        }, me.model);

        me.init(view, style);
    }
    set onClick(v) {
        this.model.events.onClick = v;
    }
    get onClick() {
        return this.model.events.onClick;
    }
}

module.exports = Ctor;