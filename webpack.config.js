// webpack.config.js
var path = require('path');
var webpack = require('webpack');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
module.exports = {
    entry: {
        main:[
            'webpack/hot/only-dev-server',
            './src/index.ts'
        ]
    },
    devServer: {
        contentBase: 'src/www',
        hot: true,
        inline: true,
        port: 8080,
        host: 'localhost'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new TransferWebpackPlugin([
            {from: 'www'}
        ], path.resolve(__dirname, 'src')),
        /*new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
        })*/
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: true
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    devtool: 'source-map'
};
