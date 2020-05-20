let Ti = new Date().getTime() / 1000;
let count = 0;

for (let i = 2; i <= 1e4; i++) {
    if (Math.floor(Math.sqrt(i)) == Math.sqrt(i)) continue;
    let period = findPeriod(i);
    if (period.length % 2 == 0) count++;
}
console.log(count);

function findPeriod(root) {
    let period = [];
    let fractions = [];
    let a0 = Math.floor(Math.sqrt(root));

    period.push(a0);

    let current = { n: 1, d: a0 };
    while (true) {
        let d = Math.floor(current.n / (Math.sqrt(root) - current.d));

        let c = (root - current.d * current.d)/current.n;
        current.n = c;
        current.d = c * d - current.d;

        if (fractions.findIndex(f => f.n == current.n && f.d == current.d) != -1) return period;
        period.push(d);
        fractions.push({ n: current.n, d: current.d });
    }
}
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);
