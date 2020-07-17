let Ti = new Date().getTime() / 1000;

let fs = require("fs");
let rawData = fs.readFileSync("p81matrix.txt", "utf8");

let lines = rawData.split("\n");

let matrix = [];
let unvisited = [];
let visited = [];
let all = [];

class Vertex {
    constructor(i, j) {
        this.i = i;
        this.j = j;

        this.d = Infinity;
    }
}

for (let i = 0; i < lines.length; i++) {
    let lineData = lines[i].split(",");
    matrix[i] = [];
    for (let j = 0; j < lineData.length; j++) {
        matrix[i].push(parseInt(lineData[j]));
        let v = new Vertex(i, j);
        all.push(v);
        unvisited.push(v);
    }
}
unvisited[0].d = 0;
dijkstras();

function dijkstras() {
    
    while (unvisited.length > 0) {
        //Find the unvisited vertex with the smallest distance from the start
        let smallestD = Infinity;
        let pick;
        for (let i = 0; i < unvisited.length; i++) {
            if (unvisited[i].d < smallestD) {
                pick = unvisited[i];
                smallestD = unvisited[i].d;
            }
        }

        //Examine unvisited neighbors
        let neighbors = [];
        if (pick.i > 0) neighbors.push(all.find(x => x.i == pick.i - 1 && x.j == pick.j));
        if (pick.i < matrix.length - 1) neighbors.push(all.find(x => x.i == pick.i + 1 && x.j == pick.j));
        if (pick.j > 0) neighbors.push(all.find(x => x.j == pick.j - 1 && x.i == pick.i));
        if (pick.j < matrix.length - 1) neighbors.push(all.find(x => x.j == pick.j + 1 && x.i == pick.i));

        for (let i = 0; i < neighbors.length; i++) {
            let distance = pick.d + matrix[neighbors[i].i][neighbors[i].j];
            if (distance < neighbors[i].d) {
                neighbors[i].d = distance;
            }
        }

        //Add current vertex to list of visited vertices
        visited.push(pick);
        unvisited.splice(unvisited.findIndex(x => x == pick), 1);
    }
    let solution = visited.find(x => x.i == 79 && x.j == 79);
    console.log(solution);
    console.log(solution.d + matrix[0][0]);
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);