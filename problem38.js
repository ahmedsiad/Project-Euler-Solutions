let Ti = new Date().getTime() / 1000;

let n = 2;

for (let i = 1000; i < 1e5; i++) {
    if (!isPandigital(i)) continue;

    let string = "";
    for (let j = 1; j <= n; j++) {
        string = string + (j * i).toString();
    }
    if (isPandigital(string) && string.length == 9) console.log(i, string);
}

function isPandigital(number) {
    let string = number.toString();

    if (string.charAt(0) == "0") return false;

    let counts = {};

    for (let i = 0; i < string.length; i++) {
        if (counts[string[i]] == undefined) {
            counts[string[i]] = {};
            counts[string[i]].count = 0;
        }
        counts[string[i]].count++;

        if (counts[string[i]].count > 1) {
            return false;
        }
    }

    return true;
}


let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);