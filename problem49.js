let Ti = new Date().getTime() / 1000;

let primes = [];

generatePrimes();

for (let i = 0; i < primes.length; i++) {
    for (let j = i; j < primes.length; j++) {
        if (j == i) continue;

        let perms = getPermutations(primes[i].toString());
        if (perms.includes(primes[j].toString())) {
            for (let k = j; k < primes.length; k++) {
                if (k == i || k == j) continue;

                if (perms.includes(primes[k].toString())) {
                    let temp = [primes[i], primes[j], primes[k]];
                    temp.sort((a, b) => a - b);

                    if (temp[2] - temp[1] == temp[1] - temp[0]) {
                        console.log(temp[0], temp[1], temp[2]);
                    }
                }
            }
        }
    }
}

function getPermutations(string) {
    let results = [];

    if (string.length == 1) {
        results.push(string);
        return results;
    }

    for (let i = 0; i < string.length; i++) {
        let first = string[i];
        let rest = string.substring(0, i) + string.substring(i + 1);
        let inner = getPermutations(rest);

        for (let j = 0; j < inner.length; j++) {
            results.push(first + inner[j]);
        }
    }
    return results;
}

function generatePrimes() {
    for (let num = 1001; num < 10000; num += 2) {
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