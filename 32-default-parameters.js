function addTwoNumbers(a, b = 0) {
  // If the value of b is not given it will takes the default set value which is 0 here.
  return a + b;
}

let ans = addTwoNumbers(4);
console.log(ans);
