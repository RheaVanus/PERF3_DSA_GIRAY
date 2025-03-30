/*
1. Create a new JavaScript file named objectActivity.js.
2. Implement the following tasks:
    Create an object called car with the properties type, model, and color.
    Use typeof to check the type of the object and log it to the console.
    Update the type property to "Toyota" and log the updated object.
    Add a new property wheels with the value 4 and log the updated object.
*/

let car = {
    type:"Aston Martin",
    model : "V12 Zagato",
    color: "Red"
}; //Declare the object car with the following key value pair; type is Aston Martin with model of V12 Zagato and color Red

console.log (typeof car); // Returns the type of the object
car.type = "Toyota";// Updates the type "Astom Martion " to type : "Toyota"
console.log(car); //Logs to see the changes

car.wheels = 4; //Adding another key value pair to the object named wheels with a value of 4
console.log(car); //Logs to see if the key-value pair of wheels: 4 is added.