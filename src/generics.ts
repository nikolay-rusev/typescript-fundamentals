// generics and type parameters
function identity<T>(arg: T): T {
    return arg;
}

identity<string>('James');
