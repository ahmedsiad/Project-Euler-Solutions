let Ti = new Date().getTime() / 1000;

let total = 0;
let ways = [];

for (let i = 1; i <= 100; i++) {
    ways[i] = [];
    for (let j = 1; j <= i; j++) {
        let x = i - j;
        ways[i][j] = 0;
        if (x == 0) ways[i][j] = 1;
        else if (x <= j) {
            for (let k = 1; k < ways[x].length; k++) {
                ways[i][j] += ways[x][k];
            }
        }
        else {
            for (let k = 1; k <= j; k++) {
                ways[i][j] += ways[x][k];
            }
        }
    }
}

for (let a = 1; a <= 100; a++) {
    total += ways[100][a];
}
console.log(total - 1);

console.log(partition(100, 100));
function partition(n, m) {
    if (m == 1) return 1;
    if (n == 0) return 1;

    let count = 0;

    for (let k = 1; k <= m; k++) {
        count += partition(n - k, (k > n - k ? n - k : k));
    }
    return count;
}

// SLOWWWW
function waysToWriteSums(num, integers, min = Infinity) {
    let results = [];

    if (integers == 1) {
        results.push(num.toString());
        return results;
    }

    let upperBound = Math.min(num - integers + 1, min);
    let lowerBound = Math.ceil(num / integers);
    for (let i = upperBound; i >= lowerBound; i--) {
        let rest = num - i;
        let inner = waysToWriteSums(rest, integers - 1, i);

        for (let j = 0; j < inner.length; j++) {
            results.push(i.toString() + inner[j]);
        }
    }
    return results;
}


let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);