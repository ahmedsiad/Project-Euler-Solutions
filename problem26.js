let Ti = new Date().getTime() / 1000;

let highest = { d: 0, repeating: 0 };

Loop1:
for (let i = 2; i < 1000; i++) {
    let decimal = getDecimalRepresentation(i, 2500);

    let start = 1;
    if (i > 100) {
        start = 3;
    }
    for (let j = start; j < 1000; j++) {
        for (k = 0; k < decimal.length - j - j; k++) {
            let first = decimal.substr(k, j);
            let second = decimal.substr(k + j, j);

            if (first == second) {
                if (j > highest.repeating) {
                    highest.repeating = j;
                    highest.d = i;
                }
                continue Loop1;
            }
        }
    }
}

console.log(highest);
function getDecimalRepresentation(denominator, digits) {
    let decimal = "";
    let dividend = 10;
    let divisor = denominator;

    for (let i = 0; i < digits; i++) {
        let base = Math.floor(dividend / divisor);
        let remainder = dividend - divisor * base;

        decimal += base;
        dividend = remainder * 10;
    }

    if (denominator > 100) {
        return decimal.substr(1);
    }
    return decimal;
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);