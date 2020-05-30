let Ti = new Date().getTime() / 1000;

let pentagonals = [];
generatePentagonals();

let partitions = [1];

// SLOW ALGORITHM
/*let ways = [];
let limit = 100;

for (let i = 0; i <= limit; i++) {
    ways[i] = [];

    for (let j = 0; j <= limit; j++) {
        ways[i][j] = 0;
        if (j == 0) ways[i][j] = 1;
        else if (i == 0) ways[i][j] = 0;
        else if (i > j) ways[i][j] = ways[i - 1][j];
        else {
            ways[i][j] = (ways[i - 1][j] + ways[i][j - i]) % 1e6;
        }
        if (ways[i][j] == 0 && i == j) console.log(i, j, ways[i][j]);
    }
}*/

for (let i = 1; i <= 1e5; i++) {
    let r = partition(i);
    if (r == 0) console.log(i);
}

// EULERS ALGORITHM
function partition(n) {
    let total = 0;
    let count = 0;
    if (n == 0) return 1;

    if (partitions[n] != undefined) return partitions[n];

    while (n - pentagonals[count] >= 0) {
        let res = mod(partition(n - pentagonals[count]), 1e6);
        total += ((-2 * (Math.floor(count / 2) % 2) + 1) * res);
        total = mod(total, 1e6);
        partitions[n - pentagonals[count]] = res;

        count++;
    }
    partitions[n] = total;
    return total;
}

function mod(n, m) {
    return ((n % m) + m) % m;
}
function generatePentagonals() {
    for (let c = 2; (3 * c * c - c) / 2 < 250000; c++) {
        let k = Math.floor(c / 2) * (2 * (c % 2) - 1);
        pentagonals.push((3 * k * k - k) / 2);
    }
    pentagonals.sort((a, b) => a - b);
}
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);