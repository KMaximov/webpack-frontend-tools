module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.s?css$/, //webpack коли зустрічає css або scss файл бере його вміст та пропускає через scss-loader => css-loader та передає в стайл-лоадер
                use: ['style-loader', 'css-loader', 'sass-loader'] //пропускає справа-наліво
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
    }
};