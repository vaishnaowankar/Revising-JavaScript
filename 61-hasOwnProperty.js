function CreateUser(firstName, lastName, email, age, address) {
  // const user = Object.create(createUser.prototype); // no need of this line now
  this.lastName = lastName;
  this.firstName = firstName;
  this.email = email;
  this.address = address;
  this.age = age;
  // return user;     // no need to return explicitly as new does it automatically
}

// As we learnt that functions provide us prototypes to store properties so why not use them
CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.sing = function () {
  return "Unstoppable";
};

const user1 = new CreateUser(
  "Vaishnao",
  "Wankar",
  "vaishnao@gmail.com",
  21,
  "India"
);

const user2 = new CreateUser(
  "Vaibhav",
  "Shirole",
  "vaibhav@gmail.com",
  22,
  "India"
);

//   console.log(user1); // We will be able to see the [[Prototype]] object by doing so that contains about and is18 methods.
//   console.log(user1.about());
//   console.log(user2.is18());
//   console.log(user1.sing());

// When we will try to read keys of user1 it will output the keys in prototype as well for ex, about,is18 and sing.
// But if we want only the keys in its function then we use hasOwnProperty.
for (let key in user1) {
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
}
