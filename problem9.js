let Ti = new Date().getTime() / 1000;

for (let a = 1; a < 1000; a++) {
    for (let b = a; b < 1000; b++) {
        if (isPythagoreanTriplet(a, b)) {
            let c = Math.sqrt(a * a + b * b);
            if (a + b + c == 1000) {
                console.log(a * b * c);
            }
        }
    }
}

function isPythagoreanTriplet(a, b) {
    let c = Math.sqrt(a * a + b * b);
    if (Math.floor(c) == c) {
        return true;
    }
    return false;
}





let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);