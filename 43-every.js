/* Basic Example 
const numbers = [2, 4, 6, 8, 10];

const ans = numbers.every((number) => number % 2 === 0);

// callback ----> return true or false
// every ----> returns true if callback return true for all elements in array otherwise false.

console.log(ans);

*/

/* real-life example  -- finding if product price is below 30000 in cart */

const userCart = [
  { productId: 1, productName: "p1", price: 30000 },
  { productId: 2, productName: "p2", price: 15000 },
  { productId: 3, productName: "p3", price: 18000 },
];

const output = userCart.every((cartItem) => cartItem.price < 30000);
console.log(output);
