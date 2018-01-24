'use strict';
const UIPrompt = require('./src/Prompt');
const UILabel = require('./src/Label');
const UIPathField = require('./src/fields/TextButton');
const UITextField = require('./src/fields/Text');
const UICheckBoxField = require('./src/fields/CheckBox');
const UIButton = require('./src/Button');
const UIScrollBar = require('./src/ScrollBar');
const UIRoadBook = require('./src/RoadBook');

var paragraphs = document.body.querySelector('.paragraphs');
var paragraphsInner = document.body.querySelector('.paragraphs > .inner');
var scrollBar = new UIScrollBar({

});

// Put it into a div because chrome team managed by Sundar Pichai sucks!
// look at how long has this bug been there https://bugs.chromium.org/p/chromium/issues/detail?id=423935
scrollBar.mount(document.body.querySelector('.paragraphs'));

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
        }),
        new UIButton({
            text: 'Submit',
            events: {
                onClick: function() {
                    window.alert(JSON.stringify(prompt.value));
                }
            }
        })
    ]
});

prompt.mount(document.body);

var showButton = new UIButton({
    text: 'Submit',
    events: {
        onClick: function() {
            prompt.show();
        }
    }
})
showButton.mount(document.body.querySelector('.show'));

var roadBook = new UIRoadBook({

});
roadBook.mount(paragraphsInner);