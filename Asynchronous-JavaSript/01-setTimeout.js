// Remember JS is synchronous and single threaded language
// But we can add asynchronous behaviour to JS using some methods.

console.log("Script Started");

// Syntax - setTimeout(function,minimumTimeDelay in ms);
// It returns some id.
const id = setTimeout(() => {
  console.log("setTimeout printed");
}, 1000);
// setTimeout function is handled by webAPIS of the browser, hence it is used to achieve the asynchronous behaviour of the program.
// Whenever JS engine encouters such methods it send it to webAPIS to handle and doesnt hinder the further processing of program.
// When webAPI finishes the execution it sends the method to callback queue and "eventloops" checks if the execution stack has no process running and then can run this method present in "callback queue".

for (let i = 0; i < 1000; i++) {
  console.log("........");
}

// Now suppose we dont want the setTimeout method to execution we can clear it as it returns the id.
console.log("SetTimeout id is ", id);
console.log("Clearing time out");
clearTimeout(id); // setTimeout method wont be printed.
console.log("Script Ended");
