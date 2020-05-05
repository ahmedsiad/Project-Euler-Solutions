let Ti = new Date().getTime() / 1000;

let triples = generatePythagoreanTriples();

let sums = {};
let most = 0;

for (let i = 0; i < triples.length; i++) {
    let sum = triples[i][0] + triples[i][1] + triples[i][2];
    if (sums[sum] == undefined) {
        sums[sum] = {};
    }
    if (sums[sum].count == undefined) {
        sums[sum].count = 0;
    }
    else {
        sums[sum].count++;
    }
}

for (let k in sums) {
    if (sums[k].count > most) {
        most = sums[k].count;
        console.log(k, most);
    }
}

function generatePythagoreanTriples() {
    let arr = [];

    for(let a = 3; a < 1000; a++) {
        for (let b = a; b < 1000; b++) {
            let c = Math.sqrt(a * a + b * b);
            if (Math.floor(c) == c) {
                arr.push([a, b, c]);
            }
        }
    }
    return arr;
}
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);