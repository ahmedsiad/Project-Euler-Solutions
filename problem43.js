let Ti = new Date().getTime() / 1000;


let permutations = getPermutations("1234567890");
let sum = 0;

for (let a = 0; a < permutations.length * 8/9; a++) {
    let number = parseInt(permutations[a]);

    let firstThree = parseInt(permutations[a][1] + permutations[a][2] + permutations[a][3]);
    if (firstThree % 2 != 0) continue;

    let secondThree = parseInt(permutations[a][2] + permutations[a][3] + permutations[a][4]);
    if (secondThree % 3 != 0) continue;

    let thirdThree = parseInt(permutations[a][3] + permutations[a][4] + permutations[a][5]);
    if (thirdThree % 5 != 0) continue;

    let fourthThree = parseInt(permutations[a][4] + permutations[a][5] + permutations[a][6]);
    if (fourthThree % 7 != 0) continue;

    let fifthThree = parseInt(permutations[a][5] + permutations[a][6] + permutations[a][7]);
    if (fifthThree % 11 != 0) continue;

    let sixthThree = parseInt(permutations[a][6] + permutations[a][7] + permutations[a][8]);
    if (sixthThree % 13 != 0) continue;
    
    let seventhThree = parseInt(permutations[a][7] + permutations[a][8] + permutations[a][9]);
    if (seventhThree % 17 != 0) continue;

    sum += number;
}

console.log(sum);

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