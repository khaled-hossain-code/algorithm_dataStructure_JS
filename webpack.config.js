module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 9000,
        contentBase: './build',
        inline: true
    }
}