const fruits = ["apple", "orange", "banana"];

fruits.push("grapes");
console.log(fruits); // even though fruits is declared as const we can push elements to it because it is at the same address.

// but if we try to do the following
// fruits = ["grapes","mango"];
// It will provide error because now we intent to change the address of const array which is not allowed

// 90 percent of developers use const to declare array because it seems safe in complex codes.
