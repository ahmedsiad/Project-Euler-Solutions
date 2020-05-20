let Ti = new Date().getTime() / 1000;

let triagonals = [];
let squares = [];
let pentagonals = [];
let hexagonals = [];
let heptagonals = [];
let octagonals = [];

generate();

for (let t = 0; t < triagonals.length; t++) {
    findCyclic(triagonals[t]);
}

function findCyclic(x) {
    let firstTwoDigits = x.toString().substr(2, 2);
    let firstOptions = [];

    squares.filter(a => a.toString().substr(0, 2) == firstTwoDigits).forEach(k => {
        firstOptions.push({ value: k, type: "SQUARE" });
    });
    pentagonals.filter(a => a.toString().substr(0, 2) == firstTwoDigits).forEach(k => {
        firstOptions.push({ value: k, type: "PENTAGONAL" });
    });
    hexagonals.filter(a => a.toString().substr(0, 2) == firstTwoDigits).forEach(k => {
        firstOptions.push({ value: k, type: "HEXAGONAL" });
    });
    heptagonals.filter(a => a.toString().substr(0, 2) == firstTwoDigits).forEach(k => {
        firstOptions.push({ value: k, type: "HEPTAGONAL" });
    });
    octagonals.filter(a => a.toString().substr(0, 2) == firstTwoDigits).forEach(k => {
        firstOptions.push({ value: k, type: "OCTAGONAL" });
    });

    for (let i = 0; i < firstOptions.length; i++) {
        let countsI = { s: 0, p: 0, h: 0, hp: 0, o: 0 };
        let numI = firstOptions[i].value;
        let lastDigitsI = numI.toString().substr(2, 2);
        let optionsI = [];

        modifyObject(countsI, firstOptions[i].type);

        squares.filter(a => a.toString().substr(0, 2) == lastDigitsI && countsI.s == 0).forEach(k => {
            optionsI.push({ value: k, type: "SQUARE" });
        });
        pentagonals.filter(a => a.toString().substr(0, 2) == lastDigitsI && countsI.p == 0).forEach(k => {
            optionsI.push({ value: k, type: "PENTAGONAL" });
        });
        hexagonals.filter(a => a.toString().substr(0, 2) == lastDigitsI && countsI.h == 0).forEach(k => {
            optionsI.push({ value: k, type: "HEXAGONAL" });
        });
        heptagonals.filter(a => a.toString().substr(0, 2) == lastDigitsI && countsI.hp == 0).forEach(k => {
            optionsI.push({ value: k, type: "HEPTAGONAL" });
        });
        octagonals.filter(a => a.toString().substr(0, 2) == lastDigitsI && countsI.o == 0).forEach(k => {
            optionsI.push({ value: k, type: "OCTAGONAL" });
        });

        for (let j = 0; j < optionsI.length; j++) {
            let countsJ = Object.assign({}, countsI);
            let numJ = optionsI[j].value;
            let lastDigitsJ = numJ.toString().substr(2, 2);
            let optionsJ = [];

            modifyObject(countsJ, optionsI[j].type);


            squares.filter(a => a.toString().substr(0, 2) == lastDigitsJ && countsJ.s == 0).forEach(k => {
                optionsJ.push({ value: k, type: "SQUARE" });
            });
            pentagonals.filter(a => a.toString().substr(0, 2) == lastDigitsJ && countsJ.p == 0).forEach(k => {
                optionsJ.push({ value: k, type: "PENTAGONAL" });
            });
            hexagonals.filter(a => a.toString().substr(0, 2) == lastDigitsJ && countsJ.h == 0).forEach(k => {
                optionsJ.push({ value: k, type: "HEXAGONAL" });
            });
            heptagonals.filter(a => a.toString().substr(0, 2) == lastDigitsJ && countsJ.hp == 0).forEach(k => {
                optionsJ.push({ value: k, type: "HEPTAGONAL" });
            });
            octagonals.filter(a => a.toString().substr(0, 2) == lastDigitsJ && countsJ.o == 0).forEach(k => {
                optionsJ.push({ value: k, type: "OCTAGONAL" });
            });

            for (let l = 0; l < optionsJ.length; l++) {
                let countsL = Object.assign({}, countsJ);
                let numL = optionsJ[l].value;
                let lastDigitsL = numL.toString().substr(2, 2);
                let optionsL = [];
    
                modifyObject(countsL, optionsJ[l].type);
    
    
                squares.filter(a => a.toString().substr(0, 2) == lastDigitsL && countsL.s == 0).forEach(k => {
                    optionsL.push({ value: k, type: "SQUARE" });
                });
                pentagonals.filter(a => a.toString().substr(0, 2) == lastDigitsL && countsL.p == 0).forEach(k => {
                    optionsL.push({ value: k, type: "PENTAGONAL" });
                });
                hexagonals.filter(a => a.toString().substr(0, 2) == lastDigitsL && countsL.h == 0).forEach(k => {
                    optionsL.push({ value: k, type: "HEXAGONAL" });
                });
                heptagonals.filter(a => a.toString().substr(0, 2) == lastDigitsL && countsL.hp == 0).forEach(k => {
                    optionsL.push({ value: k, type: "HEPTAGONAL" });
                });
                octagonals.filter(a => a.toString().substr(0, 2) == lastDigitsL && countsL.o == 0).forEach(k => {
                    optionsL.push({ value: k, type: "OCTAGONAL" });
                });   
                
                for (let m = 0; m < optionsL.length; m++) {
                    let countsM = Object.assign({}, countsL);
                    let numM = optionsL[m].value;
                    let lastDigitsM = numM.toString().substr(2, 2);
                    let optionsM = [];
        
                    modifyObject(countsM, optionsL[m].type);
        
        
                    squares.filter(a => a.toString().substr(0, 2) == lastDigitsM && countsM.s == 0).forEach(k => {
                        optionsM.push({ value: k, type: "SQUARE" });
                    });
                    pentagonals.filter(a => a.toString().substr(0, 2) == lastDigitsM && countsM.p == 0).forEach(k => {
                        optionsM.push({ value: k, type: "PENTAGONAL" });
                    });
                    hexagonals.filter(a => a.toString().substr(0, 2) == lastDigitsM && countsM.h == 0).forEach(k => {
                        optionsM.push({ value: k, type: "HEXAGONAL" });
                    });
                    heptagonals.filter(a => a.toString().substr(0, 2) == lastDigitsM && countsM.hp == 0).forEach(k => {
                        optionsM.push({ value: k, type: "HEPTAGONAL" });
                    });
                    octagonals.filter(a => a.toString().substr(0, 2) == lastDigitsM && countsM.o == 0).forEach(k => {
                        optionsM.push({ value: k, type: "OCTAGONAL" });
                    });  

                    for (let n = 0; n < optionsM.length; n++) {
                        let numN = optionsM[n].value;
                        let lastTwoDigitsN = numN.toString().substr(2, 2);

                        if (x.toString().substr(0, 2) == lastTwoDigitsN) {
                            console.log(x, numI, numJ, numL, numM, numN);
                            console.log(x + numI + numJ + numL + numM + numN);
                        }
                    }
                }
            }
        }
    }
}

