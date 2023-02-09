const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons);

// Now we can use simple for loop , for of loop as well as forEach loop to add same eventlistener to all three buttons.

// simple for loop
// for (let i = 0; i < allButtons.length; i++) {
//   allButtons[i].addEventListener("click", function () {
//     console.log("You clicked me");
//   });
// }

// We can make use of this property to print the content of each button
// for of loop
// for (let button of allButtons) {
//   button.addEventListener("click", function () {
//     console.log(this.textContent);
//   });
// }
//  Remember using arrow functions will change the behaviour

// forEach loop
allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log(this.textContent);
  });
});
