const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
};
// When these methods were defined in same function therefore on calling for every object a new copy of it was being formed. Defining them seperately as a object helps to create just a one copy and provide their reference(address) in funcitons so that no duplicates are created.

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.address = address;
  user.age = age;
  user.about = userMethods.about; // these references to the object methods.
  user.is18 = userMethods.is18; // these references to the object methods.
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

const user3 = createUser("Arpit", "Amborkar", "Arpit@gmail.com", 21, "India");

console.log(user1.about());
console.log(user3.about());
