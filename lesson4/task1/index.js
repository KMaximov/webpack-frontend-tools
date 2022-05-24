// import calcResult from "./calculator/index.js";
// import { sum, mult } from "./calculator/index.js";
// import { sum as calcSum} -- перейменувати назву під час імпорту іменних 
import calcExpression, { sum, mult } from "./calculator/index.js";
import fetchUser from "./profile/gateway.js";
import { printProfile } from "./profile/index.js";
import './polyfills/array-flat.js'; // це найчастіше використовується для поліфіла(виконує один файл в іншому файлі. коли потрібно на прототипи навісити
// якісь додаткові можливості - це працює добре
import './polyfills/array-flatMap.js';

const calcResult = calcExpression('1 + 2');
const sumResult = sum(1, 2);
const multResult = mult(1, 2);
const userDataPromise = fetchUser('facebook');
printProfile({ name: 'Tom', from: 'The World' });
