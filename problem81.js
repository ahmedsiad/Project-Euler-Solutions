let Ti = new Date().getTime() / 1000;

let fs = require("fs");
let rawData = fs.readFileSync("p81matrix.txt", "utf8");

let lines = rawData.split("\n");

let matrix = [];

for (let i = 0; i < lines.length; i++) {
    let lineData = lines[i].split(",");
    matrix[i] = [];
    for (let j = 0; j < lineData.length; j++) {
        matrix[i].push(parseInt(lineData[j]));
    }
}

for (let k = 2; k <= 160; k++) {
    minimax(k);
}
console.log(matrix[0][0]);

function minimax(depth) {
    let firstIndex;
    let lastIndex;

    if (depth <= 80) {
        firstIndex = { i: 79, j: 80 - depth };
        lastIndex = { i: 80 - depth, j: 79 };
    }
    else {
        firstIndex = { i: 80 - depth + 79, j: 0 };
        lastIndex = { i: 0, j: 80 - depth + 79 };
    }

    while (firstIndex.i >= lastIndex.i && firstIndex.j <= lastIndex.j) {
        if (matrix[firstIndex.i + 1] == undefined) {
            matrix[firstIndex.i][firstIndex.j] += matrix[firstIndex.i][firstIndex.j + 1];
        }
        else if (matrix[firstIndex.i][firstIndex.j + 1] == undefined) {
            matrix[firstIndex.i][firstIndex.j] += matrix[firstIndex.i + 1][firstIndex.j];
        }
        else {
            matrix[firstIndex.i][firstIndex.j] += Math.min(matrix[firstIndex.i + 1][firstIndex.j], matrix[firstIndex.i][firstIndex.j + 1]);
        }

        firstIndex.i--;
        firstIndex.j++;
    }
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);