'use strict';
const UIPrompt = require('./src/Prompt');
const UILabel = require('./src/Label');
const UIPathField = require('./src/PathField');
const UITextField = require('./src/TextField');
const UICheckBoxField = require('./src/CheckBoxField');

var prompt = new UIPrompt({
    fields: [
        new UILabel({
            text: 'Hit <enter> to create the link'
        }),
        new UIPathField({
            label: 'Link URL',
            events: {
                onClick: function() {
                    var me = this;
                    var CQ = window.CQ;

                    if (!CQ || !CQ.BrowseDialog) {
                        window.alert('Only availabe in CQ environment');
                        return;
                    }

                    var browseDialog = new CQ.BrowseDialog({
                        path:"/content",
                        title:"Websites",
                        ok: function(){
                            let path = this.getSelectedPath();
                            if (path[0] != '/') {
                                path = '/' + path;
                            }
                            me.model.text = path;
                            me.viewModel.redraw(true);
                            browseDialog.close();
                        }
                    });
                    var zseed = CQ.Ext.WindowMgr.zseed;
                    CQ.Ext.WindowMgr.zseed = 10000;
                    browseDialog.show();
                    CQ.Ext.WindowMgr.zseed = zseed;
                    prompt.clickToHide.exceptions.push(browseDialog.el.dom);
                }
            }
        }),
        new UITextField({
            label: 'Link Title'
        }),
        new UICheckBoxField({
            label: 'Open in new window?'
        })
    ]
});

prompt.mount(document.body);