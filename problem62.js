let Ti = new Date().getTime() / 1000;
let cubes = [];
populateCubes(6e12);

for (let a = 0; a < cubes.length; a++) {
    let cubeCount = 1;

    Loop2:
    for (let b = a + 1; b < cubes.length; b++) {
        if (!haveSameDigits(cubes[a], cubes[b])) continue Loop2;
        Loop3:
        for (let c = b + 1; c < cubes.length; c++) {
            if (!haveSameDigits(cubes[a], cubes[c])) continue Loop3;
            Loop4:
            for (let d = c + 1; d < cubes.length; d++) {
                if (!haveSameDigits(cubes[a], cubes[d])) continue Loop4;
                for (let e = d + 1; e < cubes.length; e++) {
                    if (haveSameDigits(cubes[a], cubes[e])) {
                        console.log(cubes[a], cubes[b], cubes[c], cubes[d], cubes[e]);
                    }
                }
            }
        }
    }
}

function isCube(x) {
    let root = Math.pow(x, 1/3);
    return Math.floor(root) == root;
}

function populateCubes(limit) {
    for (let i = 5000; i < Math.pow(limit, 1/3); i++) {
        cubes.push(Math.pow(i, 3));
    }
}

function haveSameDigits(a, b) {
    let string = a.toString();
    let string2 = b.toString();
    if (string.length != string2.length) return false;

    let counts = {};
    let counts2 = {};

    for (let i = 0; i < string.length; i++) {
        if (counts[string[i]] == undefined) {
            counts[string[i]] = {};
            counts[string[i]].count = 0;
        }
        counts[string[i]].count++;

        if (counts2[string2[i]] == undefined) {
            counts2[string2[i]] = {};
            counts2[string2[i]].count = 0;
        }
        counts2[string2[i]].count++;
    }
    
    for (let key in counts) {
        if (counts2[key] == undefined) return false;

        if (counts2[key].count != counts[key].count) return false;
    }
    return true;
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);

