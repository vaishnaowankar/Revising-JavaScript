function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(13));

// Function to find element in array
function findElement(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

let myArray = [1, 8, 9, 90];
let output = findElement(myArray, 9);
console.log(output);
