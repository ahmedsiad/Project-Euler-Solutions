let Ti = new Date().getTime() / 1000;

let sum = 0;
let x = 2;
let y = 1;
while (true) {
    [x, y] = [2 * x + 3 * y, 2 * y + x];
    let c1 = (x + 2) / 3;
    let c2 = (x - 2) / 3;
    if (c1 * 6 > 1e9) break;
    if (Math.floor(c1) == c1) sum += c1 * 2 + 2 * (c1 * 2 - 1);
    if (Math.floor(c2) == c2) sum += c2 * 2 + 2 * (c2 * 2 + 1);
}
console.log(sum);


let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);