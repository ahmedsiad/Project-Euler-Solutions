let Ti = new Date().getTime() / 1000;

let tiles = new Array(40).fill(0);
let count = 0;
let doubles = [false, false, false];
let position = 0;

let ccG = Math.floor(Math.random() * 16);
let ccJ = Math.floor(Math.random() * 16);
if (ccJ == ccG) ccJ = Math.floor(Math.random() * 16);

let ch = new Array(16).fill(null);
ch[0] = x => 0;
ch[3] = x => 10;
ch[4] = x => 11;
ch[6] = x => 24;
ch[9] = x => 39;
ch[10] = x => 5;
ch[11] = goNextR;
ch[13] = goNextR;
ch[14] = goNextU;
ch[15] = x => ((x - 3) % 16 + 16) % 16;
shuffle(ch);

while (count < 1e7) {
    position = getNextPosition(position);
    tiles[position]++;

    count++;
}

let total = tiles.reduce((a, b) => a + b);
for (let i = 0; i < tiles.length; i++) {
    let probability = tiles[i] / total * 100;
    tiles[i] = {pos: i, probability: probability.toFixed(2) + "%", val: probability};
}
tiles.sort((a, b) => b.val - a.val);

for (let i = 0; i < 3; i++) {
    console.log(tiles[i]);
}

function getNextPosition(current) {
    let dice1 = Math.floor(Math.random() * 4 + 1);
    let dice2 = Math.floor(Math.random() * 4 + 1);

    if (dice1 == dice2) {
        doubles.push(true);
        doubles.shift();
        if (!doubles[0] && !doubles[2] && !doubles[3]) return 10;
    }
    else {
        doubles.push(false);
        doubles.shift();
    }

    let newPosition = (current + dice1 + dice2) % 40;

    if (newPosition == 30) return 10;
    
    if (newPosition == 2 || newPosition == 17 || newPosition == 33) {
        ccG = (ccG + 1) % 16;
        ccJ = (ccJ + 1) % 16;
    
        if (ccG == 0) return 0;
        if (ccJ == 0) return 10;
    }

    if (newPosition == 7 || newPosition == 22 || newPosition == 36) {
        ch.unshift(ch.pop());
        if (ch[0] != null) return ch[0](newPosition);
    }

    return newPosition;
}


function goNextR(curr) {
    if (curr < 5) return 5;
    if (curr < 15) return 15;
    if (curr < 25) return 25;
    if (curr < 35) return 35;
    return 5;
}

function goNextU(curr) {
    if (curr > 12 && curr < 28) return 28;
    return 12;
}

//Shuffle Array
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);