let fruits = ["apple", "mango", "orange"];

//push - adds element to end of an array
fruits.push("banana");
console.log(fruits);

//pop - Removes element from end of an array as well as returns the popped value
let poppedFruit = fruits.pop();
console.log(fruits);
console.log(poppedFruit);

//unshift - adds elements to the start of an array
fruits.unshift("banana");
console.log(fruits);

//shift - removes element from start of an array as well as returns the removed value
let removedFruit = fruits.shift();
console.log(fruits);
console.log(removedFruit);

// push and pop are comparatively faster than shift and unshift
