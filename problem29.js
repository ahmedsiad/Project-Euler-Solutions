let Ti = new Date().getTime() / 1000;

class BigNumber {
    constructor(number) {
        this.exp = Math.floor(Math.log10(number));
        this.base = Math.floor((number / Math.pow(10, this.exp) * 1e6))/1e6;
    }

    equals(number) {
        let exp = Math.floor(Math.log10(number));
        let base = Math.floor((number / Math.pow(10, exp) * 1e6))/1e6;
        if (this.exp == exp && this.base == base) return true;
        return false;
    }
}
let distincPowers = [];

for (let a = 2; a <= 100; a++) {
    for (let b = 2; b <= 100; b++) {
        let power = Math.pow(a, b);
        let num = new BigNumber(power);
        if (!distincPowers.find((x) => x.equals(power))) distincPowers.push(num);
    }
}
console.log(distincPowers.length);
let Tf = new Date().getTime() / 1000;
console.log("Time taken: " + (Tf - Ti));
