let Ti = new Date().getTime() / 1000;

let perms = getPermutations("987654321A");

let highest = 0;

for (let i = 0; i < perms.length; i++) {
    let a = parseValue(perms[i][0]);
    let b = parseValue(perms[i][1]);
    let c = parseValue(perms[i][2]);
    let d = parseValue(perms[i][3]);
    let e = parseValue(perms[i][4]);
    let f = parseValue(perms[i][5]);
    let g = parseValue(perms[i][6]);
    let h = parseValue(perms[i][7]);
    let j = parseValue(perms[i][8]);
    let k = parseValue(perms[i][9]);

    if (a != 10 && d != 10 && f != 10 && h != 10 && k != 10) continue;
    let sum = a + b + c;
    if (d + c + e != sum) continue;
    if (f + e + g != sum) continue;
    if (h + g + j != sum) continue;
    if (k + j + b != sum) continue;

    let total = a.toString() + b.toString() + c.toString() + d.toString() + c.toString() + e.toString() + f.toString() + e.toString() + g.toString() + h.toString() + g.toString() + j.toString() + k.toString() + j.toString() + b.toString();
    total = parseInt(total);
    if (total > highest && a < d && a < f && a < h && a < k) {
        highest = total;
        console.log(total);
    }
}

function parseValue(x) {
    if (x == "A") return 10;
    return parseInt(x);
}

function getPermutations(string) {
    let results = [];

    if (string.length == 1) {
        results.push(string);
        return results;
    }

    for (let i = 0; i < string.length; i++) {
        let first = string[i];
        let rest = string.substring(0, i) + string.substring(i + 1);
        let inner = getPermutations(rest);

        for (let j = 0; j < inner.length; j++) {
            results.push(first + inner[j]);
        }
    }
    return results;
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);