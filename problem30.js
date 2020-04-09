let Ti = new Date().getTime() / 1000;

let fifthPowers = [];
let numString;
let sum;
let totalSum = 0;

for (let i = 10; i < 200000; i++) {
    sum = 0;
    numString = i.toString();
    for (let j = 0; j < numString.length; j++) {
        sum += parseInt(numString[j]);
    }
    sum = sum % 10;
    if (numString[numString.length - 1] == sum) {
        sum = 0;
        for (let j = 0; j < numString.length; j++) {
            sum += Math.pow(numString[j], 5);
        }
        if (sum == i) {
            fifthPowers.push(i);
            totalSum += i;
        }
    }
}

console.log(fifthPowers);
console.log(totalSum);
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);