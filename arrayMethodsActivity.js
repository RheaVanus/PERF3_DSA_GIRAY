/*
Create a new JavaScript file named arrayMethodsActivity.js.
2. Implement the following tasks:
     Use concat() to join two arrays: arr1 = ["Cecile", "Lone"] and arr2 = ["Emil", "Tobias", "Linus"].
    Use push() to add an element "Kiwi" to the array fruits = ["Banana", "Orange", "Apple", "Mango"].
    Use unshift() to add two numbers 4 and 5 to the beginning of the array array1 = [1, 2, 3].
     Use pop() to remove the last element from the fruits array.
     Use shift() to remove the first element from the array array2 = [1, 2, 3].
     Use sort() to sort the fruits array alphabetically.
    Use slice() to create a new array containing a portion of the fruits array.
     Use splice() to insert and remove elements in the months array.
    */

let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let join = arr1.concat(arr2);
console.log(join)


let fruits = ["Banana", "Orange", "Apple", "Mango"];
let push = fruits.push("Kiwi");
let remove = fruits.pop();
let sort = fruits.sort();
let fruitsfornena = fruits.slice(0, 2);
console.log(fruits);
console.log(fruitsfornena);


let array1 = [1, 2, 3];
let unshift = array1.unshift(4, 5) 
console.log(array1);

let array2 = [1, 2, 3];
let shift = array2.shift();
console.log(array2)

let months = []
let add = months.splice(0,0, "January", "February", "March", "April", "May", "June", "July", "August", "Sepetember", "October", "November", "December");
console.log(months);
let del = months.splice(0, 3);
console.log(months);

