function app() {
  const myFunct = () => {
    console.log("Hello from myFunc");
  };

  const addNumbers = (number1, number2) => {
    return number1 + number2;
  };

  const hello = () => console.log("Hello World!");

  console.log("inside app");

  // You need to call the functions inside function
  // will be executed in order by the app() called outside.
  myFunct();
  console.log(addNumbers(3, 6));
  hello();
}

app();
