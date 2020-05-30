let Ti = new Date().getTime() / 1000;

let total = 0;
let chains = [];

let loops = [[169, 363601, 1454], [871, 45361], [872, 45362]];

// Slower solution
/*Loop1:
for (let i = 3; i < 1e6; i++) {
    let chain = [i];
    let count = 1;
    let current = i;
    while (true) {
        current = digitFactorial(current);
        if (chain.includes(current)) {
            if (count >= 60) total++;
            continue Loop1;
        }
        chain.push(current);
        count++;
    }
}*/

for (let i = 3; i < 1e6; i++) {
    let currentChain = [i];
    let currentNum = i;
    let count = 1;

    while (true) {
        currentNum = digitFactorial(currentNum);
        if (currentChain.includes(currentNum)) {
            break;
        }
        if (chains[currentNum] != undefined) {
            count += chains[currentNum];
            break;
        }
        count++;
        currentChain.push(currentNum);
    }
    
    if (count == 60) total++;
    for (let j = 0; j < currentChain.length; j++) {
        chains[currentChain[j]] = count;
        count--;
    }
}

console.log(total);
function digitFactorial(x) {
    let str = x.toString();
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        let v = parseInt(str[i]);
        if (v == 0) {
            sum += 1;
            continue;
        }
        let res = 1;
        for (let j = v; j > 1; j--) {
            res *= j;
        }
        sum += res;
    }
    return sum;
}


let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);