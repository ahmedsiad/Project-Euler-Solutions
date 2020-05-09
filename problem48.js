let Ti = new Date().getTime() / 1000;

let sum = 0;

for (let i = 1; i <= 1000; i++) {
    let a = 1;
    let current = i;
    let total = 1;
    while (a <= i) {
        total = (total * i) % 1e10;
        a++;
    }
    sum += total;
}
console.log(sum % 1e10);
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);