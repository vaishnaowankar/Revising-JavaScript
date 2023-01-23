// It is mostly used in React

const numbers = [2, 4, 5, 6, 10];

// aim : get sum of all numbers using reduce

/*
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;       // accumulator and currentValue are the documentation followed convention
}, 50);      // 50 here is the starting value provided to accumulator explicitly otherwise it will contain the first element of array. currenValue will contain the values of subsequent elements in array as we proceed.

console.log(sum);
*/

// lets understand the working of the aboev method

//Remember accumulator stores the previous returned value
// accumulator                currentValue             sum
//  50                           2                      52
//  52                           4                      56
//  56                           5                      61
//  61                           6                      67
//  67                           10                     77

//   Lets understand it with a real world example

const userCart = [
  { userId: 1, productName: "mobile", price: 12000 },
  { userId: 2, productName: "TV", price: 22000 },
  { userId: 3, productName: "Laptop", price: 52000 },
];

// now we want to find the sum of all product prices , so we can use reduce here.

const totalProductPrice = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
  // Remember the currentProduct here will give the whole object one by one (ex : { userId: 1, productName: "mobile", price: 12000 }, then other and so on ) and we need only price part of each object so we used dot method to extract the price.
}, 0);

console.log(totalProductPrice);
