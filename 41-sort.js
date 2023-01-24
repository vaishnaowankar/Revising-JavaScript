/*
const numbers = [12, 8, 400, 3000, 1200];
numbers.sort();
// Remember that sort changes the original array.
console.log(numbers);

// Expected ouput - 8,12,400,1200,3000
// Actual ouput - 12,1200,3000,400,8
// The reason is sort function sorts the values taking them as strings. Means it assumes 12 as "12" and sorts according to the ASCII value of first character.

*/

/*

// To achieve what we want we need to pass  a callback to the sort function

const numbers = [12, 8, 400, 3000, 1200];
numbers.sort((a, b) => {
  return a - b; // for sorting in ascending order
});
console.log(numbers);

numbers.sort((a, b) => {
  return b - a; // for sorting in descending order
});
console.log(numbers);

*/

/* Real-life example - sorting of pricing on ecommerce sites */

const userCart = [
  { userId: 1, productName: "p1", price: 12000 },
  { userId: 2, productName: "p2", price: 4000 },
  { userId: 3, productName: "p3", price: 800 },
  { userId: 4, productName: "p4", price: 22000 },
  { userId: 5, productName: "p5", price: 1000 },
];

// As sort changes the original array , we dont want that as we want products to remain same but only sort them according to price , so we will be using the slice method to make a copy os userCart and then sort.

const lowToHigh = userCart.slice(0).sort((a, b) => {
  return a.price - b.price;
});

console.log(lowToHigh);

const highToLow = userCart.slice(0).sort((a, b) => {
  return b.price - a.price;
});

console.log(highToLow);
