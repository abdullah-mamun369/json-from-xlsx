// // // To install the command, run the following command- -----------------------------------------------------------
// //  npm install prompt-sync
// const prompt = require('prompt-sync')();
// let number = parseInt(prompt('Enter a Number'));

const a = [1, 2, 3, 4, 5]

const length = a.length;

let largeNumber = a[0];

// console.log(length);

const index = length - 1

const firstElement = a[0];

for (let i = 0; i < a.length; i++) {

    if (a[i] > largeNumber) {
        if (a[i] % 2 === 0) {
            largeNumber = a[i]
        }

    }
}

console.log(largeNumber);