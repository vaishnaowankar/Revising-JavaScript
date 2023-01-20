let winningNumber = 19;
let guess = +prompt("Guess a number: "); //Remember prompt takes input as string so add + to convert to number.

if (guess === winningNumber) {
  console.log("You guessed it right.");
} else {
  if (guess < winningNumber) {
    console.log("too low.");
  } else {
    console.log("too high.");
  }
}
