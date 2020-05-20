let Ti = new Date().getTime() / 1000;

let fs = require("fs");
let rawData = fs.readFileSync("triangle.txt", "utf8");

let lines = rawData.split("\n");
console.log(lines.length);
let pyramid = [];
for (let i = 0; i < lines.length; i++) {
    let arr = [];
    let numbers = lines[i].split(" ");
    for (let j = 0; j < numbers.length; j++) {
        arr.push(numbers[j]);
    }
    pyramid.push(arr);
}

for (let i = 98; i > -1; i--) {
    for (let j = 0; j < pyramid[i].length; j++) {
        pyramid[i][j] = parseInt(pyramid[i][j]);
        pyramid[i][j] += Math.max(parseInt(pyramid[i + 1][j + 0]), parseInt(pyramid[i + 1][j + 1]));
    }
    pyramid.splice(i + 1, 1);
}

console.log(pyramid[0]);

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);