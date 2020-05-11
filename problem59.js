let Ti = new Date().getTime() / 1000;

let fs = require("fs");
let data = fs.readFileSync("cipher.txt", "utf8");
let rawBytes = data.split(",");

let goodKey = "";
let decrypted = "";

for (let a = 0; a < 26; a++) {
    for (let b = 0; b < 26; b++) {
        for (let c = 0; c < 26; c++) {
            let key = String.fromCharCode(a + 97) + String.fromCharCode(b + 97) + String.fromCharCode(c + 97);
            if (decrypt(key)) {
                goodKey = key;
                console.log("They key is: " + goodKey);
            }
        }
    }
}


function decrypt(key, returnDecrypted = false) {
    let decrypted = "";
    let sum = 0;

    for (let i = 0; i < rawBytes.length; i += 3) {
        let firstByte = rawBytes[i];
        let secondByte = rawBytes[i + 1];
        let thirdByte = rawBytes[i + 2];

        let decryptedB1 = firstByte ^ key.charCodeAt(0);
        let decryptedB2 = secondByte ^ key.charCodeAt(1);
        let decryptedB3 = thirdByte ^ key.charCodeAt(2);

        if (!filterEnglish(decryptedB1)) return false;
        if (!filterEnglish(decryptedB2)) return false;
        if (!filterEnglish(decryptedB3)) return false;

        sum += decryptedB1 + decryptedB2 + decryptedB3;
        decrypted += String.fromCharCode(decryptedB1) + String.fromCharCode(decryptedB2) + String.fromCharCode(decryptedB3);
    }
    console.log("The message is: " + decrypted);
    console.log("The sum is: " + sum);

    if (returnDecrypted) return decrypted;
    return true;
}

function filterEnglish(code) {
    if (!(code >= 32 && code <= 122) || code == 35 || code == 36 || code == 42) return false;
    return true;
}
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);