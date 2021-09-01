let Ti = new Date().getTime() / 1000;

let fs = require("fs");
let rawData = fs.readFileSync("p99base.txt", "utf8");

let lines = rawData.split("\n");

let max = 0;

for (let i = 0; i < lines.length; i++) {
    let nums = lines[i].split(",");
    let num1 = parseInt(nums[0]);
    let num2 = parseInt(nums[1]);

    let value = Math.log10(num1) * num2;
    if (value > max) {
        max = value;
        console.log(max.toFixed(3), i + 1);
    }
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);