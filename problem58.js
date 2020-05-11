let Ti = new Date().getTime() / 1000;

let primes = 0;
let total = 1;
let n = 1;
let ratio = 1;
while (ratio > 0.10) {
    n += 2;
    total = n * 2 - 1;

    let cor2 = (n - 1) * (n - 1) + 1;
    let cor3 = n * n - (n - 1);
    let cor4 = (n - 1) * (n - 1) + 1 - (n - 1);

    if (isPrime(cor2)) primes++;
    if (isPrime(cor3)) primes++;
    if (isPrime(cor4)) primes++;

    ratio = primes / total;
}

console.log(n);
function isPrime(number) {
    if (number % 2 == 0) return false;

    for (let j = 3; j <= Math.sqrt(number); j += 2) {
        if (number % j == 0) return false;
    }
    return true;
}


let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);