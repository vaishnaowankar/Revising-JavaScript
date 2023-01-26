class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  isCute() {
    return this.age <= 1;
  }
}

// As we know cat , dog or any other animals will inherit some properties an methods from Animal class.
// So instead of writing the properties and methods again for the subclass (cat,dog) we can inherit them from base class (Animals) using "extends" keyword

class Dog extends Animal {
  // You can add any different properties and methods if required for dog class.
  // It will now have all the properties and methods defined in Animal class.
}

const tommy = new Dog("Tiger", 9);
console.log(tommy);
console.log(tommy.eat());
// Everything will work fine.
