let Ti = new Date().getTime() / 1000;

let num = 600851475143;
let factors = [];

for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0 && isPrime(i)) factors.push(i);
}

function isPrime(number) {
    if (number % 2 == 0) return false;

    for (let j = 3; j < Math.sqrt(number); j += 2) {
        if (number % j == 0) return false;
    }
    return true;
}

console.log(factors[factors.length - 1]);
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);