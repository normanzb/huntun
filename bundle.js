var huntun = {
    ScrollBar: require('./src/ScrollBar'),
    Prompt: require('./src/Prompt'),
    Button: require('./src/Button'),
    Close: require('./src/Close'),
    Label: require('./src/Label'),
    fields: {
        CheckBox: require('./src/fields/CheckBox'),
        Text: require('./src/fields/Text'),
        TextButton: require('./src/fields/TextButton')
    }
};
if (typeof window) {
    window.huntun = huntun;
}
module.exports = huntun;