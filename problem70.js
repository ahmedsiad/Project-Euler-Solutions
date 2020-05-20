let Ti = new Date().getTime() / 1000;

let primes = [2];
generatePrimes();

let lowestR = Infinity;
/*for (let i = 3; i < 1e7; i += 2) {
    if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) continue;
    let res = totient(i);
    if (i / res < lowestR) {
        if (haveSameDigits(i, res)) {
            lowestR = i / res;
            console.log(i, res, lowestR);
        }
    }
}*/

for (let a = 0; primes[a] < 4000; a++) {
    for (let b = a; primes[b] < 4000; b++) {
        let total = primes[a] * primes[b];
        let res = totient(total);
        if (total / res < lowestR && total < 1e7) {
            if (haveSameDigits(total, res)) {
                lowestR = total / res;
                console.log(total, res, lowestR);
            }
        }
    }
}

function haveSameDigits(a, b) {
    let string = a.toString();
    let string2 = b.toString();
    if (string.length != string2.length) return false;

    let counts = {};
    let counts2 = {};

    for (let i = 0; i < string.length; i++) {
        if (counts[string[i]] == undefined) {
            counts[string[i]] = {};
            counts[string[i]].count = 0;
        }
        counts[string[i]].count++;

        if (counts2[string2[i]] == undefined) {
            counts2[string2[i]] = {};
            counts2[string2[i]].count = 0;
        }
        counts2[string2[i]].count++;
    }

    for (let key in counts) {
        if (counts2[key] == undefined) return false;

        if (counts2[key].count != counts[key].count) return false;
    }
    return true;
}

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
    let arr = [];

    for (let a = 0; a < 1e7; a++) {
        arr[a] = true;
    }

    for (let i = 2; i <= Math.sqrt(1e7); i++) {
        if (arr[i] != false) {
            for (let j = i * i; j < 1e7; j += i) {
                arr[j] = false;
            }
        }
    }

    for (let k = 2; k < arr.length; k++) {
        if (arr[k] == true) {
            primes.push(k);
        }
    }
    console.log(primes);
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