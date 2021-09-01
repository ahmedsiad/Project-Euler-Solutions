let Ti = new Date().getTime() / 1000;

let fs = require("fs");
let rawData = fs.readFileSync("words.txt", "utf8");

let allWords = rawData.split(",");
allWords.forEach((x, i, arr) => arr[i] = x.substring(1, x.length - 1));
allWords.sort((a, b) => b.length - a.length);

let pairs = [];

let max = 0;

for (let i = 0; i < allWords.length; i++) {
    for (let j = i + 1; j < allWords.length; j++) {
        if (allWords[i].length == allWords[j].length) {
            if (haveSameLetters(allWords[i], allWords[j])) pairs.push([allWords[i], allWords[j]]);
        }
    }
}

for (let i = 0; i < pairs.length; i++) {
    let a = pairs[i][0];
    let b = pairs[i][1];

    let lowerBound = Math.floor(Math.sqrt(10 ** (a.length - 1)));
    let upperBound = Math.floor(lowerBound * Math.sqrt(10));

    for (let j = lowerBound; j <= upperBound; j++) {
        let square = j * j;
        if (isSquareAnagramPair(square, a, b) && square > max) max = square; 
        if (isSquareAnagramPair(square, b, a) && square > max) max = square;
    }
}

console.log(max);

function isSquareAnagramPair(square, a, b) {
    let lettersMap = {};
    for (let i = 0; i < a.length; i++) {
        let char = a[i];
        let digit = square.toString()[i];
        lettersMap[char] = digit;
    }

    let duplicateCheckValues = Object.values(lettersMap);
    let duplicateSet = new Set(duplicateCheckValues);
    if (duplicateSet.size != duplicateCheckValues.length) return false;

    let numStr = "";
    for (let j = 0; j < b.length; j++) {
        let char = b[j];
        numStr += lettersMap[char];
        if (numStr == "0") return false;
    }
    
    let num = numStr.toString();
    if (Math.floor(Math.sqrt(num)) == Math.sqrt(num)) return true;
    return false;
}

function haveSameLetters(a, b) {
    let string = a;
    let string2 = b;

    let counts = {};
    let counts2 = {};

    for (let i = 0; i < string.length; i++) {
        if (counts[string[i]] == undefined) {
            counts[string[i]] = {};
            counts[string[i]].count = 0;
        }
        counts[string[i]].count++;

        if (counts2[string2[i]] == undefined) {
            counts2[string2[i]] = {};
            counts2[string2[i]].count = 0;
        }
        counts2[string2[i]].count++;
    }
    
    for (let key in counts) {
        if (counts2[key] == undefined) return false;

        if (counts2[key].count != counts[key].count) return false;
    }
    return true;
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);