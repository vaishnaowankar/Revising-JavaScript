// We saw in previous file that we needed to pass the reference for each method in function to use them.
// Suppose we keep on adding new methods in our userMethod object then we will have to add their references as well, which is a tedious task.
// So to solve this headache we use Object.create method that creates a __proto__ object of userMethods for function.
// Means if the methods are not found in the function it will check in its __proto__ object which is userMethods.

// Also remember __proto__ and [[Prototytpe]] are same .

const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethods); // It creates an empty object with __proto__ set as userMethds
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.address = address;
  user.age = age;
  return user;
}

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
