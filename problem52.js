let Ti = new Date().getTime() / 1000;

for (let i = 1; i < 1e6; i++) {
    if (i / Math.pow(10, Math.ceil(Math.log10(i))) > 1 / 6) continue;
    if (haveSameDigits(i, i * 2) && haveSameDigits(i, i * 3) && haveSameDigits(i, i * 4) && haveSameDigits(i, i * 5) && haveSameDigits(i, i * 6)) {
        console.log(i);
    }
}


function haveSameDigits(a, b) {
    let string = a.toString();
    let string2 = b.toString();

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