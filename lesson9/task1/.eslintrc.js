// npm i -D eslint-config-airbnb-base - базова конфігурація(в консоль) після потрібно встановити npm i -D eslint-plugin-import
// npm i -D eslint-config-airbnb-base-react - для реакта
module.exports = {
  // "env": {
  //     "browser": true,
  //     "es2021": true
  // },
  // "extends": "eslint:recommended", //автоматичний набір рекомендованих правил
  // "parserOptions": {
  //     "ecmaVersion": "latest",
  //     "sourceType": "module"
  // },
  extends: 'eslint-config-airbnb-base', // підключити базову конфігурацію
  rules: { // тут ми можемо вручну добавити правила
    'no-console': 2, // 'off' - 0, 'warn' - 1, 'error' - 2.
    // eqeqeq: 2 // == / === правило порівнювання
    "code": 120,
  },
  // parserOptions: { // вказуємо налаштування, щоб лінт розумів, що ми працюємо з ES6 - все є в eslint-config-airbnb-base
  //     ecmaVersion: 10, // тут можна вказувати або рік або числами - 10(вказує що 10 версія)
  //     sourceType: "module", // що ми працюємо з ES6 модулями
  // },
  env: { // вказуємо що працюємо в оточені браузера(щоб вручну не перераховувати всі глобальні змінні браузера)
    browser: true,
  },
  // globals: { //вказуємо лінту що це глобальні змінні які ми очікуємо отримувати
  //     document: true,
  //     alert: true,
  // }
};
