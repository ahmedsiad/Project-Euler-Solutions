let Ti = new Date().getTime() / 1000;

let primes = [2];
generatePrimes();

let highest = 0;

for (let i = 2310; i < 1000000; i += 2310) {
    let totientN = totientOptimized(i);
    if (i / totientN > highest) {
        console.log(i);
        highest = i / totientN;
    }
}
console.log(highest);
function totient(n) {
    let primeFactors = getPrimeFactors(n);
    let oppositeTotient = 0;

    for (let i = 2; i < n; i++) {
        let divisibleBy = 0;
        primeFactors.forEach(p => {
            if (i % p == 0) divisibleBy++;
        });
        if (divisibleBy > 0) oppositeTotient++;
    }

    return n - oppositeTotient - 1;
}

function totientOptimized(n) {
    for (let i = Math.floor(Math.sqrt(n)); i > 1; i--) {
        if (n % i == 0 && relativelyPrime(i, n / i)) {
            return totient(n / i) * totient(i);
        }
    }
    return totient(n);
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
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);