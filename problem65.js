let Ti = new Date().getTime() / 1000;

console.log("The sum of the digits in the 100th convergent of the continued fraction for e is: " + getValue(getExpansion(100)[0]));
function getExpansion(iterations) {
    let numerator = createBigNumber(1);
    let denominator;
    if (iterations % 3 != 0) {
        denominator = createBigNumber(1);
    }
    else {
        denominator = createBigNumber(iterations / 3 * 2);
    }

    for (let i = iterations - 1; i > 1; i--) {
        let adder = (i % 3 != 0 ? 1 : i / 3 * 2);
        let res = addFraction(adder, numerator, denominator);
        numerator = res[1];
        denominator = res[0];
    }

    let final = addFraction(2, numerator, denominator);

    return final;

}

function createBigNumber(num) {
    let arr = [];
    let str = num.toString();

    for (let i = 0; i < str.length; i++) {
        arr.push(parseInt(str[i]));
    }

    for (let j = arr.length; j < 60; j++) {
        arr.unshift(0);
    }
    return arr;
}

function addFraction(c, numerator, denominator) {
    let copyN = [...numerator];
    let copyD = [...denominator];
    let newNumerator = multiply(copyD, c);
    newNumerator = add(newNumerator, copyN);
    return [newNumerator, denominator]; 
}

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

function add(arr1, arr2) {
    let carry = 0;
    for (let i = arr2.length - 1; i >= 0; i--) {
        arr1[i] = (arr2[i] + arr1[i]) + carry;
        carry = Math.floor(arr1[i] / 10);

        arr1[i] = arr1[i] % 10;
    }
    return arr1;
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);
