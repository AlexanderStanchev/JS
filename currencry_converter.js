function exchangeCurrency([arg1, arg2, arg3]) {
    let valuti = {
        USD: 1.79549,
        EUR: 1.95583,
        GBP: 2.53405,
        BGN: 1
    };
    let result = arg1 * valuti[arg2] / valuti[arg3];
    return `${result.toFixed(2)} ${arg3} `
}
console.log(exchangeCurrency([100,"USD", "BGN"]));
