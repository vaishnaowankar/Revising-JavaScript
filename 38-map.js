// map is very much used in react
// It also takes callback as a parameter like forEach
// but it return a new array of manipulated elements.

/* first way
const numbers = [2, 4, 6, 1, 8];

function squares(number) {
  return number * number;  
}

const squaredNumbers = numbers.map(squares);
console.log(squaredNumbers);

*/

/* second way - creating function inside map 
const numbers = [2, 4, 6, 1, 8];

const output = numbers.map(function (number) {
  return number * number;
});

console.log(output);

*/

/* third way - using arrow functions and array objects */

const users = [
  { firstName: "Vaishnao", age: 21 },
  { firstName: "Vaishnavi", age: 22 },
  { firstName: "Arpit", age: 21 },
];

const userNames = users.map((user) => {
  return user.firstName; // as map returns an array it is adviced to return the output instead of just logging otherwise it will create an array of undefined objects.
});

console.log(userNames);
