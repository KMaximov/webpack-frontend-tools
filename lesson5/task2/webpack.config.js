const path = require('path'); //влаштований в node.js модуль
module.exports = {
    entry: {
        profile: './src/profile/index.js', //якщо 2 точки входу записуємо в об"єкт
        dashboard: './src/dashboard/index.js',
    },
    output: {
        // fileName: 'script.js' // якщо одна точка входу то збере все в цей файл
        filename: '[name].js', //якщо 2 та більше точок входу то можна таким записом - файли будуть згенеровані з такими назвами як ключі точок входу
        path: path.join(__dirname, 'build') // в яку папку зберігати(dist по дефолту)
    },
    watch: true //налаштувати режим watch
}