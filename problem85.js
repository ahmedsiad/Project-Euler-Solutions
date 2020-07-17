let Ti = new Date().getTime() / 1000;

let limit = 100;
let closest = Infinity;

for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
        let result = countRectangles(i, j);
        if (Math.abs(2e6 - result) < closest) {
            closest = Math.abs(2e6 - result);
            console.log(closest, i, j);
        }
    }
}
console.log(closest);

function countRectangles(n, m) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            sum += (n - i + 1) * (m - j + 1);
        }
    }
    return sum;
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);