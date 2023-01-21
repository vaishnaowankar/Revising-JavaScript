// Objects are of reference type
// Arrays are not sufficient to work with real world objects so objects came to rescue
// Objects dont have index
// They use key value pairs

// declaring an object
const person = {
  name: "Vaishnao",
  age: 21,
  hobbies: ["Reading", "Football", "Design"],
};

// Accessing objects

// using . notation
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

// using [] notation
console.log(person["name"]); // Remember to use "" for the key as js bydefault stores them as strings
console.log(person["age"]);
console.log(person["hobbies"]);

// Adding elements to objects

// using . notation
// person.gender = "male";

// using [] notation
// person["gender"] = "male";

console.log(person);
