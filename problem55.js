let Ti = new Date().getTime() / 1000;

let count = 0;

Loop1:
for (let i = 1; i < 10000; i++) {
    let iterations = 0;
    let current = i;

    while (iterations < 50) {
        let iR = parseInt(reverse(current.toString()));
        let sum = current + iR;

        if (isPalindrome(sum.toString())) {
            continue Loop1;
        }

        iterations++;
        current = sum;
    }

    count++;
}
console.log(count);
function reverse(string) {
    let str = "";

    for (let i = string.length - 1; i >= 0; i--) {
        str += string[i];
    }
    return str;
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


let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);