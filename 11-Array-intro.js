// Array = ordered collections of items

let fruits = ["apple", "banana", "mango"];
let numbers = [1, 2, 3, 4];

//array can store number of datatype at once
let mixed = [1, 2, 2.3, "string", null, undefined];

//array is a type of object
console.log(typeof fruits);
let obj = {}; // This is a object literal as well

// How to find that something declared is specifically an array?  using the Array method.
console.log(Array.isArray(fruits)); // It will output as true
console.log(Array.isArray(obj)); // It will output as false
