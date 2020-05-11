let Ti = new Date().getTime() / 1000;

let high = 0;

for (let a = 0; a < 100; a++) {
    for (let b = 1; b < 100; b++) {
        let val = getValue(pow(a, b));
        if (val > high) {
            high = val;
        }
    }
}
console.log(high);
function getValue(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function multiply(numArray, multi) {
    let carry = 0;
    for (let i = numArray.length - 1; i >= 0; i--) {
        numArray[i] = (multi * numArray[i]) + carry;
        carry = Math.floor(numArray[i] / 10);

        numArray[i] = numArray[i] % 10;
    }
    return numArray;
}

function pow(a, b) {
    let tens = Math.floor(a / 10);
    let units = a % 10;

    let arr = [];
    for (let i = 0; i < 198; i++) {
        arr.push(0);
    }
    arr[198] = tens;
    arr[199] = units;

    for (let j = 1; j < b; j++) {
        arr = multiply(arr, a);
    }
    return arr;
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);