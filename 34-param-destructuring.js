// It is used with objects
// It is widely used in React

const person = {
  firstName: "Vaishnao",
  gender: "Male",
};

// // Normal way
// function personDetails(obj) {
//   console.log(obj.firstName);
//   console.log(obj.gender);
//   console.log(obj.age);    // It will output as undefined because such propertie does not exist
// }

// personDetails(person);

// Using param Destructuring

function personDetails({ firstName, gender, age }) {
  console.log(firstName);
  console.log(gender);
  console.log(age);
}

personDetails(person);

// same as above
