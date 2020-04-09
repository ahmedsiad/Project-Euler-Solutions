let Ti = new Date().getTime() / 1000;

let sum = 0;

for (let i = 3; i < 2000000; i += 2) {
    if (isPrime(i)) {
        sum += i;
    }
}

function isPrime(number) {
    if (number % 2 == 0) return false;

    for (let j = 3; j <= Math.sqrt(number); j += 2) {
        if (number % j == 0) return false;
    }
    return true;
}

console.log(sum);
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);