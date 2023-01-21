const person = {
  name: "Vaishnao",
  age: 22,
  "person hobbies": ["Reading", "Football", "Design"], // Sometimes keys are required to be declared with spaces hence we need to add "" explicitly.
};

// dot notation becomes useless to access keys with spaces hence we need [] notation
console.log(person["person hobbies"]);

// Now we want to add the value assigned to a variable to our object as shown below
let key = "email";
// we intent to add as email : value but using key variable declared above

// Using dot notation to do so wont add email but it will add the key itsel
// person.key = "vaishnao@gmail.com"
// It will output as key : "vaishnao@gmail.com" , but we dont need this

// So here too [] notation is needed
person[key] = "vaishnao@gmail.com";
console.log(person);
