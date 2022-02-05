import { generateRandomId } from './utils';

class App {
    id: string;
    constructor() {
        this.id = 'app';
    }
}

function main(ComponentClass: any) {
    const cmp = ComponentClass();
    let app = document.getElementById(cmp.id);
    setInterval(() => {
        if (app) {
            app.innerHTML = generateRandomId({symbol: '#', length: 7});
        }
    }, 1000);
}

main(App);
