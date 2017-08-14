'use strict';

var domvm = require('domvm');
var config = require('../config');
var StyleSheet = require('../utils/StyleSheet');
var ResizeSensor = require('resize-sensor');
var UIBase = require('../Base');
var UIClose = require('../Close');
var el = domvm.defineElement;
var vi = domvm.injectView;

var PREFIX_CSS = 'context-ui-prompt';
var NAME_THEME_BRIGHT = 'bright';
var MODIFIER_START_VISIBLE_ANIMATE = 'animate-visible';
var MODIFIER_HIDDEN = 'is-hidden';

var style = new StyleSheet(`
    position: fixed;
    top: 0;
    left: 0;
    > .border
    {
        position: fixed;
        z-index: 1;

        box-sizing: border-box;
        background: #fff;
        box-shadow: 0 8px 46px rgba(0,0,0,.08), 0 2px 6px rgba(0,0,0,.03);
        max-width: 640px;
        border-radius: 2px;
        transform: scale(.9);
        opacity: 0;
        transition-property: transform,opacity;
        transition-duration: .3s;
        transition-delay: .05s;
        transition-timing-function: cubic-bezier(.52,.02,.19,1.02);

        > .inner
        {
            margin: 4ex;
        }

        > .close-container
        {
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%, -50%);
            border-radius: 50%;
        }
    }
    > .backdrop
    {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 0;
        transition-property: background-color;
        transition-duration: .3s;
        transition-delay: .05s;
    }
`, {
    prefix: PREFIX_CSS
});

style.fonts.google.push(config.fields.fontFamily);

style.modifiers[MODIFIER_START_VISIBLE_ANIMATE] = `
    > .border
    {
        transform: scale(1);
        opacity: 1;
    }
`;

style.modifiers[NAME_THEME_BRIGHT] = `
    > .border
    {
        
    }
    > .backdrop
    {
        background: rgba(255, 255, 255, 0);
    }
    &.${style.modifiers[MODIFIER_START_VISIBLE_ANIMATE].name}
    {
        > .backdrop
        {
            background: rgba(255, 255, 255, .8);
        }
    }
`;

style.modifiers[MODIFIER_HIDDEN] = `
    display: none;
`;

function updatePosition(element, data, vm) {
    var offset = getCenterisedOffset(element);
    if (data.style.left != offset.left || data.style.top != offset.top) {
        data.style.left = offset.left;
        data.style.top = offset.top;
        vm.redraw(true);
    }
}

var view = {
    render: function(vm, data) {
        return el('div.' + style.id + 
            '.' + style.modifiers[data.theme].name + 
            (data.animateVisible?'.'+style.modifiers[MODIFIER_START_VISIBLE_ANIMATE].name:'') + 
            (data.hidden?'.' + style.modifiers[MODIFIER_HIDDEN].name:''), {
                'style': 'z-index: ' + data.style.zIndex + ';'
            }, 
            [
            el('div.border', {
                style: 'left: ' + data.style.left + '; top:' + data.style.top + ';',
                onkeydown: function(){
                    window.console.log(arguments);
                },
                _hooks: {
                    didInsert: function(view){
                        updatePosition(view.el, data, vm);
                        vm._resizeHandler = function(){
                            updatePosition(view.el, data, vm);
                        };
                        window.addEventListener('resize', vm._resizeHandler);
                        vm._resizeSensor = new ResizeSensor(view.el, vm._resizeHandler);
                    },
                    didRemove: function() {
                        window.removeEventListener('resize', vm._resizeHandler);
                        vm._resizeSensor.detach();
                    }
                }
            }, [
                el('div.inner', data.views), 
                (data.has.button?el('div.close-container',[
                    data.has.button
                ]):null)
            ]),
            el('div.backdrop')
        ]);
    }
};

function getMaximumZIndex(base) {
    var all = document.body.querySelectorAll('*');
    var css, z;
    var max = base;
    for(var l = all.length; l--;) {
        css = window.getComputedStyle(all[l]);
        z = css.zIndex>>0;
        if (z > max) {
            max = z;
        }
    }
    return max;
}

function getCenterisedOffset(element) {
    let box = element.getBoundingClientRect();
    var ret = {
        top: 0,
        left: 0
    };
    ret.top = (window.innerHeight - box.height) / 2 + "px";
    ret.left = (window.innerWidth - box.width) / 2 + "px";
    return ret;
}

class Ctor extends UIBase {
    constructor(...args) {
        super(...args);
        var me = this;
        this.model = Object.assign({}, {
            theme: NAME_THEME_BRIGHT,
            has: {
                button: true
            }
        }, this.model, {
            style: {
                zIndex: 0,
                left: 0,
                top: 0
            },
            animateVisible: false,
            hidden: false
        });

        if (this.model.has.button) {
            this.uiClose = new UIClose();
            this.uiClose.onClick = function() {
                me.hide();
            };
            this.model.has.button = vi(this.uiClose.viewModel);
        }

        this.model.style.zIndex = getMaximumZIndex(this.model.style.zIndex) + 1;

        this.init(view, style);
        this.show();
    }
    show() {
        var me = this;
        me.model.hidden = false;
        setTimeout(function(){
            me.model.animateVisible=true;
            me.viewModel.redraw(true);
        }, 0);
        me.viewModel.redraw(true);
    }
    hide() {
        var me = this;
        me.model.animateVisible = false;
        setTimeout(function(){
            me.model.hidden = true;
            me.viewModel.redraw(true);
        }, 500);
        me.viewModel.redraw(true);
    }
}

module.exports = Ctor;