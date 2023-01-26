// let numbers = [1,2,3];

// Now when we try to access numbers methods using . operator we will get number of methods that are stored in its prototype.
// But we learnt that only functions have prototype so how can a array have the prototype

// Actually internally in javascript Array is declared something like this,
const numbers = new Array(1, 2, 3);
// So these are the prototypes of Array function

// We can also check the prototype of Array
console.log(Object.getPrototypeOf(numbers));
console.log(Array.prototype);
// Now usually prototypes are returned are objects but in this case it is returned as array.
// This was decided by javascript to return prototype of Array as Array.

/*
// But we can change the protoype as well which has very little use case in javascript.
function hello() {
  console.log("Hello World");
}

hello.prototype = [];       // hence the prototype of hello will now be an empty array and we can add or remove elements but we dont use prototype for this work, we only use it to add extra properties to function.
console.log(hello.prototype);
*/
