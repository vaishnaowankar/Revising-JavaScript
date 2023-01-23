// filter also returns an array and takes callback as parameter

const numbers = [1, 3, 2, 4, 8, 6, 7, 12, 9];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);

// All othe ways can be applied to it as well like map .
