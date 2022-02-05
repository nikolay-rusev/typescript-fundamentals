"use strict";
const symbol = '#';
var length = 7;
function generateRandomId(symbol, length) {
    return symbol + Math.random().toString(36).substring(2, length);
}
// function userAlert() {
//     alert('Hello!');
// }
function main() {
    let app = document.getElementById('app');
    setInterval(() => {
        if (app) {
            app.innerHTML = generateRandomId('#', 7);
        }
    }, 1000);
}
