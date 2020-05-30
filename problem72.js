let Ti = new Date().getTime() / 1000;

let primes = [2];
generatePrimes();

let sum = 0;

for (let i = 2; i <= 1e6; i++) {
    sum += totient(i);
}
console.log(sum);


function totient(n) {
    let primeFactors = getPrimeFactors(n);
    let result = n;

    for (let i = 0; i < primeFactors.length; i++) {
        result *= 1 - 1 / primeFactors[i];
    }

    return result;
}

function getPrimeFactors(num) {
    if (isPrime(num)) return [num];

    let factors = [];
    let current = num;

    Loop1:
    while (current > 1) {
        Loop2:
        for (let i = 0; i < primes.length; i++) {
            if (current % primes[i] == 0) {
                if (factors.indexOf(primes[i]) == -1) factors.push(primes[i]);
                current = current / primes[i];
                continue Loop1;
            }
        }
    }

    return factors;
}


function generatePrimes() {
    for (let num = 3; num < 1e6; num += 2) {
        if (!isPrime(num)) continue;

        primes.push(num);
    }
}

function isPrime(number) {
    if (number % 2 == 0) return false;

    for (let j = 3; j <= Math.sqrt(number); j += 2) {
        if (number % j == 0) return false;
    }
    return true;
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);