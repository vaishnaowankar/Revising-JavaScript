const person = {
  name: "Vaishnao",
  age: 21,
  hobbies: ["Reading", "Football", "Design"],
};

// 1 method - using for in loop
for (let key in person) {
  console.log(person[key]);
}

// to access as key : value pairs
for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}

// 2 method - using object.keys
console.log(Object.keys(person));
//Remember Object.keys return an array, we can check
console.log(Array.isArray(Object.keys(person)));

// So now that it gives array we can use for of loop to access values
for (let key of Object.keys(person)) {
  console.log(person[key]);
}
