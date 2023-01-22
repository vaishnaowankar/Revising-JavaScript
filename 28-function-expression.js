// We assign a variable to behave like a function
// The name of the variable acts like a function name , for ex

const singHappyBirthday = function () {
  console.log("Happy Birthday to you.........");
};

singHappyBirthday();

const isEven = function (number) {
  return number % 2 === 0;
};

console.log(isEven(12));

const findElement = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

let myArray = [1, 8, 9, 90];
console.log(findElement(myArray, 90));
