let Ti = new Date().getTime() / 1000;

let endedAt89 = 0;
let endsAt89 = new Set();
let sum = 0;  
let numString;

function populate() {
    let sum;
    let numString;
    let num;
    for (let i = 1; i < 568; i++) {
        num = i;
        while(true) {
            sum = 0;
            numString = num.toString();
            for (let j = 0; j < numString.length; j++) {
                sum += numString[j] * numString[j];
            }
            if (sum == 89) {
                endsAt89.add(i);
                break;
            }
            else if (sum == 1) {
                break;
            }
            num = sum;
        }        
    }
}

populate();
for (let i = 568; i < 10000000; i++) {
    sum = 0;
    numString = i.toString();
    for (let j = 0; j < numString.length; j++) {
        sum += numString[j] * numString[j];
    }
    if (endsAt89.has(sum)) {
        endedAt89 += 1;    
    }    
}
console.log(endedAt89 + endsAt89.size);
let Tf = new Date().getTime() / 1000;
console.log(Tf - Ti);