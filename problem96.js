let Ti = new Date().getTime() / 1000;

let fs = require("fs");
let rawData = fs.readFileSync("p96sudoku.txt", "utf8");

let lines = rawData.split("\nGrid");

let sum = 0;
for (let i = 0; i < lines.length; i++) {
    let g = createGrid(lines[i]);
    solve(g);
    sum += g[0][0] * 100 + g[0][1] * 10 + g[0][2];
}
console.log(sum);

function solve(grid) {
    let zeroes = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 0) zeroes.push([i, j]);
        }
    }

    let path = [];
    let current = 0;
    Global:
    while (true) {
        if (path.length == zeroes.length) break Global;

        if (path[current] != undefined) {
            for (let i = path[current]; i < 10; i++) {
                if (checkValidMove(grid, i, zeroes[current][0], zeroes[current][1])) {
                    grid[zeroes[current][0]][zeroes[current][1]] = i;
                    path[path.length - 1] = i;
                    current++;
                    continue Global;
                }
            }
            path[path.length - 1] = 9;
            current++;
        }
        else {
            for (let i = 1; i < 10; i++) {
                if (checkValidMove(grid, i, zeroes[current][0], zeroes[current][1])) {
                    grid[zeroes[current][0]][zeroes[current][1]] = i;
                    path.push(i);
                    current++;
                    continue Global;
                }
            }
        }

        for (let k = path.length - 1; k >= 0; k--) {
            grid[zeroes[current][0]][zeroes[current][1]] = 0;
            if (path[k] != 9) {
                current--;
                continue Global;
            }
            path.pop();
            current--;
        }
    }
}

function checkValidMove(grid, number, i, j) {
    let rowNums = new Array(10).fill(false);
    rowNums[number] = true;
    for (let a = 0; a < grid.length; a++) {
        if (grid[i][a] == 0) continue;
        if (rowNums[grid[i][a]] == true) return false;
        rowNums[grid[i][a]] = true;
    }

    let colNums = new Array(10).fill(false);
    colNums[number] = true;
    for (let b = 0; b < grid.length; b++) {
        if (grid[b][j] == 0) continue;
        if (colNums[grid[b][j]] == true) return false;
        colNums[grid[b][j]] = true;
    }

    let squareNums = new Array(10).fill(false);
    let squareCorner = getSquareNumber(i, j);
    squareNums[number] = true;
    for (let c = 0; c < 3; c++) {
        for (let d = 0; d < 3; d++) {
            if (grid[squareCorner[0] + c][squareCorner[1] + d] == 0) continue;
            if (squareNums[grid[squareCorner[0] + c][squareCorner[1] + d]] == true) return false;
            squareNums[grid[squareCorner[0] + c][squareCorner[1] + d]] = true
        }
    }
    return true;
}

function getSquareNumber(i, j) {
    if (i < 3 && j < 3) return [0, 0];
    if (i > 5 && j < 3) return [6, 0];
    if (i <= 5 && j < 3) return [3, 0];

    if (i < 3 && j >= 3 && j < 6) return [0, 3];
    if (i > 5 && j >= 3 && j < 6) return [6, 3];
    if (i <= 5 && j >= 3 && j < 6) return [3, 3];

    if (i < 3 && j > 5) return [0, 6];
    if (i > 5 && j > 5) return [6, 6];
    if (i <= 5 && j > 5) return [3, 6];
}

function createGrid(data) {
    let grid = [];
    data = data.split("\n");
    for (let i = 1; i < data.length; i++) {
        let row = data[i].split("");
        row = row.map(x => parseInt(x));
        grid.push(row);
    }
    return grid;
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);