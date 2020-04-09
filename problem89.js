let Ti = new Date().getTime() / 1000;

let fs = require("fs");
let rawData = fs.readFileSync("romanNumerals.txt", "utf8");

let data = rawData.split("\n");

let charsSaved = 0;

for (let i = 0; i < data.length; i++) {
    let previousLength = data[i].length;
    let num = romanToNumber(data[i]);
    let efficient = numberToRoman(num);
    charsSaved += previousLength - efficient.length;
}
console.log(charsSaved);
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);
function romanToNumber(str) {
    let roman = str.toUpperCase();
    let number = 0;

    for (let i = 0; i < roman.length; i++) {
        if (roman[i] == "M") {
            number += 1000;
            continue;
        }
        if (roman[i] == "D") {
            number += 500;
            continue;
        }
        if (roman[i] == "C") {
            if (roman[i + 1] == "M") {
                number -= 100;
                continue;
            }
            if (roman[i + 1] == "D") {
                number -= 100;
                continue;
            }
            number += 100;
            continue;
        }
        if (roman[i] == "L") {
            number += 50;
            continue;
        }
        if (roman[i] == "X") {
            if (roman[i + 1] == "C") {
                number -= 10;
                continue;
            }
            if (roman[i + 1] == "L") {
                number -= 10;
                continue;
            }
            number += 10;
            continue;
        }
        if (roman[i] == "V") {
            number += 5;
            continue;
        }
        if (roman[i] == "I") {
            if (roman[i + 1] == "X") {
                number -= 1;
                continue;
            }
            if (roman[i + 1] == "V") {
                number -= 1;
                continue;
            }
            number++;
            continue;
        }
    }

    return number;
}

function numberToRoman(number) {
    let roman = "";

    let thousands = Math.floor(number/1000) * 1000;
    let hundreds = (Math.floor(number/100) - thousands/100) * 100;
    let tens = (Math.floor(number/10) - thousands/10 - hundreds/10) * 10;
    let units = number - (tens + hundreds + thousands);
    
    
    //Thousands -----------------------------------
    if (thousands >= 4000) {
        roman += "MMMM";
    }
    else if (thousands >= 3000) {
        roman += "MMM";
    }
    else if (thousands >= 2000) {
        roman += "MM";
    }
    else if (thousands >= 1000) {
        roman += "M";
    }

    //Hundreds -----------------------------
    if (hundreds >= 900) {
        roman += "CM";
    }
    else if (hundreds >= 800) {
        roman += "DCCC";
    }
    else if (hundreds >= 700) {
        roman += "DCC";
    }
    else if (hundreds >= 600) {
        roman += "DC";
    }
    else if (hundreds >= 500) {
        roman += "D";
    }
    else if (hundreds >= 400) {
        roman += "CD";
    }
    else if (hundreds >= 300) {
        roman += "CCC";
    }
    else if (hundreds >= 200) {
        roman += "CC";
    }
    else if (hundreds >= 100) {
        roman += "C";
    }
 
    //Tens -----------------------------------------
    if (tens >= 90) {
        roman += "XC";
    }
    else if (tens >= 80) {
        roman += "LXXX";
    }
    else if (tens >= 70) {
        roman += "LXX";
    }
    else if (tens >= 60) {
        roman += "LX";
    }
    else if (tens >= 50) {
        roman += "L";
    }
    else if (tens >= 40) {
        roman += "XL";
    }
    else if (tens >= 30) {
        roman += "XXX";
    }
    else if (tens >= 20) {
        roman += "XX";
    }
    else if (tens >= 10) {
        roman += "X";
    }

    //Units ----------------------------
    if (units >= 9) {
        roman += "IX";
    }
    else if (units >= 8) {
        roman += "VIII";
    }
    else if (units >= 7) {
        roman += "VII";
    }
    else if (units >= 6) {
        roman += "VI";
    }
    else if (units >= 5) {
        roman += "V";
    }
    else if (units >= 4) {
        roman += "IV";
    }
    else if (units >= 3) {
        roman += "III";
    }
    else if (units >= 2) {
        roman += "II";
    }
    else if (units >= 1) {
        roman += "I";
    }

    return roman;
}




