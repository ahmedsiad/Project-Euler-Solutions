let Ti = new Date().getTime() / 1000;

let primes = [2];
generatePrimes();
let highest = { prime: 0, consecutive: 0 };

Loop1:
for (let i = 543; i < 548; i++) {
    for (let j = 0; j < primes.length - i; j++) {
        let sum = 0;
        for (let k = 0; k < i; k++) {
            sum += primes[j + k];
        }
        if (sum > 1e6) continue Loop1;
        if (primes.includes(sum)) {
            if (i > highest.consecutive) {
                highest.prime = sum;
                highest.consecutive = i;
                console.log(highest.prime, highest.consecutive);
            }
        }
    }
}

console.log(primes);

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