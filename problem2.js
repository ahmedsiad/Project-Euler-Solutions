let Ti = new Date().getTime() / 1000;

let pastNum = 0;
let currentNum = 1;
let sum = 0;

for (let i = 0; currentNum < 4000000; i++) {
    let sumOfBoth = currentNum + pastNum;
    pastNum = currentNum;
    currentNum = sumOfBoth;
    if (sumOfBoth % 2 == 0) sum += sumOfBoth;
}

console.log(sum);

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);