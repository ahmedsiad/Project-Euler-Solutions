let Ti = new Date().getTime() / 1000;

const BigNumber = require("bignumber.js");

let highest = 0;

for (let i = 2; i <= 1000; i++) {
    if (isSquare(i)) continue;

    let minimal = chakravalaMethod(i);
    if (minimal[0].gt(highest)) {
        highest = minimal[0];
        console.log(minimal[0].toString(), i);
    }
}

function chakravalaMethod(D) {
    let minimalInitialK = Infinity;
    let initialA = new BigNumber(0);
    let initialB = new BigNumber(0);

    for (let b = 1; b < 4; b++) {
        let lowestSquare = Math.ceil(Math.sqrt(b * b * D));
        let k = Math.abs(lowestSquare * lowestSquare - b * b * D)
        if (k < minimalInitialK) {
            initialA = new BigNumber(lowestSquare);
            initialB = new BigNumber(b);
            minimalInitialK = k;
        }
    }

    while (minimalInitialK != 1) {
        let linearS = minimalInitialK;
        let linearB = 0;
        let minimalM = 0;
        let minimalRes = Infinity;

        for (let t = 1; t < 100; t++) {
            let m = t;
            let res = Math.abs(m * m - D);

            if (res < minimalRes && (initialB.times(m).plus(initialA).mod(minimalInitialK).eq(0))) {
                minimalM = m;
                minimalRes = res;
            }
        }


        let temp = initialA;
        initialA = initialA.times(minimalM).plus(initialB.times(D)).div(Math.abs(minimalInitialK));
        initialB = initialB.times(minimalM).plus(temp).div(Math.abs(minimalInitialK));
        minimalInitialK = (minimalM * minimalM - D) / minimalInitialK;

        if (Math.floor(minimalInitialK) != minimalInitialK) break;

    }

    return [initialA, initialB];
}

function isSquare(x) {
    return Math.floor(Math.sqrt(x)) == Math.sqrt(x);
}

function findMinimalSolution(D) {
    let period = findPeriod(D);
    let count = 0;

    while (true) {
        let expansion = getExpansion(count, period);
        if (Math.abs((expansion[0] * expansion[0] - (D * expansion[1] * expansion[1])) - 1) < 1) return expansion[0];
        if (expansion[0] == 32188120829134850) console.log(expansion[0], expansion[1]);
        count++;
    }

}

function getExpansion(iterations, period) {
    let numerator = 1;
    let denominator = period[iterations % (period.length - 1) + 1];

    for (let i = iterations; i > 0; i--) {
        let index = (i - 1) % (period.length - 1);
        let res = addFraction(period[index + 1], numerator, denominator);
        numerator = res[1];
        denominator = res[0];
    }

    let final = addFraction(period[0], numerator, denominator);

    return final;

}

function addFraction(c, numerator, denominator) {
    let newNumerator = denominator;
    newNumerator *= c;
    newNumerator += numerator;

    return [newNumerator, denominator];
}


function findPeriod(root) {
    let period = [];
    let fractions = [];
    let a0 = Math.floor(Math.sqrt(root));

    period.push(a0);

    let current = { n: 1, d: a0 };
    while (true) {
        let d = Math.floor(current.n / (Math.sqrt(root) - current.d));

        let c = (root - current.d * current.d) / current.n;
        current.n = c;
        current.d = c * d - current.d;

        console.log(current.n);
        if (fractions.findIndex(f => f.n == current.n && f.d == current.d) != -1) return period;
        period.push(d);
        fractions.push({ n: current.n, d: current.d });
    }
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);