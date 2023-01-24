// Sets are iterable
// Sets store unique data
// Sets have their own methods
// No index-based access
// Order of elements is not guaranteed
// Unique items only allowed (will ignore the duplicates if present)
// It can store values of different datatypes

/* Concept 1 - declaration  and use

const numbers = new Set([1, 2, 3, 3]); // will ignore the another 3 because no duplicates allowed
console.log(numbers);

console.log(numbers[2]); // will give error(undefined) because no index-based access

*/

/* Concept 2 - set methods  

const items = ["item1", "item2", "item3"];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(items);

numbers.add(["item4", "item5"]);
numbers.add(["item4", "item5"]);
// Even though the above arrays are same they are on different location and are considered unique from javascript perspective , so they will be added.

if (numbers.has(1)) {
  console.log("1 is present");
} else {
  console.log("1 is not present");
}

console.log(numbers);

*/

/* concept 3 - iteration 
for (let number of numbers) {
  console.log(number);
}
// Sets should be used when needed to store unique values

*/

/* Best use case - to find unique values from array */
const numbers = [1, 2, 4, 4, 5, 6, 6, 6, 7, 8, 8, 9];
const uniqueValues = new Set(numbers);
console.log(uniqueValues);
console.log(numbers); // It will not change the original array

console.log(uniqueValues.length); // This will give error(undefined)
// To find the length use the for loop

let length = 0;
for (let value of uniqueValues) {
  length++;
}

console.log(length);
