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