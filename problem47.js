let Ti = new Date().getTime() / 1000;

let nums = [];
let primes = [2];

generatePrimes();
for (let a = 0; a < 1e6; a++) {
    nums.push(getPrimeFactors(a));
}

for (let i = 13; i < 1e6; i++) {
    let allFactors = [];

    let arr1 = nums[i];
    let arr2 = nums[i + 1];
    let arr3 = nums[i + 2];
    let arr4 = nums[i + 3];
    if (arr1.length != 4 || arr2.length != 4 || arr3.length != 4 || arr4.length != 4) continue;

    allFactors.push(...arr1);
    allFactors.push(...arr2);
    allFactors.push(...arr3);
    allFactors.push(...arr4);

    if (new Set(allFactors).size != allFactors.length) continue;

    console.log(i, allFactors);
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
                let index = factors.indexOf(primes[i]);
                if (index != -1) {
                    factors[index] *= primes[i];
                }
                else {
                    factors.push(primes[i]);
                }
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