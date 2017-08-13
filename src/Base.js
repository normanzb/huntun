'use strict';

var domvm = require('domvm');
var iv = domvm.injectView;

class Ctor {
    constructor(options) {
        this.model = Object.assign({}, {
            fields:[],
            views: []
        }, options);
        for(var l = this.model.fields.length; l--;) {
            this.model.views[l] = iv(this.model.fields[l].viewModel);
        }
        this.viewModel = null;
    }
    mount(...args) {
        var ret;
        for(var l = this.model.fields.length; l--;) {
            if (!this.model.fields[l].style) {
                continue;
            }
        }
        if (this.viewModel) {
            ret = this.viewModel.mount(...args);
        }
        return ret;
    }
    init(view, style) {
        var me = this;
        me.view = view;
        me.style = style;
        var wrapperView = Object.create(this.view);
        wrapperView.init = function() {
            me.style.mount();
        };
        this.viewModel = domvm.createView(wrapperView, this.model);
        this.viewModel.__container = this;
    }
}

module.exports = Ctor;