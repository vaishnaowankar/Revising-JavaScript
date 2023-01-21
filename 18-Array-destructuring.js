let myArray = ["value1", "value2", "value3", "value4"];

// normal version of asigning values to variables
// let var1 = myArray[0];
// let var2 = myArray[1];

// using array destructuring
// let [var1, var2] = myArray; // will assign the values in order of array to variables i.e value 1 to var1 , value2 to var2 and so on

// using spread operator to add remaining values to different array
// let [var1, var2, ...myNewArray] = myArray;
// console.log(var1);
// console.log(var2);
// console.log(myNewArray);

// Some more dilemmas

// let myArray = ["value1"];
// let [var1,var2,var3] = myArray;
// This will assign value 1 to var1 and others will be undefined

// Suppose you want to assign value 1 to var1 but value 3 to var2
let [var1, , var2] = myArray; // use , to skip the value
console.log(var1);
console.log(var2);
