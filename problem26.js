let Ti = new Date().getTime() / 1000;

function getDecimalRepresentation(denominator, digits) {
    let decimal = "0.";
    let dividend = 10;
    let divisor = denominator;

    for (let i = 0; i < digits; i++) {
        let base = Math.floor(dividend/divisor);
        let remainder = dividend - divisor * base;
        
        decimal += base;
        dividend = remainder * 10;
    }
    return decimal;
}

console.log(getDecimalRepresentation(23, 200));
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);