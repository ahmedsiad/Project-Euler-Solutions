let Ti = new Date().getTime() / 1000;

Loop1:
for(let i = 9; i < 10000; i += 2) {
    if (isPrime(i)) continue;

    Loop2:
    for (let j = 1; j < Math.sqrt(i/2); j++) {
        let double = 2 * j * j;
        let difference = i - double;
        if (!isPrime(difference)) continue Loop2;
        else continue Loop1;
    }

    console.log(i);
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