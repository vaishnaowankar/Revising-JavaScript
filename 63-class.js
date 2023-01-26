// Class keyword was introduced in ES6 to reduce the workload of creating prototypes seperately
// Class can contain constructor and methods and objects of class needs to be created using "new" keyword

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.address = address;
    this.age = age;
  }

  about() {
    return `${this.firstName} is ${this.age} years old.`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "Unstoppable";
  }
}

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

console.log(user1);
console.log(user2.sing());
console.log(user1.is18());
