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
                    window.alert('clicked');
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