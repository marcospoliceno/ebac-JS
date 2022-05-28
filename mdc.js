function mdc(a, b) {
    while (b !== 0) {
        var r = a % b;
        a = b;
        b = r;
    }
    return a;
}