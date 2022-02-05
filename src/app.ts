type ValidSymbol = '$' | '#';

interface GenerateConfig {
    symbol: ValidSymbol;
    length: number;
}

// function overload
// signature
function generateRandomId(symbol: ValidSymbol, length: number): string;
function generateRandomId(options: GenerateConfig): string;
// implementation
function generateRandomId(
    optionsOrSymbol: GenerateConfig | ValidSymbol,
): string {
    if (typeof optionsOrSymbol === 'string') {
        // get second argument
        const length = arguments[1];
        return (
            optionsOrSymbol + Math.random().toString(36).substring(2, length)
        );
    }
    return (
        optionsOrSymbol.symbol +
        Math.random().toString(36).substring(2, optionsOrSymbol.length)
    );
}

console.log(generateRandomId('#', 7));

function main() {
    let app = document.getElementById('app');
    setInterval(() => {
        if (app) {
            app.innerHTML = generateRandomId({symbol: '#', length: 7});
        }
    }, 1000);
}
