let Ti = new Date().getTime() / 1000;

let count = 0;

for (let i = 1; i <= 100; i++) {
    for (let j = 1; j < i; j++) {
        if (combinatoric(i, j) > 1e6) count++;
    }
}

console.log(count);
function combinatoric(n, r) {
    let result = factorial(n) / (factorial(r) * factorial(n - r));
    return result;
}

function factorial(x) {
    let result = 1;

    for (let i = x; i >= 1; i--) {
        result *= i;
    }
    return result;
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);