function multiply(nom, limite) {
    if (typeof nom !== "number" || typeof limite !== "number" || nom < 0 || limite < 0) {
        return -1
    }
    let count = 0;
    for (let ind = 1; ind <= limite; ind++) {
        count += nom * ind
    }
    return count;
}

console.log(multiply(2,5));