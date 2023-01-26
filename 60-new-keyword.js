// New keyword does three things
// 1- it creates an empty object and asiign it to this, i.e this = {};
// 2- It then adds the required arguments to the object and also returns the object 
// 3- It automatically assigns the __proto__ of the function to the object as soon as it is created , we dont need to use Object.create() to do so.


// Lets see the improvements

// Whenever we want to let developers know that the function needs to be called using new keyworkd we write first letter of the function name as capital instead of camelCase.
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
  
  console.log(user1); // We will be able to see the [[Prototype]] object by doing so that contains about and is18 methods.
  console.log(user1.about());
  console.log(user2.is18());
  console.log(user1.sing());
  