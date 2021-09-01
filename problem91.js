let Ti = new Date().getTime() / 1000;
let counter = 0;

for (let x1 = 0; x1 <= 50; x1++) {
    for (let y1 = 0; y1 <= 50; y1++) {
        if (x1 == 0 && y1 == 0) continue;
        for (let x2 = 0; x2 <= 50; x2++) {
            for (let y2 = 0; y2 <= 50; y2++) {
                if (x2 == 0 && y2 == 0) continue;
                if (x1 == x2 && y1 == y2) continue;

                let a = getDistance(x1, y1, 0, 0);
                let b = getDistance(x1, y1, x2, y2);
                let c = getDistance(x2, y2, 0, 0);

                if (isRightTriangle(a, b, c)) {
                    counter++;
                }
            }
        }
    }
}

console.log(counter/2);

function isRightTriangle(a, b, c) {
    if (is90Degrees(a, b, c)) return true;
    if (is90Degrees(a, c, b)) return true;
    if (is90Degrees(b, c, a)) return true;
    return false;
}

function is90Degrees(a, b, c) {
    return Math.abs(a * a + b * b - c * c) <= 0.01;
}

function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}


let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);