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
  // We want that dog class should have speed property and run method in addition to all that Animal has.
  // For this we need to create seperate constructor for Dog class
  constructor(name, age, speed) {
    // Now we can let Animal handle the name and age , for that we use super function
    super(name, age); // -> means name and age will be handles by base class here Animal
    this.speed = speed;
  }

  run() {
    return `${this.name} is running at ${this.speed}kmph`;
  }

  /* Important concept 
  If suppose you want that eat method should behave something differently for dog , then you can declare the eat method in Dog class as well, and javascript will first check it in Dog class when its called, as it will find it it will return the content in Dog class not in Animal class.
  */
}

const tommy = new Dog("Tiger", 9, 25);
console.log(tommy);
console.log(tommy.run());
// Everything will work fine.

// Another important concept
// If you create an object of class Animal then it will call the eat method of Animal class not of the dog class.
const Animal1 = new Animal("sheru", 5);
console.log(Animal1.eat());
