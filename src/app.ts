import { generateRandomId } from './utils';

function main() {
    let app = document.getElementById('app');
    setInterval(() => {
        if (app) {
            app.innerHTML = generateRandomId({symbol: '#', length: 7});
        }
    }, 1000);
}
