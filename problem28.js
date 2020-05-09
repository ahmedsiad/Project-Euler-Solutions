let Ti = new Date().getTime() / 1000;

let sum = 1;

for (let i = 3; i <= 1001; i += 2) {
    sum += 4 * i * i - (6 * i) + 6;
}

console.log(sum);

let Tf = new Date().getTime() / 1000;
console.log("Time taken: " + (Tf - Ti));