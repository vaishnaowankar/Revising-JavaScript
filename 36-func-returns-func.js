function myFunc1() {
  function myFunc2() {
    console.log("Hello World");
  }
  return myFunc2;
}

const output = myFunc1(); // output here contains the whole function (myFunc2) returned by myFunc1.
output(); // call the output to get the content in myFunc2, if it returns something then do console.log(output())