function modifyObject(obj, type) {
    if (type == "SQUARE") obj.s++;
    if (type == "PENTAGONAL") obj.p++;
    if (type == "HEXAGONAL") obj.h++;
    if (type == "HEPTAGONAL") obj.hp++;
    if (type == "OCTAGONAL") obj.o++;
}
function generate() {
    let first = 45;
    for (let a = first; (a * a + a) / 2 < 10000; a++) {
        triagonals.push((a * a + a) / 2);
    }

    first = 32;
    for (let b = first; b * b < 10000; b++) {
        squares.push(b * b);
    }

    first = 26;
    for (let c = first; (3 * c * c - c) / 2 < 10000; c++) {
        pentagonals.push((3 * c * c - c) / 2);
    }

    first = 23;
    for (let d = first; 2 * d * d - d < 10000; d++) {
        hexagonals.push(2 * d * d - d);
    }

    first = 21;
    for (let e = first; (5 * e * e - 3 * e) / 2 < 10000; e++) {
        heptagonals.push((5 * e * e - 3 * e) / 2);
    }

    first = 19;
    for (let f = first; 3 * f * f - 2 * f < 10000; f++) {
        octagonals.push(3 * f * f - 2 * f);
    }
}
function isTriagonal(x) {
    let inverse = (-1 + Math.sqrt(1 + 8 * x)) / 2;
    return (inverse == Math.floor(inverse));
}

function isSquare(x) {
    return Math.sqrt(x) == Math.floor(Math.sqrt(x));
}

function isPentagonal(x) {
    let inverse = (1 + Math.sqrt(1 + 24 * x)) / 6;
    return (inverse == Math.floor(inverse));
}

function isHexagonal(x) {
    let inverse = (1 + Math.sqrt(1 + 8 * x)) / 4;
    return (inverse == Math.floor(inverse));
}

function isHeptagonal(x) {
    let inverse = (3 + Math.sqrt(9 + 40 * x)) / 10;
    return (inverse == Math.floor(inverse));
}

function isOctagonal(x) {
    let inverse = (2 + Math.sqrt(4 + 12 * x)) / 6;
    return (inverse == Math.floor(inverse));
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);