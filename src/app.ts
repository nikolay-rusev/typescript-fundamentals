type ValidSymbol = '$' | '#';

interface GenerateConfig {
    symbol: ValidSymbol;
    length: number;
}

function generateRandomId(optionsOrSymbol: GenerateConfig): string {
    return (
        optionsOrSymbol.symbol +
        Math.random().toString(36).substring(2, optionsOrSymbol.length)
    );
}

function main() {
    let app = document.getElementById('app');
    setInterval(() => {
        if (app) {
            app.innerHTML = generateRandomId({symbol: '#', length: 7});
        }
    }, 1000);
}
