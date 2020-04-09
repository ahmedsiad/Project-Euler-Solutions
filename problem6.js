let Ti = new Date().getTime() / 1000;

let squareOfTheSum = Math.pow(5050, 2);
let sumOfSquares = 0;

for (let i = 1; i <= 100; i++) {
    sumOfSquares += i * i;
}

console.log(squareOfTheSum - sumOfSquares);

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);