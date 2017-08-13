'use strict';

var domvm = require('domvm');
var iv = domvm.injectView;
var el = domvm.defineElement;

var StyleSheet = require('../utils/StyleSheet');
var UIClose = require('../Close');
var UIBase = require('../Base');

var PREFIX_CSS = 'context-ui-checkbox';
var NAME_THEME_OCEAN = 'ocean';
var SIZE = 15;

var style = new StyleSheet(`
    font-family: Maitree;
    font-size: 12px;
    line-height: 1.2em;

    > .inner 
    {
        margin: 14px auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        > .ui-cross-container
        {
            position: relative;
            width: ${SIZE}px;
            height: ${SIZE}px;
            border-radius: ${SIZE/2}px;

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
                border: 1px solid #FFF;
                background-color: transparent;
            }
        }
    }
`;

style.fonts.google.push('Maitree');

var view = {
    render: function(vm, model) {
        return el('div.' + style.id + '.' + style.modifiers[model.theme].name + 
                (model.active?'.active':''), [
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
                cross: null
            }
        });
        me.cross = new UIClose({
            theme: me.model.theme,
            hoverToActive: false,
            noCrossByDefault: true,
            size: SIZE
        });
        me.model.prvt.cross = iv(me.cross.viewModel);
        me.cross.onClick = function() {
            me.cross.active = !me.cross.active;
            me.model.active = me.cross.active;
            me.viewModel.redraw(true);
        };

        me.init(view, style);
    }
}

module.exports = Ctor;