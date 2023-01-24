// map is an iterable
// It stores data in ordered fashion
// It stores key value pairs like objects
// Duplicate keys are not allowed like objects

/* difference between map and objects :

// objects can have only string or symbol as keys
// In map you can use anything as keys like array number strings

*/

const person = new Map();
person.set("firstName", "Vaishnao");
person.set("age", 21);
person.set(1, "One"); // Now here 1 is a number key

//You can have anytype as key
// person.set([1, 2, 3], "oneTwoThree");
// person.set({ 1: "one" }, "Object");

// console.log(person);

// console.log(person["firstName"]); // It will give undefined as output because we cannot use this method to access elements in map.
// // We use get method to do so
// console.log(person.get("firstName"));
// console.log(person.get("age"));
// console.log(person.get(1));

// // console.log(person.keys()); // to print all the keys

// // It provides a mapIterator so we can iterate through keys and output one by one
// for (let key of person.keys()) {
//   console.log(key, typeof key);
// }

/* As maps are iterable we can use for of loop  here , unlike objects */

// for (let key of person) {
//   console.log(key);
//   // It will give output as an array of key value pairs.
//   // Ex - ['firstName', 'Vaishnao']
//   //      ['age', 21]
//   //      [1, 'One']
// }

// So we can use array destructuring to print key value seperately
// for (let [key, value] of person) {
//   console.log(key, value);
// }

// Directly assigning values to map
// const user = new Map([
//   ["firstName", "Vaishnao"],
//   ["age", 21],
// ]);

// console.log(user);

/* We have objects and want to store their extra information somewhere using map */

const person1 = {
  id: 1,
  firstName: "Vaishnao",
};

const person2 = {
  id: 2,
  firstName: "Vaishnavi",
};

const extraInfo = new Map();
extraInfo.set(person1, { age: 21, gender: "Male" });
extraInfo.set(person2, { age: 22, gender: "Female" });

// console.log(extraInfo);

// We can access the following properties from maps as shown
console.log(extraInfo.get(person1).age);
console.log(extraInfo.get(person2).age);
