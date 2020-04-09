let Ti = new Date().getTime() / 1000;

let count = 1;

for (let i = 3; count <= 10001; i += 2) {
    if (isPrime(i)) {
        count++;
        if (count == 10001) console.log(i);
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