// const userMethods = {
//     about: function () {
//       return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18: function () {
//       return this.age >= 18;
//     },
//   };

// Remember **** -> __proto__ and prototype are two different things.

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype); // Here the __proto__ will be the prototype of function
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.address = address;
  user.age = age;
  return user;
}

// As we learnt that functions provide us prototypes to store properties so why not use them
createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  return "Unstoppable";
};

const user1 = createUser(
  "Vaishnao",
  "Wankar",
  "vaishnao@gmail.com",
  21,
  "India"
);

const user2 = createUser(
  "Vaibhav",
  "Shirole",
  "vaibhav@gmail.com",
  22,
  "India"
);

console.log(user1); // We will be able to see the [[Prototype]] object by doing so that contains about and is18 methods.
console.log(user1.about());
console.log(user2.is18());
console.log(user1.sing());
