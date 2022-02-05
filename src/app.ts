type ValidSymbol = '$' | '#';

const symbol: ValidSymbol = '#';
var length: number = 7;

function generateRandomId(symbol: ValidSymbol, length?: number): string {
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
