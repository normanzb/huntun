'use strict';

var domvm = require('domvm/dist/nano/domvm.nano.js');
var config = require('../config');
var StyleSheet = require('../utils/StyleSheet');
var UIBase = require('../Base');
var el = domvm.defineElement;
var PREFIX_CSS = 'context-ui-close';
var NAME_THEME_OCEAN = 'ocean';

//const SVG_CROSS = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#292c34"></path></svg>`;

var style = new StyleSheet(`
    font-family: Maitree;
    position: relative;
    width: 40px;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;

    transition-property: color;
    transition-duration: .3s;

    cursor: pointer;

    &:before
    {
        content: ' ';
        display: block;
        border-radius: 50%;

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;

        transform: scale(.1);
        transition-property: transform,opacity;
        transition-duration: .3s;
        transition-delay: .05s;
        transition-timing-function: cubic-bezier(.52,.02,.19,1.02);

        z-index: 0;
    }

    > .inner
    {
        position: relative;
        z-index: 1
        > .text 
        {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            transform: rotate(0);

            transition-property: transform;
            transition-duration: .3s;
            transition-delay: .05s;
            transition-timing-function: cubic-bezier(.52,.02,.19,1.02);
        }
        > .text.no-cross
        {
            display: none;
        }
    }

    &.active
    {
        &:before
        {
            opacity: 1;
            transform: scale(1);
        }
        > .inner
        {
            > .text
            {
                transform: rotate(90deg);
            }
            > .text.no-cross
            {
                display inline-flex;
            }
        }
    }
`, {
    prefix: PREFIX_CSS
});

style.modifiers[NAME_THEME_OCEAN] = `
    background-color: ${config.themes.ocean.assisting};
    &:before
    {
        background-color: ${config.themes.ocean.prominent};
    }
    &.active
    {
        color: ${config.themes.ocean.assisting};
    }
`;

style.fonts.google.push('Maitree');

var view = {
    render: function(vm, model) {
        return el('div.' + style.id + '.' + style.modifiers[model.theme].name + 
                (
                    (model.prvt.container.modifier && model.prvt.container.modifier!=='')?
                    '.'+model.prvt.container.modifier:''
                ), {
                onclick: model.events.onClick,
                onmouseenter: model.prvt.mouseEnterHandler,
                onmouseleave: model.prvt.mouseLeaveHandler,
                style: model.size?(`
                    width: ${model.size}px;
                    height: ${model.size}px;
                    border-radius: ${(model.size / 2)}px;
                    font-size: ${(model.size / 2)}px;
                    line-height: ${(model.size / 2) + 1}px;
                    `
                ):''
            }, [
                el('div.inner', [
                    el('span.text' + 
                        (model.noCrossByDefault?'.no-cross':''), '✕')
                ])
            ]);
    }
};

class Ctor extends UIBase {
    constructor(...args) {
        super(...args);
        var me = this;
        me.model = Object.assign({}, {
            events: {
                onClick: ()=> void 0
            },
            theme: NAME_THEME_OCEAN,
            size: null,
            hoverToActive: true,
            noCrossByDefault: false
        }, me.model, {
            prvt: {
                container: {
                    modifier: ''
                },
                mouseEnterHandler: function () {
                    if (!me.model.hoverToActive) {
                        return;
                    }
                    me.active = true;
                },
                mouseLeaveHandler: function () {
                    if (!me.model.hoverToActive) {
                        return;
                    }
                    me.active = false;
                }
            }
        });

        me.init(view, style);
    }
    get active () {
        return this.model.prvt.container.modifier === 'active';
    }
    set active (value) {
        if (value) {
            this.model.prvt.container.modifier = 'active';
            this.viewModel.redraw(true);
        }
        else {
            this.model.prvt.container.modifier = '';
            this.viewModel.redraw(true);
        }
    }
    get onClick() {
        return this.model.events.onClick;
    }
    set onClick(func) {
        this.model.events.onClick = func;
        this.viewModel.redraw(true);
    }
}

module.exports = Ctor;