const singHappyBirthday = () => {
  console.log("Happy birthday to you....");
};

singHappyBirthday();

// const isEven = (number) => {
//   return number % 2 === 0;
// };

// console.log(isEven(12));

// We can avoid using () and {} and return keyword if we have just one parameter and one statement.
const isEven = (number) => number % 2 === 0;
console.log(isEven(12));

const findElement = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

let myArray = [1, 3, 5, 8, 9];
console.log(findElement(myArray, 9));
