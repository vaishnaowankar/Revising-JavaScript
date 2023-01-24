/* basic example 
const numbers = [3, 5, 8, 9];

const output = numbers.some((number) => number % 2 === 0);
console.log(output);

// some return true if any of the value returned by callback is true otherwise it returns false.
// above program will return true as 8 satisfies the condition
*/

/* real-life example - findind if price of any item exceeds 100000 */

const productCart = [
  { productId: 1, productName: "p1", price: 12000 },
  { productId: 2, productName: "p4", price: 22000 },
  { productId: 3, productName: "p3", price: 220000 },
];

const output = productCart.some((product) => product.price > 100000);
console.log(output);
