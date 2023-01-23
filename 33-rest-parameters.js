// function myFunc(a, b, ...c) {
//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log("c is ", c);   // c will consist of rest of the parameters and will be an array
// }

// myFunc(2, 3, 4, 5, 6, 7, 8);

// ex - adding numbers in array

function addNumbers(...numbers) {
  // use the spread operator with the parameter you want to add rest parameters to.
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
}

let ans = addNumbers(13, 17, 20);
console.log(ans);
