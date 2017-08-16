'use strict';

var domvm = require('domvm/dist/nano/domvm.nano.js');
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