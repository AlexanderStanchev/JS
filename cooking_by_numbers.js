function cookingByNumbers(arr) {
    let [number, op1, op2, op3, op4, op5] = [Number(arr[0]), arr[1], arr[2], arr[3], arr[4], arr[5]];
    let numberOfOperations = number;

    let chop = (num) => num / 2;
    let dice = (num) => Math.sqrt(num);
    let spice = (num) => num + 1;
    let bake = (num) => num * 3;
    let fillet = (num) => num * 0.8;

    for (let op of [op1, op2, op3, op4, op5]) {
        switch (op) {
            case 'chop': numberOfOperations = chop(numberOfOperations);
                console.log(numberOfOperations);
                break;
            case 'dice': numberOfOperations = dice(numberOfOperations);
                console.log(numberOfOperations);
                break;
            case 'spice': numberOfOperations = spice(numberOfOperations);
                console.log(numberOfOperations);
                break;
            case 'bake': numberOfOperations = bake(numberOfOperations);
                console.log(numberOfOperations);
                break;
            case 'fillet': numberOfOperations = fillet(numberOfOperations);
                console.log(numberOfOperations);
                break;
        }
    }
}
cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
