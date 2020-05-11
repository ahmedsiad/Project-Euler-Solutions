let Ti = new Date().getTime() / 1000;

let primes = [];
generatePrimes();

let lowest = { num: 1e7, arr: []};

for (let i = 0; i < primes.length; i++) {
    let digits = Math.floor(Math.log10(primes[i])) + 1;
    for (let n = 1; n < digits; n++) {
        if (n == 1) {
            for (let a = 0; a < n; a++) {
                let replacements = [a];
                let count = replaceDigits(primes[i], replacements);

                if (count >= 8) {
                    if (primes[i] < lowest.num) {
                        lowest.num = primes[i];
                        lowest.arr = [a];
                    }
                }
            }
        }
        if (n == 2) {
            for (let a = 0; a < digits - 1; a++) {
                for (let b = a + 1; b < digits; b++) {
                    let replacements = [a, b];
                    let count = replaceDigits(primes[i], replacements);

                    if (count >= 8) {
                        if (primes[i] < lowest.num) {
                            lowest.num = primes[i];
                            lowest.arr = [a, b];
                        }
                    }
                }
            }
        }
        if (n == 3) {
            for (let a = 0; a < digits - 2; a++) {
                for (let b = a + 1; b < digits - 1; b++) {
                    for (let c = b + 1; c < digits; c++) {
                        let replacements = [a, b, c];
                        let count = replaceDigits(primes[i], replacements);

                        if (count >= 8) {
                            if (primes[i] < lowest.num) {
                                lowest.num = primes[i];
                                lowest.arr = [a, b, c];
                            }
                        }
                    }
                }
            }
        }
        if (n == 4) {
            for (let a = 0; a < digits - 3; a++) {
                for (let b = a + 1; b < digits - 2; b++) {
                    for (let c = b + 1; c < digits - 1; c++) {
                        for (let d = c + 1; d < digits; d++) {
                            let replacements = [a, b, c, d];
                            let count = replaceDigits(primes[i], replacements);

                            if (count >= 8) {
                                if (primes[i] < lowest.num) {
                                    lowest.num = primes[i];
                                    lowest.arr = [a, b, c, d];
                                }
                            }
                        }
                    }
                }
            }
        }
        if (n == 5) {
            for (let a = 0; a < digits - 4; a++) {
                for (let b = a + 1; b < digits - 3; b++) {
                    for (let c = b + 1; c < digits - 2; c++) {
                        for (let d = c + 1; d < digits - 1; d++) {
                            for (let e = d + 1; e < digits; e++) {
                                let replacements = [a, b, c, d, e];
                                let count = replaceDigits(primes[i], replacements);

                                if (count >= 8) {
                                    if (primes[i] < lowest.num) {
                                        lowest.num = primes[i];
                                        lowest.arr = [a, b, c, d, e];
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

replaceDigits(lowest.num, lowest.arr, true);
function replaceDigits(number, indexArr, showFamily = false) {
    let str = number.toString();
    let currentStr = str.split("");
    let primeCount = 0;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < indexArr.length; j++) {
            currentStr[indexArr[j]] = i;
        }
        if (currentStr[0] == "0") continue;
        if (primes.includes(parseInt(currentStr.join("")))) {
            if (showFamily) console.log(currentStr.join(""));
            primeCount++;
        }
    }
    return primeCount;
}

function generatePrimes() {
    for (let num = 13; num < 1e6; num += 2) {
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