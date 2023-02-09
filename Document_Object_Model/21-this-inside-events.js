const btn = document.querySelector(".btn-headline");

// btn.addEventListener("click", function () {
//   console.log("You clicked me");
//   console.log("Value of this");
//   console.log(this);
// });

// As we know that in case of simple or anonymous function the value of this is the object itself that calls it , in this case it is button so , here the value of this will be button.

// But in case of arrow functions , it is one level up where the function is defined.
btn.addEventListener("click", () => {
  console.log("You clicked me");
  console.log("Value of this");
  console.log(this);
});
// So in this case the value of this will be the window object.
