let Ti = new Date().getTime() / 1000;

let largestPalindrome = 0;

for (let j = 100; j < 999; j++) {
    for (let k = 100; k < 999; k++) {
        if (isPalindrome(j * k) && j * k > largestPalindrome) {
            largestPalindrome = j * k;
        }
    }
}

function isPalindrome(number) {
    let string = number.toString();
    
    if (string.length % 2 == 0) {
        let chars = string.split("");
        for (let i = 0; i < string.length / 2; i++) {
            if (chars[i] != chars[chars.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    else {
        let chars = string.split("");
        for (let i = 0; i < string.length / 2 - 1; i++) {
            if (chars[i] != chars[chars.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}

console.log(largestPalindrome);
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);