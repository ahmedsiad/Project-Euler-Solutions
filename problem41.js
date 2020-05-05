let Ti = new Date().getTime() / 1000;

let permutations = getPermutations("1234567");

for (let a = permutations.length - 1; a >= 0; a--) {
    let number = parseInt(permutations[a]);

    if (isPrime(number)) {
        console.log(number);
        break;
    }
}

function isPrime(number) {
    if (number % 2 == 0) return false;

    for (let j = 3; j <= Math.sqrt(number); j += 2) {
        if (number % j == 0) return false;
    }
    return true;
}

function getPermutations(string) {
    let results = [];

    if (string.length == 1) {
        results.push(string);
        return results;
    }

    for (let i = 0; i < string.length; i++) {
        let first = string[i];
        let rest = string.substring(0, i) + string.substring(i + 1);
        let inner = getPermutations(rest);

        for (let j = 0; j < inner.length; j++) {
            results.push(first + inner[j]);
        }
    }
    return results;
}
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);