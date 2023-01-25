/*

function about(hobby, favSinger) {
  console.log(this.firstName, this.age, hobby, favSinger);
}

const person1 = {
  firstName: "Vaishnao",
  age: 21,
};

const person2 = {
  firstName: "Arpit",
  age: 22,
};

// using call
about.call(person1, "football", "Rishi Singh");

// using apply - same as call just takes extra parameters in a array
about.apply(person2, ["Travelling", "Arijit"]);

// bind - returns a function to be used later
const func = about.bind(person1, "Design", "Rishi Singh");
// You can then call this function whenever needed.
func();


*/

const person1 = {
  firstName: "John",
  age: 21,
  about: function (hobby, favSinger) {
    console.log(this.firstName, this.age, hobby, favSinger);
  },
};

const person2 = {
  firstName: "Vaishnao",
  age: 20,
};

// Suppose you want to call about function but for person2 you can use call function
person1.about.call(person2, "Singing", "Rishi Singh");

// If you dont put any parameter in call it will output as undefined. So if you are using call it is necessary to put a parameter.
