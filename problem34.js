let Ti = new Date().getTime() / 1000;

function factorial(num) {
    let product = 1;
    for (let i = num; i > 1; i--) {
        product *= i;
    }
    return product;
}

let sum;
let numString;
let totalSum = 0;

for (let x = 3; x < 40586; x++) {
    sum = 0;
    numString = x.toString();
    for (let y = 0; y < numString.length; y++) {
        sum += factorial(numString[y]);
    }
    if (sum == x) {
        totalSum += x;
    }
}

console.log(totalSum);
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);
