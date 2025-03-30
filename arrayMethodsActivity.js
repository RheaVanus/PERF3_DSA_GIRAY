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

let arr1 = ["Cecile", "Lone"]; // Declares arr1 which is an array with values of "Cecile" and "Lone"
let arr2 = ["Emil", "Tobias", "Linus"]; // Declares arr 2 which is an array with values of "Emil", "Tobias", "Linus"
let join = arr1.concat(arr2);//Joins the two arrays using concat. arr1 to be concat with arr2
console.log(join)//Logs the joined array


let fruits = ["Banana", "Orange", "Apple", "Mango"]; // Decalre fruits table with values "Banana", "Orange", "Apple", "Mango"
let push = fruits.push("Kiwi");//push to add Kiwi to the last part of the array
let remove = fruits.pop();//Pop is used to remove the last item of the array
let sort = fruits.sort();//Sorts the fruits array alphabetically into ["Apple", "Banana", "Mango", "Orange" ]
let fruitsfornena = fruits.slice(0, 2); //Take a part of the array which then it will be a new array.
console.log(fruits);//Logs the changes for the fruits array
console.log(fruitsfornena);// Logs the new array formed using slice


let array1 = [1, 2, 3]; // Declares array1 with values of 1, 2, 3
let unshift = array1.unshift(4, 5)// Adds 4 and 5 to the front of 1, 2, 3 using unshift() 
console.log(array1); //Logs to see if the unshift is properly executed

let array2 = [1, 2, 3]; // Declares array2 with values of 1, 2, 3
let shift = array2.shift();//Shift is used here to remove the first item in the array2
console.log(array2); //Logs to see if shift() is properly executed

let months = [] //Declares an empty array of months
let add = months.splice(0,0, "January", "February", "March", "April", "May", "June", "July", "August", "Sepetember", "October", "November", "December");
//Variable add is declared with a function of splice in months, which has starting point and items to be deleted of 0, 0, then adding the 12 months of the year. 
console.log(months); //Logs to see the months if added to the empty array
let del = months.splice(0, 3); // Variable del is declared with splice function inside to delete the items starting from index 0 ends in index 3
console.log(months);//Logs to see if the items are deleted.

