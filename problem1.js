let Ti = new Date().getTime() / 1000;

let sum = 0;

for (let i = 0; i < 1000; i+= 3) {
    sum += i;
}
for (let j = 0; j < 1000; j += 5) {
    if (j % 3 != 0) sum += j;
}
console.log(sum);
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);