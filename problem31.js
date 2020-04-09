let Ti = new Date().getTime() / 1000;

let possibilites = 0;

for (let a = 0; a <= 200; a++) {
    for (let b = 0; b <= 100; b++) {
        for (let c = 0; c <= 40; c++) {
            for (let d = 0; d <= 20; d++) {
                for (let e = 0; e <= 10; e++) {
                    for (let f = 0; f <= 4; f++) {
                        for (let g = 0; g <= 2; g++) {
                            if (a + 2 * b + 5 * c + 10 * d + 20 * e + 50 * f + 100 * g == 200) possibilites++;
                        }
                    }
                }
            }
        }
    }
}

console.log(possibilites);
let Tf = new Date().getTime() / 1000;
console.log("Time taken: " + (Tf - Ti));