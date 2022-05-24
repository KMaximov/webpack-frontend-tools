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
        ],
    }
};