let Ti = new Date().getTime() / 1000;

let most = { a: 0, b: 0, most: 0 };

for (let a = -1000; a < 1000; a++) {
    Loop2:
    for (let b = 0; b < 1000; b++) {
        let start = 0;
        let streak = 0;
        while (true) {
            let result = start * start + start * a + b;
            if (result < 2) continue Loop2;
            if (!isPrime(result)) {
                if (streak > most.most) {
                    most.a = a;
                    most.b = b;
                    most.most = streak;
                }
                continue Loop2;
            }
            
            streak++;
            start++;
        }
    }
}

console.log(most);
console.log("Product: " + most.a * most.b);

function isPrime(number) {
    if (number % 2 == 0) return false;

    for (let j = 3; j <= Math.sqrt(number); j += 2) {
        if (number % j == 0) return false;
    }
    return true;
}
let Tf = new Date().getTime() / 1000;
console.log("Time taken: " + (Tf - Ti));