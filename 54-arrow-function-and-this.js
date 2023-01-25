// this doesnt work similar with arrow functions as normal funcitons.

const person1 = {
  firstName: "Vaishnao",
  age: 21,
  about: () => {
    console.log(this.firstName, this.age);
  },
};

person1.about(); // It will output as undefined undefined because arrow functions takes this object of its surronding means one level up.
// In this case the level up is the window object and this will represent the window object.
// You can even change the reference to this in arrow functions.

// *** Remember above points.

// Short syntax for declaring methods in object

// const person1 = {
//   firstName: "Vaishnao",
//   age: 21,
//   about(){
//     console.log(this.firstName, this.age);
//   },
//   // no need to write function just write the name and it will represent the function itself.
// };
