function hello() {
  console.log("Hello World");
}

// In javaScript functions = functions + objects (they can behave like objects)
// for example we can print the name of a function by using hello.name

// You can add your own property
// hello.myOwnProperty = "my own property";
// console.log(hello.myOwnProperty);

// Remember ** only functions provide prototype property

console.log(hello.prototype);
// prototype is actually a free space in terms of empty object provided by functions to add our own properties if needed.
// Ex
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function () {
  console.log("Unstoppable");
};

console.log(hello.prototype.sing());
