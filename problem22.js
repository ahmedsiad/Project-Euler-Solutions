let fs = require("fs");
let data = fs.readFileSync("names.txt", "utf8");


let rawNames = data.split(",");

for (let i = 0; i < rawNames.length; i++) {
    let str = rawNames[i];
    let newStr = str.substring(1, str.length - 1);
    rawNames[i] = newStr;
}

rawNames.sort();

function getNameScore(str, pos) {
    let score = 0;
    let lowerStr = str.toLowerCase();
    for (let i = 0; i < lowerStr.length; i++) {
        score += lowerStr.charCodeAt(i) - 96;
    }
    return score * pos;
}

let totalScore = 0;

for (let j = 0; j < rawNames.length; j++) {
    totalScore += getNameScore(rawNames[j], j + 1);
}
console.log(totalScore);