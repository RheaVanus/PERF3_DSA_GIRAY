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
                 "Bamboo Mañalac"           ]; // Declares the array named favSingers with values of "Yael Yuzon (Spongecola", "Cham Liu Pio(Hale)", "Bamboo Manalac"
console.log(favSingers[0]); // Logs the item in index 0 which is Yael Yuzon

let faveNumbers = [9, 23, 30, 0];//Declares favNumbers with values of 9, 23, 30, 0
let mixedArr = ["Migraine" , 
                ["Huwag na Huwag mong Sasabihin", "Kasalanan", "Nakapagtataka"],
                123,
                true ]; // Declares an array with mixed Datatypes "Migraine" which is a string
                //["Huwag na Huwag mong Sasabihin", "Kasalanan", "Nakapagtataka"] which is a array
                //   123 which is an Int or Number
                //   true which is a boolean

console.log(mixedArr[0]);//Logs the mixedArr index 0 which is Migraine
console.log(mixedArr[1]);//Logs the mixedArr index 1 which is an array ["Huwag na Huwag mong Sasabihin", "Kasalanan", "Nakapagtataka"].
console.log(mixedArr[1][0]); //Logs the mixedArr index 1 which is an array then index 0 of that array which is Huwag na Huwag mong Sasabihin
console.log(mixedArr[1][1]);//Logs the mixedArr index 1 which is an array then index 1 of that array which is Kasalanan
console.log(mixedArr[1][2]);//Logs the mixedArr index 1 which is an array then index 2 of that array which is Nakapagtataka
console.log(mixedArr[2]); //Logs the mixedArr index 2 which is 123
console.log(mixedArr[3]); //Logs the mixedArr index 3 which is true