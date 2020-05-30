let Ti = new Date().getTime() / 1000;

let primes = [2];
generatePrimes();

let ways = [];
let lowest = Infinity;

for (let i = 2; i < 100; i++) {
    if (!isPrime(i)) continue;
    ways[i] = [];

    for (let j = 0; j < 100; j++) {
        ways[i][j] = 0;
        if (j == 0) ways[i][j] = 1;
        else if (i == 2) ways[i][j] = (j % 2 == 0 ? 1 : 0);
        else if (i > j) ways[i][j] = ways[lastPrime(i)][j];
        else {
            ways[i][j] = ways[lastPrime(i)][j] + ways[i][j - i];
        }
        if (ways[i][j] > 5000 && i < j && j < lowest) lowest = j;
    }
}

console.log(lowest);
function generatePrimes() {
    for (let num = 3; num < 1e4; num += 2) {
        if (!isPrime(num)) continue;

        primes.push(num);
    }
}

function lastPrime(p) {
    let index = primes.findIndex(x => x == p);
    return primes[index - 1];
}

function isPrime(number) {
    if (number == 2) return true;
    if (number % 2 == 0) return false;

    for (let j = 3; j <= Math.sqrt(number); j += 2) {
        if (number % j == 0) return false;
    }
    return true;
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);