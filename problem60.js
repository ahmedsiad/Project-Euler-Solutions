let Ti = new Date().getTime() / 1000;

let primes = [];
generatePrimes();

Loop1:
for (let a = 0; a < primes.length - 4; a++) {
    Loop2:
    for (let b = a + 1; b < primes.length - 3; b++) {
        Loop3:
        for (let c = b + 1; c < primes.length - 2; c++) {
            Loop4:
            for (let d = c + 1; d < primes.length - 1; d++) {
                Loop5:
                for (let e = d + 1; e < primes.length; e++) {
                    let currentPrimes = [primes[a], primes[b], primes[c], primes[d], primes[e]];

                    if (!concatenatePrimes(currentPrimes[0], currentPrimes[1])) continue Loop2;
                    if (!concatenatePrimes(currentPrimes[0], currentPrimes[2])) continue Loop3;
                    if (!concatenatePrimes(currentPrimes[0], currentPrimes[3])) continue Loop4;
                    if (!concatenatePrimes(currentPrimes[0], currentPrimes[4])) continue Loop5;

                    if (!concatenatePrimes(currentPrimes[1], currentPrimes[2])) continue Loop3;
                    if (!concatenatePrimes(currentPrimes[1], currentPrimes[3])) continue Loop4;
                    if (!concatenatePrimes(currentPrimes[1], currentPrimes[4])) continue Loop5;

                    if (!concatenatePrimes(currentPrimes[2], currentPrimes[3])) continue Loop4;
                    if (!concatenatePrimes(currentPrimes[2], currentPrimes[4])) continue Loop5;

                    if (!concatenatePrimes(currentPrimes[3], currentPrimes[4])) continue Loop5;

                    console.log(currentPrimes);
                    break Loop1;
                }
            }
        }
    }
}

function concatenatePrimes(p1, p2) {
    let str1 = p1.toString() + p2.toString();
    if (!isPrime(parseInt(str1))) return false;
    let str2 = p2.toString() + p1.toString();
    if (!isPrime(parseInt(str2))) return false;
    return true;
}
function generatePrimes() {
    for (let num = 13; num < 1e4; num += 2) {
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