let Ti = new Date().getTime() / 1000;

let fs = require("fs");
let data = fs.readFileSync("pokerHands.txt", "utf8");
let rawHands = data.split("\n");

let player1Wins = 0;
let player2Wins = 0;
let ties = 0;

for (let i = 0; i < 1000; i++) {
    let firstHand = [];
    let secondHand = [];

    let line = rawHands[i].split(" ");

    firstHand.push(line[0]);
    firstHand.push(line[1]);
    firstHand.push(line[2]);
    firstHand.push(line[3]);
    firstHand.push(line[4]);
    secondHand.push(line[5]);
    secondHand.push(line[6]);
    secondHand.push(line[7]);
    secondHand.push(line[8]);
    secondHand.push(line[9]);

    let result = compareHands(firstHand, secondHand);
    if (result == 1) player1Wins++;
    if (result == 2) player2Wins++;
    if (result == 0) ties++;
}

console.log("Player 1 Won: " + player1Wins);
console.log("Player 2 Won: " + player2Wins);
console.log("Ties: " + ties);

function compareHands(h1, h2) {
    let r1 = 0;
    let r2 = 0;

    if (royalFlush(h1) && !royalFlush(h2)) {
        return 1;
    }
    else if (!royalFlush(h1) && royalFlush(h2)) {
        return 2;
    } 
    else if (royalFlush(h1) && royalFlush(h2)) {
        return 0;
    }

    if (straightFlush(h1)) {
        r1 = 9;
    }
    else if (fourOfAKind(h1)) {
        r1 = 8;
    }
    else if (fullHouse(h1)) {
        r1 = 7;
    }
    else if (flush(h1)) {
        r1 = 6;
    }
    else if (straight(h1)) {
        r1 = 5;
    }
    else if (threeOfAKind(h1)) {
        r1 = 4;
    }
    else if (pairs(h1) == 2) {
        r1 = 3;
    }
    else if (pairs(h1) == 1) {
        r1 = 2;
    }
    else {
        r1 = 1;
    }

    if (straightFlush(h2)) {
        r2 = 9;
    }
    else if (fourOfAKind(h2)) {
        r2 = 8;
    }
    else if (fullHouse(h2)) {
        r2 = 7;
    }
    else if (flush(h2)) {
        r2 = 6;
    }
    else if (straight(h2)) {
        r2 = 5;
    }
    else if (threeOfAKind(h2)) {
        r2 = 4;
    }
    else if (pairs(h2) == 2) {
        r2 = 3;
    }
    else if (pairs(h2) == 1) {
        r2 = 2;
    }
    else {
        r2 = 1;
    }

    if (r1 > r2) {
        return 1;
    }
    else if (r2 > r1) {
        return 2;
    }

    if (r1 == 9 && r2 == 9) {
        let high1 = findHighest(h1);
        let high2 = findHighest(h2);

        if (high1[0] > high2[0]) {
            return 1;
        }
        if (high2[0] > high1[0]) {
            return 2;
        }

    }
    else if (r1 == 8 && r2 == 8) {
        let highP1 = fourOfAKind(h1, true);
        let highP2 = fourOfAKind(h2, true);

        let valP1 = parseValue(highP1);
        let valP2 = parseValue(highP2);

        if (valP1 > valP2) return 1;
        if (valP2 > valP1) return 2;

        let copy1 = h1.slice();
        let copy2 = h2.slice();

        for (let i = 0; i < copy1.length; i++) {
            if (copy1[i][0] != highP1) {
                valP1 = parseValue(copy1[i][0]);
            }
            if (copy2[i][0] != highP2) {
                valP2 = parseValue(copy2[i][0]);
            }
        }

        if (valP1 > valP2) return 1;
        if (valP2 > valP1) return 2;
    }
    else if (r1 == 7 && r2 == 7) {
        let highP1 = threeOfAKind(h1, true);
        let highP2 = threeOfAKind(h2, true);

        let valP1 = parseValue(highP1);
        let valP2 = parseValue(highP2);

        if (valP1 > valP2) return 1;
        if (valP2 > valP1) return 2;
        
        let rest1 = [];
        let rest2 = [];

        for (let i = 0; i < h1.length; i++) {
            if (h1[i][0] != highP1) rest1.push(h1[i]);
            if (h2[i][0] != highP2) rest2.push(h2[i]);
        }

        return compareHighest(rest1, rest2);
    }
    else if (r1 == 6 && r2 == 6) {
        return compareHighest(h1, h2);
    }
    else if (r1 == 5 && r2 == 5) {
        let high1 = findHighest(h1);
        let high2 = findHighest(h2);

        if (high1[0] > high2[0]) return 1;
        if (high2[0] > high1[0]) return 2;
    }
    else if (r1 == 4 && r2 == 4) {
        let highP1 = threeOfAKind(h1, true);
        let highP2 = threeOfAKind(h2, true);

        let valP1 = parseValue(highP1);
        let valP2 = parseValue(highP2);

        if (valP1 > valP2) return 1;
        if (valP2 > valP1) return 2;
        
        let rest1 = [];
        let rest2 = [];

        for (let i = 0; i < h1.length; i++) {
            if (h1[i][0] != highP1) rest1.push(h1[i]);
            if (h2[i][0] != highP2) rest2.push(h2[i]);
        }

        return compareHighest(rest1, rest2);
    }
    else if (r1 == 3 && r2 == 3) {
        let pairs1 = pairs(h1, true, true);
        let pairs2 = pairs(h2, true, true);

        console.log(pairs1, pairs2);

        let val = compareHighest(pairs1, pairs2);
        if (val != 0) return val;

        let rest1 = [];
        let rest2 = [];

        for (let i = 0; i < h1.length; i++) {
            if (h1[i][0] != pairs1[0][0] && h1[i][0] != pairs1[1][0]) rest1.push(h1[i]);
            if (h2[i][0] != pairs2[0][0] && h2[i][0] != pairs2[1][0]) rest2.push(h2[i]);
        }

        return compareHighest(rest1, rest2);
    }
    else if (r1 == 2 && r2 == 2) {
        let highP1 = pairs(h1, true);
        let highP2 = pairs(h2, true);

        let valP1 = parseValue(highP1);
        let valP2 = parseValue(highP2);

        if (valP1 > valP2) return 1;
        if (valP2 > valP1) return 2;
        
        let rest1 = [];
        let rest2 = [];

        for (let i = 0; i < h1.length; i++) {
            if (h1[i][0] != highP1) rest1.push(h1[i]);
            if (h2[i][0] != highP2) rest2.push(h2[i]);
        }

        return compareHighest(rest1, rest2);
    }
    else if (r1 == 1 && r2 == 1) {
        return compareHighest(h1, h2);
    }
    return 0;
}

