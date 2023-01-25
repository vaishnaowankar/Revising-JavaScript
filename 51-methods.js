// Methods - functions inside objects

/* Basic Example 

const person = {
  firstName: "Vaishnao",
  age: 21,
  about: function () {
    // console.log(`My name is ${firstName} and my age is ${age}`);   //this will give error
    console.log(`My name is ${this.firstName} and my age is ${this.age}`); // this represents the object calling the function.
  },
};

person.about();
*/

/* Example to understand this keyword better */

function personInfo() {
  console.log(`My name is ${this.firstName} and my age is ${this.age}`);
}

const person1 = {
  firstName: "Vaishnao",
  age: 21,
  about: personInfo,
};
const person2 = {
  firstName: "Vaishnavi",
  age: 22,
  about: personInfo,
};
const person3 = {
  firstName: "Arpit",
  age: 21,
  about: personInfo,
};

person1.about(); // As person1 calls the function this will represent the person1 and print its properties
person2.about(); // Here this represents person2
person3.about(); // Here this represents person3
