// Methods or properties declared using static keyword are instances of this class and can be called using class name only.
// They cannot be called using class objects.
// Similarly normal methods and properties are usable with class objects.

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // static method
  static initialize() {
    return `Just an example to show static usage`;
  }

  // static property
  static desc = "Person is handsome";

  walk() {
    return `${this.firstName} goes to walk daily.`;
  }
}

const Person1 = new Person("Vaishnao", "Wankar", 21);
console.log(Person1.walk()); // It will work properly
// console.log(Person1.initialize());   // this will give error because objects cannot call Static methods and properties
// console.log(Person. walk());         // This will give error because class can call only static methods and properties
console.log(Person.initialize());
console.log(Person.desc);