function compareHighest(h1, h2) {
    let values1 = [];
    let values2 = [];

    for (let i = 0; i < h1.length; i++) {
        values1.push(parseValue(h1[i][0]));
        values2.push(parseValue(h2[i][0]));
    }

    values1.sort((a, b) => b - a);
    values2.sort((a, b) => b - a);

    for (let j = 0; j < values1.length; j++) {
        if (values1[j] > values2[j]) return 1;
        if (values2[j] > values1[j]) return 2;
    }
    return 0;
}
function royalFlush(hand) {
    if (!flush(hand)) return false;
    if (!straight(hand)) return false;

    for (let i = 0; i < hand.length; i++) {
        if (hand[i][0] == "A") return true; 
    }
    return false;
}

function straightFlush(hand) {
    if (!flush(hand)) return false;
    if (!straight(hand)) return false;
    return true;
}

function fourOfAKind(hand, getPart = false) {
    let counts = {};

    for (let i = 0; i < hand.length; i++) {
        if (counts[hand[i][0]] == undefined) {
            counts[hand[i][0]] = {};
            counts[hand[i][0]].count = 0;
        }
        counts[hand[i][0]].count++;
    }
    
    for (let key in counts) {
        if (counts[key].count == 4 && !getPart) {
            return true;
        }
        else if (counts[key].count == 4 && getPart) {
            return key;
        }
    }
    return false;
}

function fullHouse(hand) {
    if (!threeOfAKind(hand)) return false;
    if (!pairs(hand) == 1) return false;

    return true;
}

function flush(hand) {
    let suit = hand[0][1];

    for (let i = 1; i < hand.length; i++) {
        if (suit != hand[i][1]) return false;
    }
    return true;
}

function straight(hand) {
    let current = hand.slice();
    let lows = [];

    for (let i = 0; i < hand.length; i++) {
        let lowest = findLowest(current);
        current.splice(lowest[1], 1);

        lows.push(lowest[0]);
        if (lows.length > 1) {
            if (lows[0] + i != lows[i]) {
                return false;
            }
        }
    }
    return true;
}

function threeOfAKind(hand, getPart = false) {
    let counts = {};

    for (let i = 0; i < hand.length; i++) {
        if (counts[hand[i][0]] == undefined) {
            counts[hand[i][0]] = {};
            counts[hand[i][0]].count = 0;
        }
        counts[hand[i][0]].count++;
    }
    
    for (let key in counts) {
        if (counts[key].count == 3 && !getPart) {
            return true;
        }
        else if (counts[key].count == 3 && getPart) {
            return key;
        }
    }
    return false;
}

function pairs(hand, getPart = false, twoPairs = false) {
    let counts = {};
    let pairsC = 0;
    let twos = [];

    for (let i = 0; i < hand.length; i++) {
        if (counts[hand[i][0]] == undefined) {
            counts[hand[i][0]] = {};
            counts[hand[i][0]].count = 0;
        }
        counts[hand[i][0]].count++;
    }
    
    for (let key in counts) {
        if (counts[key].count == 2 && !getPart) {
            pairsC++;
        }
        else if (counts[key].count == 2 && getPart && !twoPairs) {
            return key;
        }
        else if (counts[key].count == 2 && getPart && twoPairs) {
            twos.push(key + "H");
        }
    }

    if (twoPairs) return twos;
    return pairsC;
}

function findHighest(hand) {
    let highest = [0, undefined];

    for (let i = 0; i < hand.length; i++) {
        let value = parseValue(hand[i][0]);
        if (value > highest[0]) {
            highest[0] = value;
            highest[1] = i;
        }
    }

    return highest;
}

function findLowest(hand) {
    let lowest = [Infinity, undefined];

    for (let i = 0; i < hand.length; i++) {
        let value = parseValue(hand[i][0]);
        if (value < lowest[0]) {
            lowest[0] = value;
            lowest[1] = i;
        }
    }

    return lowest;
}

function parseValue(cardStr) {
    if (cardStr == "A") return 14;
    if (cardStr == "K") return 13;
    if (cardStr == "Q") return 12;
    if (cardStr == "J") return 11;
    if (cardStr == "T") return 10;
    return parseInt(cardStr);
}

let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);