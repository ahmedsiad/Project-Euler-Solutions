let Ti = new Date().getTime() / 1000;

class BigNumber {
    constructor(base, exponent) {
        this.base = base;
        this.exp = exponent;
    }

    add(num) {
        let difference = this.exp - num.exp;
        this.base += num.base / Math.pow(10, difference);

        if (this.base >= 10) {
            this.exp++;
            this.base = this.base / 10;
        }
    }

    multiply(scalar) {
        this.base *= scalar;

        if (this.base >= 10) {
            this.exp++;
            this.base = this.base / 10;
        }
    }
}

let count = 0;

for (let i = 0; i <= 1000; i++) {
    let result = getExpansion(i + 1);

    if (result[0].exp > result[1].exp) {
        count++;
    }
}

console.log(count);

function getExpansion(iterations) {
    let numerator = new BigNumber(1, 0);
    let denominator = new BigNumber(2, 0);

    for (let i = 1; i < iterations; i++) {
        let res = addFraction(2, numerator, denominator);
        numerator = res[1];
        denominator = res[0];
    }

    let final = addFraction(1, numerator, denominator);

    return final;

}

function addFraction(c, numerator, denominator) {
    let newNumerator = new BigNumber(denominator.base, denominator.exp);
    newNumerator.multiply(c);
    newNumerator.add(numerator);

    let newDenominator = new BigNumber(denominator.base, denominator.exp);

    return [newNumerator, newDenominator]; 
}



let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);