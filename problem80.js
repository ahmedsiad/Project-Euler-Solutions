let Ti = new Date().getTime() / 1000;
const BigNumber = require("bignumber.js");

let totalSum = 0;

for (let i = 2; i < 100; i++) {
    if (Math.floor(Math.sqrt(i)) == Math.sqrt(i)) continue;
    totalSum += sumOfDigits(squareRoot(i, 700).toString());
}
console.log(totalSum);

//Subtraction method by Frazer Jarvis
function squareRoot(x, digits) {
    let a = new BigNumber(x * 5);
    let b = new BigNumber(5);
    let count = 0;

    while (count < digits) {
        if (a.gte(b)) {
            a = a.minus(b);
            b = b.plus(10);
        }
        else {
            a = a.times(100);
            b = b.times(10).minus(45);
        }
        count++;
    }

    return b;
}

//Digit by Digit
function approximateSquareRoot(x, digits) {
    if (Math.floor(Math.sqrt(x)) == Math.sqrt(x)) return Math.sqrt(x);

    let integer = Math.floor(Math.sqrt(x));
    let remainder = new BigNumber(x - integer * integer);
    let count = 0;
    let current = new BigNumber(integer * 2);

    let decimal = new BigNumber(integer);

    while (count < digits) {
        remainder = remainder.times(100);
        let c = current.times(current).times(100).plus(remainder.times(4)).sqrt().plus(current.times(-10)).div(2).toNumber();
        c = Math.floor(c);

        decimal = decimal.times(10).plus(c);

        remainder = remainder.minus(current.times(10).plus(c).times(c));
        current = decimal.times(2);

        //console.log(current.toString());
        count++;
    }
    return decimal;
}

function sumOfDigits(arg) {
    let str = arg.replace(".", "");
    str = str.replace("e+", "");
    str = str.substr(0, 100);
    let sum = 0;
    
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    return sum;
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);