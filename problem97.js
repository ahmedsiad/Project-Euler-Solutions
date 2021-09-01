let Ti = new Date().getTime() / 1000;

let number = 28433;

for (let i = 0; i < 7830457; i++) {
    number *= 2;
    number %= 1e10;
}

console.log(number + 1);

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);