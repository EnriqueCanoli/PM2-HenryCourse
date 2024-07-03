module.exports = {
    entry: {
        index: "./scripts/index.js",
        films: "./scripts/form-handle.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].bundle.js" // Use [name] placeholder to generate unique filenames
    }
};
