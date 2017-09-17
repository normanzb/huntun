'use strict';

var domvm = require('domvm/dist/nano/domvm.nano.js');
var ResizeSensor = require('resize-sensor');
var animationFrame = require('../utils/animationFrame');
var config = require('../config');
var StyleSheet = require('../utils/StyleSheet');
var UIBase = require('../Base');
var el = domvm.defineElement;
var PREFIX_CSS = 'context-ui-scrollbar';
var NAME_THEME_OCEAN = 'ocean';
var THICKNESS = '10';

var style = new StyleSheet(`
    font-family: ${config.fields.fontFamily};
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    height: 100%;

    > .inner
    {
        width: 2px;

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;

        transition: width .3s, background-color .3s;

        > .indicator,
        > .handle
        {
            position: absolute;
            left: 0; right: 0;

            height: 20px;
            width: 100%;

            border-radius: 0;
            transition: border-radius .3s;
        }

        > .handle
        {
            cursor: pointer;
            z-index: 2;
        }

        > .indicator
        {
            z-index: 1;
        }
    }

    &:hover
    {
        > .inner
        {
            width: 100%;
            > .handle
            {
                border-radius: 0px;
            }
        }
    }
`, {
    prefix: PREFIX_CSS
});

style.fonts.google.push(config.fields.fontFamily);

style.modifiers['on-top'] = `
    bottom: auto;
    height: ${THICKNESS}px;

    > .inner
    {
        bottom: auto;
        > .handle
        {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    }
`;

style.modifiers['on-bottom'] = `
    top: auto;
    height: ${THICKNESS}px;

    > .inner
    {
        top: auto;
        > .handle
        {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
`;

style.modifiers['on-left'] = `
    right: auto;
    width: ${THICKNESS}px;

    > .inner
    {
        right: auto;
        > .handle
        {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
    }
`;

style.modifiers['on-right'] = `
    left: auto;
    width: ${THICKNESS}px;

    > .inner
    {
        left: auto;
        > .handle
        {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
`;

style.modifiers[NAME_THEME_OCEAN] = `
    > .inner
    {
        background-color: rgba(0,0,0,0);
        > .handle 
        {
            background-color: ${config.themes.ocean.prominent};
        }

        > .indicator
        {
            background-color: rgba(0,0,0,.3);
        }
    }
    &:hover
    {
        > .inner
        {
            background-color: rgba(0,0,0,.03);
        }
    }
`;

var view = {
    render: function(vm, data) {
        var indicatorDisplay = data.enable.indicator?'block':'none';
        var indicatorPositionRuleName = data.directions.scrolling==='vertical'?'top':data.directions.text;
        return el(
            'div.' + style.id + 
            '.' + style.modifiers['on-' + data.directions.bar].name +
            '.' + style.modifiers[NAME_THEME_OCEAN].name, {
                _hooks: {
                    didInsert: function(view){
                        var parent = view.el.parentNode;
                        if (!parent) {
                            return;
                        }
                        parent.style.overflow = 'hidden';
                        var parentViewportSizeProp = data.directions.scrolling === 'vertical'?
                            'offsetHeight':'offsetWidth';
                        var parentPositionProp = data.directions.scrolling === 'vertical'?
                            'scrollTop':'scrollLeft';
                        var parentLengthProp = data.directions.scrolling === 'vertical'?
                            'scrollHeight':'scrollWidth';
                        var innerPositionProp = (data.directions.bar === 'left' || data.directions.bar === 'right')?'scrollTop':'scrollLeft';
                        function handleResize(){
                            if (data.handlers.resize) {
                                data.handlers.resize();
                            }
                            else {
                                data.length = parent[parentLengthProp] * 1;
                                data.viewport = parent[parentViewportSizeProp] * 1;
                                data.position = parent[parentPositionProp] * 1;
                            }
                            data.prvt.innerElementPosition = parent[innerPositionProp] * 1;
                            data.prvt.handle = data.viewport / data.length * parent[parentViewportSizeProp];
                            if (data.prvt.handle < 20) {
                                data.prvt.handle = 20;
                            }
                            data.prvt.position = data.position / (data.length - data.viewport) * (parent[parentViewportSizeProp] - data.prvt.handle);
                            data.directions.text = window.getComputedStyle(parent).direction === 'rtl'?'right':'left';
                            vm.redraw(true);
                        }

                        function handleFrameRequest(){
                            var maxScrollTop = parent.scrollHeight - parent.offsetHeight;
                            var maxScrollLeft = parent.scrollWidth - parent.offsetWidth;
                            if (data.prvt.scrollTop > maxScrollTop) {
                                data.prvt.scrollTop = maxScrollTop;
                            }
                            if (data.prvt.scrollTop < 0) {
                                data.prvt.scrollTop = 0;
                            }
                            if (data.prvt.scrollLeft > maxScrollLeft) {
                                data.prvt.scrollLeft = maxScrollLeft;
                            }
                            if (data.prvt.scrollLeft < 0) {
                                data.prvt.scrollLeft = 0;
                            }
                            parent.scrollTop += (data.prvt.scrollTop - parent.scrollTop) / 2;
                            parent.scrollLeft += (data.prvt.scrollLeft - parent.scrollLeft) / 2;
                            animationFrame.request(handleFrameRequest);
                        }

                        vm.__container.handleResize = handleResize;
                        vm._handleFrameRequest = handleFrameRequest;
                        vm._resizeSensor = new ResizeSensor(parent, handleResize);
                        parent.addEventListener('scroll', handleResize, {passive: false});
                        parent.addEventListener('mousewheel', data.handlers.mousewheel, {passive: false});
                        animationFrame.request(handleFrameRequest);
                        handleResize();
                    },
                    didRemove: function(view) {
                        var parent = view.el.parentNode;
                        if (!parent) {
                            return;
                        }
                        vm._resizeSensor.detach();
                        vm._resizeSensor = null;
                        parent.removeEventListener('scroll', vm.__container.handleResize);
                        parent.removeEventListener('mousewheel', data.handlers.mousewheel);
                        animationFrame.cancel(vm._handleFrameRequest);
                        vm.__container.handleResize = null;
                        vm._handleFrameRequest = null;
                    }
                },
                style: `
                    top: ${data.prvt.innerElementPosition}px;
                `
            }, [
                el('div.inner', [
                    el('div.handle', {
                        style: `
                            height: ${data.prvt.handle}px;
                            ${indicatorPositionRuleName}: ${data.prvt.position}px;
                        `
                    }),
                    el('div.indicator', {
                        style: `
                            display: ${indicatorDisplay};
                            height: ${data.prvt.handle}px;
                            ${indicatorPositionRuleName}: ${data.prvt.position}px;
                        `
                    })
                ])
            ]);
    }
};

class Ctor extends UIBase {
    constructor(...args) {
        super(...args);
        var me = this;
        me.model = Object.assign({}, {
            length: 0,
            position: 0,
            viewport: 0,
            enable: {
                indicator: true
            }
        }, me.model, {
            prvt: {
                handle: 0,
                scrollTop: 0,
                scrollLeft: 0
            }
        });
        me.model.handlers = Object.assign({
            mousewheel: function(evt) {
                var dy = evt.deltaY;
                me.model.prvt.scrollTop = me.model.prvt.scrollTop + dy * 3;
                evt.preventDefault();
            }
        }, me.model.handlers);
        me.model.directions = Object.assign({
            scrolling: 'vertical',
            bar: 'right',
            text: 'left'
        }, me.model.directions);

        me.init(view, style);
    }
}

module.exports = Ctor;