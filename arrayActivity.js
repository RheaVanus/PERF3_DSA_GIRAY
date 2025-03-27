/*
Instructions:
        1. Create a new JavaScript file named arrayActivity.js.
        2. In the file, perform the following tasks:
                a. Create an array called favSingers and store your three favorite singers in it.
                b. Log the first singer in the array using array index notation.
                c. Create an array called favNumbers and store four of your favorite numbers.
                d. Create an array named mixedArr and store different data types: ["string", ["otherarray"], 123, true].
                e. Access and log each item in the mixedArr using array index notation.
*/



let favSingers = ["Yael Yuzon (SpongeCola)", 
                 "Cham Lui Pio (Hale)",
                 "Bamboo Mañalac"           ];
console.log(favSingers[0]);

let faveNumbers = [9, 23, 30, 0];
let mixedArr = ["Migraine" , 
                ["Huwag na Huwag mong Sasabihin", "Kasalanan", "Nakapagtataka"],
                123,
                true ];

console.log(mixedArr[0]);
console.log(mixedArr[1]);
console.log(mixedArr[1][0]);
console.log(mixedArr[1][1]);
console.log(mixedArr[1][2]);
console.log(mixedArr[2]);
console.log(mixedArr[3]);