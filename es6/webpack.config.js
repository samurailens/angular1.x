module.exports = {
    entry: "./app.js",
    devtool: 'source-map', //none, 
    output: {
            path: __dirname,
            filename: "./dist/bundle.js"
    },
    module: {
        loaders: [     

            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                        presets: [ 'es2015']
                }
            }
        ]
    }
};