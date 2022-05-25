const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.js$/, //webpack коли зустрічає js файл бере його вміст та пропускає через babel-loader
                use: ['babel-loader'] //пропускає справа-наліво
            },
            {
                test: /.s?css$/, //webpack коли зустрічає css або scss файл бере його вміст та пропускає через scss-loader => css-loader та передає в стайл-лоадер
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] //пропускає справа-наліво
            },
            {
                test: /.(jpg|png)$/, 
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name].[ext]',
                            outputPath: 'images',
                        },
                    },
                ],

            }
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html', //підключити наш html
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css', // бере весь css який вище підключався та збирає в один файл та підключає
        }),
    ],
};