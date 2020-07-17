let Ti = new Date().getTime() / 1000;

let primes = [];
let numbers = [];
let final = [];
generatePrimes(Math.sqrt(5e7));
console.log(primes.length);

Loop1: 
for (let i = 0; i < primes.length; i++) {
    Loop2: 
    for (let j = 0; j < primes.length; j++) {
        if (primes[j] > 368) continue Loop1;
        for (let k = 0; k < primes.length; k++) {
            if (primes[k] > 84) continue Loop2;


            let total = primes[i] * primes[i] + Math.pow(primes[j], 3) + Math.pow(primes[k], 4);
            if (total < 5e7) numbers.push(total);
        }
    }
}
console.log(numbers.length);
let unique = [...new Set(numbers)];
console.log(unique.length);

function generatePrimes(limit) {
    let arr = [];

    for (let a = 0; a < limit; a++) {
        arr[a] = true;
    }

    for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (arr[i] != false) {
            for (let j = i * i; j < limit; j += i) {
                arr[j] = false;
            }
        }
    }

    for (let k = 2; k < arr.length; k++) {
        if (arr[k] == true) {
            primes.push(k);
        }
    }
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);