let Ti = new Date().getTime() / 1000;

let x = 1;
let y = 1;

for (let i = 0; i < 100; i++) {
    [x, y] = [3 * x + 2 * y - 2, 4 * x + 3 * y - 3];
    console.log(x, y);

    if (y > 1e12) break;
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);
