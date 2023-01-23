function myFunc2(name) {
  console.log("Inside function 2");
  console.log(`my name is ${name}`);
}

function myFunc1(callback) {
  console.log("Hello World");
  callback("Vaishnao");
}

myFunc1(myFunc2);
// this is basically we pass another function as a parameter to the other function.
// This is passed whole as a function and we need to call it inside this function (here inside myFunc1).
// By convention we use callback as a parameter.
