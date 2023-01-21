// Cloning the arrays

let array1 = ["item1", "item2"];

// 1 method
// let array2 = array1.slice(0);

// 2 method
// let array2 = [].concat(array1);

// 3 and the newest and most used way - using spread operator(...)
// let array2 = [...array1];

// console.log(array1 === array2); //this shows both are different arrays

/* Concatinating arrays - 
joining two or more arrays or adding more items */

// 1 method
// let array2 = array1.slice(0).concat(["item3", "item4"]);

// 2 method
// let array2 = [].concat(array1, ["item3", "item4"]);

// 3 method
let oneMoreArray = ["item3", "item4"];
let array2 = [...array1, ...oneMoreArray];
console.log(array2);
