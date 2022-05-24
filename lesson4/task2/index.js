// const store = (function() {
//     let storage = {};
//     return {
//         addItem: function(key, value) {
//             Object.assign(storage, { [key]: value })
//         },
//         clear: function() {
//             storage = {};
//         }
//     };
// })();

// console.log(store);
// console.log(storage);

// Revealing Module Pattern; самовикликаюча функція(створили та відразу визвали)

// (function func() {
//     let a = 17;

//     console.log(a);
// })(); //відразу визвали ф-ю. Задача цієї конструкції - сховати внутрішні змінні.