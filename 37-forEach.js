// forEach loop works with callback means takes function as parameter and provides the argument one by one.

/* first way

const numbers = [2, 4, 5, 6];

function multiplyby2(number, index) {
  console.log("index is", index);
  console.log(number * 2);
}

numbers.forEach(multiplyby2);

*/

/* Second way - creating anonymous function inside forEach 

const numbers = [2, 4, 5, 6];

numbers.forEach(function (number) {
  console.log(`${number} * 2 is ${number * 2}`);
});

*/

/* Third way - using arrow functions 

const numbers = [2, 4, 6, 7];

numbers.forEach((number) => {
  console.log(number * 2);
});

*/

/* Fourth way - working with array objects */

const users = [
  { firstName: "Vaishnao", gender: "Male" },
  { firstName: "Vaishnavi", gender: "Female" },
  { firstName: "Arpit", gender: "Male" },
];

users.forEach((user) => console.log(user.firstName)); // the use of simplest arrow function is used here.
