let Ti = new Date().getTime() / 1000;

let primes = [2];
generatePrimes();
let triples = [];

let count = 0;
let cubes = [];


for (let n = 1; n < 80; n++) {
    for (let m = n + 1; m < 80; m++) {
        if (!relativelyPrime(m, n)) continue;
        if (m % 2 != 0 && n % 2 != 0) continue;
        let a = m * m - n * n;
        let b = 2 * m * n;
        let c = m * m + n * n;

        let triple = [a, b, c].sort((i, j) => i - j);
        if (triple[0] < 1e4 && triple[1] < 1e4) {
            let i = 2;
            triples.push(triple);
            while (i < 1000) {
                if (triple[0] * i < 1e4 && triple[1] * i < 1e4) {
                    triples.push([i * a, i * b, i * c].sort((i, j) => i - j));
                }
                i++;
            }
        }
    }
}

console.log(totalSolutions(2000));

function totalSolutions(limit) {
    let total = 0;
    for (let i = 1; i <= limit; i++) {
        total += findSolutions(i);
        if (total > 1e6) {
            console.log(i, total);
            break;
        }
    }
    return total;
}
function findSolutions(M) {
    let possibleSolutions = triples.filter(triple => M == triple[0] && triple[1] <= 2 * M);

    let total = 0;
    for (let i = 0; i < possibleSolutions.length; i++) {
        if (possibleSolutions[i][1] <= M) {
            total += Math.floor(possibleSolutions[i][0] / 2);
        }
        total += Math.floor(possibleSolutions[i][1] / 2);
        if (possibleSolutions[i][1] > M) {
            total -= possibleSolutions[i][1] - M - 1;
        }
    }

    let possibleSolutions2 = triples.filter(triple => M == triple[1]);
    for (let i = 0; i < possibleSolutions2.length; i++) {
        total += Math.floor(possibleSolutions2[i][0] / 2);
    }
    return total;
}

function shortestPath(a, b, c) {
    let shortest = Infinity;

    let s1 = root(a, b, c);
    if (s1 < shortest) shortest = s1;
    let s2 = root(a, c, b);
    if (s2 < shortest) shortest = s2;
    let s3 = root(b, a, c);
    if (s3 < shortest) shortest = s3;
    let s4 = root(b, c, a);
    if (s4 < shortest) shortest = s4;
    let s5 = root(c, a, b);
    if (s5 < shortest) shortest = s5;
    let s6 = root(c, b, a);
    if (s6 < shortest) shortest = s6;

    return shortest;
}
// DERIVATIVE SOLUTION, SLOW
function root(a, b, c) {
    let r1 = (a * c) / (a + b);
    let r2 = (a * c) / (a - b);

    let y1 = Math.sqrt(r1 * r1 + a * a) + Math.sqrt(b * b + Math.pow((c - r1), 2));
    let y2 = Math.sqrt(r2 * r2 + a * a) + Math.sqrt(b * b + Math.pow((c - r2), 2));

    if (r1 > 0) return y1;
    return y2;
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