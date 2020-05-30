let Ti = new Date().getTime() / 1000;

let primes = [2];
generatePrimes();

let fractions = [];

for (let n = 1; n < 6000; n++) {
    let lowerBound = n * 2 + 1;
    let upperBound = n * 3 - 1;
    if (upperBound > 1.2e4) upperBound = 1.2e4;

    for (let d = upperBound; d >= lowerBound; d--) {
        if (1 / 2 > n / d && 1 / 3 < n / d && relativelyPrime(n, d)) {
            fractions.push({ n: n, d: d });
        }
    }
}
console.log(fractions.length);

function totient(n) {
    let primeFactors = getPrimeFactors(n);
    let result = n;

    for (let i = 0; i < primeFactors.length; i++) {
        result *= 1 - 1 / primeFactors[i];
    }

    return result;
}

function relativelyPrime(a, b) {
    let primesA = getPrimeFactors(a);
    let primesB = getPrimeFactors(b);
    let total = primesA.concat(primesB);

    if (new Set(total).size != total.length) return false;
    return true;
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
    for (let num = 3; num < 1.2e4; num += 2) {
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