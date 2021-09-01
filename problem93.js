let Ti = new Date().getTime() / 1000;

let limit = 11;
let perms = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];
let add = (x, y) => x + y;
let sub = (x, y) => x - y;
let mul = (x, y) => x * y;
let div = (x, y) => x / y;
let ops = [add, sub, mul, div];

let max = [0, 0];
for (let i = 1; i < limit; i++) {
    for (let j = i + 1; j < limit; j++) {
        for (let k = j + 1; k < limit; k++) {
            for (let l = k + 1; l < limit; l++) {
                let res = mostConsecutive(allPossiblities([i, j, k, l]));
                if (res > max[0]) {
                    max[0] = res;
                    max[1] = [i, j, k, l];
                }
            }
        }
    }
}
console.log(max);

function mostConsecutive(x) {
    let counter = 1;
    for (let key in x) {
        if (parseInt(key) != counter) return counter;
        counter++;
    }
    return counter - 1;
}

function allPossiblities(arr) {
    let orders = getPermutations(arr);
    let results = {};

    for (let i = 0; i < orders.length; i++) {
        for (let a = 0; a < 4; a++) {
            for (let b = 0; b < 4; b++) {
                for (let c = 0; c < 4; c++) {
                    let operators = [ops[a], ops[b], ops[c]];
                    let res = allPerms(orders[i], operators);
                    for (let j = 0; j < res.length; j++) {
                        if (Math.floor(res[j]) == res[j] && res[j] > 0 && res[j] != Infinity) {
                            results[res[j]] = true;
                        }
                    }
                }
            }
        }
    }
    return results;
}

function allPerms(numbers, operators) {
    let results = [];
    for (let i = 0; i < perms.length; i++) {
        let nums = [...numbers];
        let o1 = perms[i][0];
        let res1 = operators[o1](nums[o1], nums[o1 + 1]);
        nums[o1] = res1;
        nums.splice(o1 + 1, 1);

        let o2 = perms[i][1];
        let res2 = operators[o2](nums[1], nums[o2 == 2 ? 2 : 0]);
        nums[o2 == 2 ? 1 : 0] = res2;
        nums.splice((o2 == 2 ? 1 : 0) + 1, 1);

        let o3 = perms[i][2];
        let res3 = operators[o3](nums[0], nums[1]);
        results.push(res3);
    }
    return results;
}

function getPermutations(arr) {
    let results = [];

    if (arr.length == 1) {
        results.push(arr);
        return results;
    }


    for (let i = 0; i < arr.length; i++) {
        let first = arr.slice(i, i + 1);
        let rest = arr.slice(0, i).concat(arr.slice(i + 1));
        let inner = getPermutations(rest);

        for (let j = 0; j < inner.length; j++) {
            results.push(first.concat(inner[j]));
        }
    }
    return results;
}


let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);