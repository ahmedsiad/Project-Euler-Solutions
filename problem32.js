let Ti = new Date().getTime() / 1000;

let pandigitalProducts = [];
let sum = 0;

Loop1:
for (let i = 1; i < 100; i++) {
    if (!isPandigital(i)) continue Loop1;
    Loop2:
    for (let j = Math.pow(10, Math.ceil(2 - Math.log10(i))); j < Math.pow(10, Math.ceil(4.5 - Math.log10(i))); j++) {
        let concatenated = (i.toString()) + (j.toString());
        let product = i * j;
        if ((product.toString()).length + (i.toString()).length + (j.toString()).length != 9) continue Loop2;
        if (!isPandigital(parseInt(concatenated))) continue Loop2;

        let concatenatedProduct = concatenated + product.toString();
        if (isPandigital(parseInt(concatenatedProduct))) {
            if (pandigitalProducts.includes(product)) continue Loop2;

            pandigitalProducts.push(product);
            sum += product;
            console.log(i, j, product);
        }
    }
}
console.log(sum);
function isPandigital(number) {
    let string = number.toString();

    if (string.indexOf("0") != -1) return false;

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
console.log("Time taken: " + (Tf - Ti));