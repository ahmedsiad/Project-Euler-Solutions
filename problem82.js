let Ti = new Date().getTime() / 1000;

let fs = require("fs");
let rawData = fs.readFileSync("p81matrix.txt", "utf8");

let lines = rawData.split("\n");

let matrix = [];
let lowestSum = Infinity;

for (let i = 0; i < lines.length; i++) {
    let lineData = lines[i].split(",");
    matrix[i] = [];
    for (let j = 0; j < lineData.length; j++) {
        matrix[i].push(parseInt(lineData[j]));
    }
}

for (let p = 2; p <= 80; p++) {
    minimax(p);
}

for (let q = 0; q < 80; q++) {
    if (matrix[q][0] < lowestSum) {
        lowestSum = matrix[q][0];
    }
}
console.log(lowestSum);

function minimax(depth) {
    let copy = [];

    for (let a = 0; a < 80; a++) {
        copy[a] = [];
        for (let b = 0; b < 80; b++) {
            copy[a][b] = matrix[a][b];
        }
    }

    for (let i = 0; i < 80; i++) {
        let num = matrix[i][80-depth];

        let first = -i;
        let last = -i + 79;

        let lowest = Infinity;
        for (let j = first; j <= last; j++) {
            let sum = 0;
            sum += num;

            for (let k = 1; k <= Math.abs(j); k++) {
                sum += matrix[i + j/Math.abs(j) * k][80 - depth];
            }
            sum += matrix[i + j][80 - depth + 1];

            if (sum < lowest) lowest = sum;
        }
        copy[i][80 - depth] = lowest;
    }

    for (let c = 0; c < 80; c++) {
        matrix[c][80 - depth] = copy[c][80 - depth];
    }
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);