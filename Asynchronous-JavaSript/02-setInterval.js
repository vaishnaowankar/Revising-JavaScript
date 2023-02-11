// setInterval is same as that of setTimeour , only that it runs for multiple number of times.

console.log("Script started");

const intervalId = setInterval(() => {
  console.log("Excited.....");
});

console.log("Script finished");
clearInterval(intervalId);
