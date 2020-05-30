let Ti = new Date().getTime() / 1000;

let primes = [2];
generatePrimes();

let triples = [];
let sums = [];

//Euclids formula
for (let n = 1; n < 1e3; n++) {
    for (let m = n + 1; m < 1e3; m++) {
        if (!relativelyPrime(m, n)) continue;
        if (m % 2 != 0 && n % 2 != 0) continue;
        let a = m * m - n * n;
        let b = 2 * m * n;
        let c = m * m + n * n;

        let sum = a + b + c;
        while (sum <= 1.5e6) {
            if (sums[sum] == undefined) sums[sum] = 1;
            else {
                sums[sum] += 1;
            }
            sum = sum + a + b + c;
        }
        triples.push([a, b, c]);
    }
}
let count = 0;
for (let i = 0; i < sums.length; i++) {
    if (sums[i] == 1) count++;
}

console.log(count);
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
    for (let num = 3; num < 1e4; num += 2) {
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

function generatePythagoreanTriples() {
    let arr = [];

    for(let a = 3; a < 100000; a++) {
        for (let b = a; b < 100000; b++) {
            let c = Math.sqrt(a * a + b * b);
            if (Math.floor(c) == c) {
                arr.push([a, b, c]);
            }
        }
    }
    return arr;
}
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);