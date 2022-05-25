const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.s?css$/, //webpack коли зустрічає css або scss файл бере його вміст та пропускає через scss-loader => MiniCssExtractPlugin та передає в стайл-лоадер
                use: [
                    isProduction // якщо в продакшн моді то користуємся MiniCssExtractPlugin.loader та записуємо все в main.css
                    ? MiniCssExtractPlugin.loader
                    : 'style-loader',
                      'css-loader',
                      'sass-loader'
                ] //пропускає справа-наліво
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
        new HtmlWebpackPlugin({
            template: './src/index.html', //підключити наш html
        }),
    ],
    devServer: {
        port: 9000, //з якого порту запускати по дефолту 8080
        hot: true, //щоб без перезагрузки сторінки відбувались зміни
    }
    }
    if(isProduction) {
        config.plugins.push(new MiniCssExtractPlugin({
            filename: '[name].css',
        }));
    }
    return config;
};