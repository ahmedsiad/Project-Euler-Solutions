let Ti = new Date().getTime() / 1000;

let chains = [];
let sumOfDivisors = [];

for (let i = 1; i < 1e6; i++) {
    sumOfDivisors[i] = sumOfProperDivisors(i);
}

for (let i = 2; i < 1e6; i++) {
    if (isInChain(i)) continue;
    let next = sumOfDivisors[i];
    let currentChain = {};
    currentChain[i] = true;
    chains.push(currentChain);

    while (true) {
        chains[chains.length - 1][next] = true;
        next = sumOfDivisors[next];
        
        if (next < i) {
            chains.pop();
            break;
        }
        if (chains[chains.length - 1][next] != undefined) {
            if (next == i) break;
            chains.pop();
            break;
        }
    }
}
chains.sort((a, b) => Object.keys(b).length - Object.keys(a).length);
console.log(Object.keys(chains[0])[0]);

function isInChain(x) {
    for (let i = 0; i < chains.length; i++) {
        if (chains[i][x] != undefined) return true;
    }
    return false;
}

function sumOfProperDivisors(x) {
    let divisors = [1];
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            divisors.push(i, x / i);
            if (i == x / i) divisors.pop();
        }
    }
    return divisors.reduce((x, y) => x + y);
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);