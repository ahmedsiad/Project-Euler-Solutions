let Ti = new Date().getTime() / 1000;

let cube1 = [0, 8, 2];
let cube2 = [1, 4, 5];

let arrangements = [];

let counter = 0;

for (let a = 0; a < 10; a++) {
    for (let b = a + 1; b < 10; b++) {
        for (let c = b + 1; c < 10; c++) {
            for (let d = c + 1; d < 10; d++) {
                for (let e = d + 1; e < 10; e++) {
                    for (let f = e + 1; f < 10; f++) {


                        for (let g = 0; g < 10; g++) {
                            for (let h = g + 1; h < 10; h++) {
                                for (let i = h + 1; i < 10; i++) {
                                    for (let j = i + 1; j < 10; j++) {
                                        for (let k = j + 1; k < 10; k++) {
                                            Loop:
                                            for (let l = k + 1; l < 10; l++) {
                                                if (checkValid(a, b, c, d, e, f, g, h, i, j, k, l)) {
                                                    counter++;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(counter/2);

function checkEquals(dies1, dies2) {
    for (let i = 0; i < dies1[0].length; i++) {
        if (dies1[0][i] != dies2[0][i]) return false;
        if (dies1[1][i] != dies2[1][i]) return false;
    }
    return true;
}


function checkValid(a, b, c, d, e, f, g, h, i, j, k, l) {
    //if ([a, b, c, d, e, f].includes(6) == false && [a, b, c, d, e, f].includes(9) == false) return false;
    //if ([g, h, i, j, k, l].includes(6) == false && [g, h, i, j, k, l].includes(9) == false) return false;

    //if ([a, b, c, d, e, f, g, h, i, j, k, l].includes(3) == false) return false;

    let arr1 = [a, b, c, d, e, f].map(x => x == 9 ? 6 : x);
    let arr2 = [g, h, i, j, k, l].map(x => x == 9 ? 6 : x);

    if (!((arr1.includes(0) && arr2.includes(1)) || (arr1.includes(1) && arr2.includes(0)))) return false; //01
    if (!((arr1.includes(0) && arr2.includes(4)) || (arr1.includes(4) && arr2.includes(0)))) return false; //04
    if (!((arr1.includes(0) && arr2.includes(6)) || (arr1.includes(6) && arr2.includes(0)))) return false; //09
    if (!((arr1.includes(1) && arr2.includes(6)) || (arr1.includes(6) && arr2.includes(1)))) return false; //16
    if (!((arr1.includes(2) && arr2.includes(5)) || (arr1.includes(5) && arr2.includes(2)))) return false; //25
    if (!((arr1.includes(3) && arr2.includes(6)) || (arr1.includes(6) && arr2.includes(3)))) return false; //36
    if (!((arr1.includes(4) && arr2.includes(6)) || (arr1.includes(6) && arr2.includes(4)))) return false; //49
    if (!((arr1.includes(6) && arr2.includes(4)) || (arr1.includes(4) && arr2.includes(6)))) return false; //64
    if (!((arr1.includes(8) && arr2.includes(1)) || (arr1.includes(1) && arr2.includes(8)))) return false; //81



    return true;
}


let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);