function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.address = address;
  user.age = age;
  user.about = function () {
    return `${firstName} is ${age} years old.`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

// creating objects
const user1 = createUser(
  "Vaishnao",
  "Wankar",
  "vaishnao@gmail.com",
  21,
  "India"
);
console.log(user1);
const aboutInfo = user1.about();
console.log(aboutInfo);
const is18 = user1.is18();
console.log(is18);

// This is just an example code of how to create objects using functions but there are many drawbacks of this which we will improve as we proceed.
