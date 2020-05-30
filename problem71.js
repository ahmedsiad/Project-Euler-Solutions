let Ti = new Date().getTime() / 1000;

let primes = [2];
generatePrimes();

let fractions = [];

for (let n = 1; n < 4.3e5; n++) {
    let lowerBound = Math.floor(n * 7 / 3);
    let upperBound = Math.ceil(n * 7 / 3);
    if (upperBound > 1e6) continue;

    for (let d = upperBound; d > lowerBound; d--) {
        if (3 / 7 > n / d) {
            fractions.push({ n: n, d: d });
        }
    }
}
console.log(fractions[fractions.length - 1].n);

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