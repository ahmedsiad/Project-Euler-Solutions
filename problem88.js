let Ti = new Date().getTime() / 1000;

let values = {};

run();
let sum = 0;

values = Object.values(values).map(v => v);
values = new Set(values);
values = Array.from(values);
values.sort((a, b) => a - b);
console.log(values);

for (let key in values) {
    if (values[key] == undefined) continue;
    sum += values[key];
}
console.log(sum);

function run() {
    let iters = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2];
    while (iters[0] < 2) {
        let prod = iters.reduce((a, b) => a * b);
        let sum = iters.reduce((a, b) => (b != 1) ? a + b : 0);
        let k = prod - sum + iters.filter(x => x != 1).length;

        if ((prod < values[k] || values[k] == undefined) && k <= 12000) values[k] = prod;
        
        iters[iters.length - 1]++;
        if (prod >= 15000) { 
            update(iters, 15000);
        }
    }
}

function update(arr, lim) {
    for (let i = arr.length - 2; i >= 0; i--) {
        let prod = arr.reduce((a, b) => a * b);
        if (prod > lim) {
            arr[i] += 1;
            arr.fill(arr[i], i, arr.length);
        }
    }
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);