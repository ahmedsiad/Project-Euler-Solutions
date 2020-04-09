let Ti = new Date().getTime() / 1000;

let fractions = [];

for (let a = 10; a < 100; a++) {
    for (let b = a; b < 100; b++) {
        if (a % 10 == 0 && b % 10 == 0) continue;
        let aString = a.toString();
        let bString = b.toString();
        let aSimplified;
        let bSimplified;

        if (aString[0] == bString[0]) {
            aSimplfiied = aString[1];
            bSimplified = bString[1];
        }
        else if (aString[1] == bString[0]) {
            aSimplified = aString[0];
            bSimplified = bString[1];
        }
        else if (aString[0] == bString[1]) {
            aSimplified = aString[1];
            bSimplified = bString[0];
        }
        else if (aString[1] == bString[1]) {
            aSimplified = aString[0];
            bSimplified = bString[0];
        }
        
        aSimplified = parseInt(aSimplified);
        bSimplified = parseInt(bSimplified);

        if (aSimplified / bSimplified == a / b) {
            console.log(a, b);
        }
    }
}

let Tf = new Date().getTime() / 1000;
console.log("Time taken: " + (Tf - Ti));