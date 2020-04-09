
let primes = [];

function generatePrimes() {
    Loop1:
    for (let num = 3; num < 1e6; num += 2) {
        let isPrime = checkPrime(num);
        if (!isPrime) continue;

        let numString = num.toString();
        for (let char = 0; char < numString.length; char++) {
            if (parseInt(numString[char]) % 2 == 0) {
                continue Loop1;
            }
        }
        primes.push(num);
    }
}

function checkPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

function getPermutations(string) {
    let perms = [string];
    let constChars = [];
    let rotation = [];

    for (let char in string) {
        constChars.push(string[char]);
    }

    for (let a = 1; a < string.length; a++) {
        for (let char = 0; char < constChars.length; char++) {
            let newIndex = (char + a > string.length - 1 ? char + a - string.length : char + a);
            rotation[newIndex] = constChars[char];
        }
        perms.push(createString(rotation));
    }

    return perms;
}

function createString(arr) {
    let str = "";

    for (let char = 0; char < arr.length; char++) {
        str += arr[char];
    }
    return str;
}
let circularPrimes = [];

generatePrimes();

Loop1:
for (let prime = 0; prime < primes.length; prime++) {
    let currentPrime = primes[prime];
    let permutations = getPermutations(currentPrime.toString());

    for (let perm in permutations) {
        if (!checkPrime(parseInt(permutations[perm]))) continue Loop1;
    }
    circularPrimes.push(currentPrime);
}

console.log(circularPrimes);