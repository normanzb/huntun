'use strict';

var config = require('../../config');
var StyleSheet = require('../../utils/StyleSheet');
var UIBase = require('../Base');
var UITextField = require('../Text');
var anime = require('animejs');
var domvm = require('domvm/dist/nano/domvm.nano.js');
var el = domvm.defineElement;
var iv = domvm.injectView;
var svg = domvm.defineSvgElement;

var PREFIX_CSS = 'context-ui-fields-textbutton';

var style = new StyleSheet(`
    font-family: ${config.fields.fontFamily};
    display: flex;
    justify-content: stretch;
    align-items: center;
    margin: ${config.fields.marginBlock} auto;

    > .inner 
    {
        margin: -14px 10px;
    }
    > .inner.start
    {
        margin-left: 0;
        flex-grow: 1;
    }
    > .inner.end
    {
        margin-right: 0;
        flex-grow: 0;
        flex-shrink: 1;
        position: relative;
        width: 70px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        > svg
        {
            position: absolute;
            top: -2px; 
            left: -4px;
            right: 0;
            bottom: 0;
            width: 74px;
            height: 33px;
            z-index: 0;
            pointer-events: none;
        }
        > .select 
        {
            font-family: system-ui;
            font-size: 9px;
            text-align: center;
            position: relative;
            z-index: 1;

            transform: scale(1);
            pointer-events: none;
            transition-property: color;
            transition-duration: .5s;
            transition-delay: .3s;
        }
    }
    > .inner.end.is-hovered
    {
        > .select 
        {
            color: ${config.themes.ocean.prominent};
            transition-delay: 0s;
        }
    }
`, {
    prefix: PREFIX_CSS
});

style.fonts.google.push(config.fields.fontFamily);

var view = {
    render: function(vm, data) {
        return el(
                'div.' + style.id, [
                    el('div.inner.start', [
                        data.prvt.textField
                    ]),
                    el('div.inner.end' + (data.prvt.mouseentered?'.is-hovered':''), {
                        onmouseenter: function(evt){
                            if (evt.currentTarget !== evt.target) {
                                return;
                            }
                            if (data.prvt.mouseentered) {
                                return;
                            }
                            data.prvt.mouseentered = true;
                            if (vm._svgAnime) {
                                vm._svgAnime.restart();
                                vm._svgAnime.play();
                            }
                            if (vm._sltAnime) {
                                vm._sltAnime.restart();
                                vm._sltAnime.play();
                            }
                            vm.redraw(true);
                        },
                        onmouseleave: function(evt) {
                            if (evt.currentTarget !== evt.target) {
                                return;
                            }
                            if (!data.prvt.mouseentered) {
                                return;
                            }
                            data.prvt.mouseentered = false;
                            if (vm._svgAnime) {
                                vm._svgAnime.restart();
                                vm._svgAnime.play();
                                vm._svgAnime.reverse();
                            }
                            if (vm._sltAnime) {
                                vm._sltAnime.restart();
                                vm._sltAnime.play();
                                vm._sltAnime.reverse();
                            }
                            vm.redraw(true);
                        },
                        onclick: data.events.onClick?data.events.onClick.bind(vm.__container):null
                    }, [
                        svg('svg', {
                            viewBox: '0 0 74 33',
                            _raw: true,
                            _hooks: {
                                didInsert: function(node){
                                    var path = node.el.querySelector('path');
                                    var ani = anime({
                                        targets: path,
                                        d: 'M2,4 C22,-0 52,-0 72,4 C74,12 74,20 72,29 C52,33 22,33 2,29 C0,20 0,12 2,4 Z',
                                        stroke: config.themes.ocean.prominent,
                                        strokeWidth: 1,
                                        duration: 500,
                                        elasticity: 300,
                                        autoplay: false,
                                        easing: 'easeInOutBack'
                                    });
                                    vm._svgAnime = ani;
                                }
                            }
                        }, 
                        `
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path d="M2,4 C22,4 52,4 72,4 C72,12 72,20 72,29 C52,29 22,29 2,29 C2,20 2,12 2,4 Z" 
                                stroke="#EFEFEF" stroke-width="1" fill="#fff"></path>
                        </g>
                        `),
                        el('span.select', {
                            _hooks: {
                                didInsert: function(node){
                                    var ani = anime({
                                        targets: node.el,
                                        scale: 1.2,
                                        duration: 500,
                                        elasticity: 300,
                                        autoplay: false,
                                        easing: 'easeInOutBack'
                                    });
                                    vm._sltAnime = ani;
                                }
                            }
                        }, 'Select...')
                    ])
                ]
                );
    }
};

class Ctor extends UIBase {
    constructor(...args) {
        super(...args);
        var me = this;
        me._textField = new UITextField(...args);
        me.model = Object.assign({}, {
            events: {
                onClick:null
            }
        }, me.model, {
            prvt: {
                textField: iv(me._textField.viewModel),
                mouseentered: false
            }
        });

        me.init(view, style);
    }
    get onClick() {
        return this.modal.events.onClick;
    }
    set onClick(v) {
        this.modal.events.onClick = v;
        this.viewModel.redraw(true);
    }
    get name() {
        return this._textField.name;
    }
    get value() {
        return this._textField.value;
    }
    set value(value) {
        this._textField.model.text = value;
        me.viewModel.redraw(true);
        return this._textField.value = value;
    }
}

module.exports = Ctor;