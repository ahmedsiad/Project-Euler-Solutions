let Ti = new Date().getTime() / 1000;

let D = Infinity;

for (let a = 1; a < 1e4; a++) {
    for (let b = a + 1; b < 1e4; b++) {
        let pA = pentagonal(a);
        let pB = pentagonal(b);

        let sum = pA + pB;
        let difference = pB - pA;

        sum = pentagonalInverse(sum);
        difference = pentagonalInverse(difference);

        if (Math.floor(sum) == sum && Math.floor(difference) == difference) {
            if (pB - pA < D) {
                D = pB - pA;
                console.log(pA, pB);
                console.log(D);
                console.log(a, b);
            }
        }
    }
}


function pentagonal(x) {
    return x * (3 * x - 1) / 2;
}

function pentagonalInverse(x) {
    return (1 + Math.sqrt(1 + 24 * x))/6;
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);