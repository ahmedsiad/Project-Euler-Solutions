let Ti = new Date().getTime() / 1000;

let sum = 0;
for (let i = 0; i < 1e6; i++) {
    if (isPalindrome(i)) {
        let baseTwo = i.toString(2);
        if (isPalindrome(baseTwo)) sum += i;
    }
}
console.log(sum);

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