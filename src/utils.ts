export type ValidSymbol = '$' | '#';
export interface GenerateConfig {
    symbol: ValidSymbol;
    length: number;
}

// function overload
// signature
export function generateRandomId(symbol: ValidSymbol, length: number): string;
export function generateRandomId(options: GenerateConfig): string;
// implementation
export function generateRandomId(
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
