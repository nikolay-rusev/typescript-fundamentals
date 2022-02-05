import { generateRandomId } from './utils';

type Element = HTMLElement | null;

class App {
    static id = 'app';
    onInit(el: Element): void {
        setInterval(() => {
            if (el) {
                el.innerHTML = generateRandomId({symbol: '#', length: 7});
            }
        }, 1000);
    }
}

function main(ComponentClass: any) {
    const el = document.getElementById(ComponentClass.id);
    const cmp = new ComponentClass();
    cmp.onInit(el);
}

main(App);
