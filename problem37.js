let Ti = new Date().getTime() / 1000;

let primes = [];
let truncatable = [];
let sum = 23;

for (let i = 11; i < 1e6; i += 2) {
    let str = i.toString();
    if (str.charAt(0) != "7" && str.charAt(0) != "3" && str.charAt(0) != "5") continue;
    if (str.charAt(str.length - 1) != "7" && str.charAt(str.length - 1) != "3" && str.charAt(str.length - 1) != "5") continue;

    if (isPrime(i)) primes.push(i);
}

for (let k = 0; k < primes.length; k++) {
    if (truncate(primes[k])) { 
        truncatable.push(primes[k]);    
        sum += primes[k];
    }
}
console.log(sum, truncatable);
function truncate(number) {
    let string = number.toString();

    for(let i = 1; i < string.length; i++) {
        let rest = string.substring(i);
        if (!isPrime(parseInt(rest))) return false;
    }

    for (let j = 0; j < string.length - 1; j++) {
        let rest = string.substring(0, string.length - 1 - j);
        if (!isPrime(parseInt(rest))) return false;
    }

    return true;
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