const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './'),
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/docs'),
        filename: 'index_bundle.js'
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            reducers: path.resolve(__dirname, './src/reducers')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
}
