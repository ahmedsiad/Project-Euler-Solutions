let Ti = new Date().getTime() / 1000;
let fs = require("fs");
let data = fs.readFileSync("words.txt", "utf8");


let rawWords = data.split(",");

let count = 0;
for (let i = 0; i < rawWords.length; i++) {
    let str = rawWords[i];
    let newStr = str.substring(1, str.length - 1);
    rawWords[i] = newStr;

    let val = getWordValue(newStr);
    if (isTriangle(val)) count++;
}
console.log(count);

function isTriangle(x) {
    let val = (-1 + Math.sqrt(1 + 8 * x))/2;

    if (Math.floor(val) == val) return true;
    return false;
}
function getWordValue(str) {
    let score = 0;
    let lowerStr = str.toLowerCase();
    for (let i = 0; i < lowerStr.length; i++) {
        score += lowerStr.charCodeAt(i) - 96;
    }
    return score;
}



let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);