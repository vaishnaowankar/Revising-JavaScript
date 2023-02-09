// Event is basically a function that is called when the user clicks  on the button.
// There are several events which you can refer on MDN reference page.

const btn = document.querySelector(".btn-headline");
// console.log(btn);

// btn.addEventListener("click", function () {
//   console.log("You clicked me !!!");
// });

// Using arrow functions
btn.addEventListener("click", () => {
  console.log("You clicked me using arrow functions");
});

// There are two more ways to add events to js file but the above mentioned is modernly used and is the best one .
