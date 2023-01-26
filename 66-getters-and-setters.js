class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  // Using get we can call the functions/methods like properties without using ()

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" "); // Here split method will break the string with spaces and will create an array of words , using array destructuring we assign the values to firstName and lastName.
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // Set will help to automatically change the first and last name without adding it explicitly
}

const person1 = new Person("Vaishnao", "Wankar");
console.log(person1.fullName);
person1.fullName = "Arpit Amborkar"; // using setters
console.log(person1.firstName); // will change the firstName from Vaishnao to Arpit
console.log(person1.fullName); // will change the fullName to Arpit Amborkat
