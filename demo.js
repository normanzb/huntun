'use strict';
const UIPrompt = require('./src/Prompt');
const UILabel = require('./src/Label');
const UIPathField = require('./src/fields/TextButton');
const UITextField = require('./src/fields/Text');
const UICheckBoxField = require('./src/fields/CheckBox');

var prompt = new UIPrompt({
    fields: [
        new UILabel({
            text: 'Hit <enter> to create the link'
        }),
        new UIPathField({
            name: 'href',
            label: 'Link URL',
            events: {
                onClick: function() {
                    window.alert('clicked');
                }
            }
        }),
        new UITextField({
            name: 'title',
            label: 'Link Title'
        }),
        new UICheckBoxField({
            name: 'target',
            label: 'Open in new window?'
        })
    ]
});

prompt.mount(document.body);