// find is used to find any unique elements in the array
// It return the first occurrence of the required value

/* Basic example
const animals = ["tiger", "cat", "dog", "cheetah"];

const output = animals.find((string) => string.length === 3);
console.log(output);

// will ouput cat even though dog has length count as 3 because cat occurs first.
*/

/* - Real-life example - get the name of user with id = 3 */

const users = [
  { userId: 1, name: "Vaishnao" },
  { userId: 2, name: "Vaishnavi" },
  { userId: 3, name: "Arpit" },
  { userId: 4, name: "Tejas" },
];

const requiredUser = users.find((user) => user.userId === 3);
console.log(requiredUser);
