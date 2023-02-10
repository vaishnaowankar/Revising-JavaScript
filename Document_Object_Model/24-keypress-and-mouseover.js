const body = document.body;

body.addEventListener("keypress", (event) => {
  console.log(event.key);
});
// When you press any key on the keyboard on the webpage , it will show that key properties.

const mainButton = document.querySelector(".btn-headline");

mainButton.addEventListener("mouseover", () => {
  console.log("mouseover event occurred!!!");
});
// When you hover a button the event occurs
mainButton.addEventListener("mouseleave", () => {
  console.log("mouseleave event occurred!!!");
});
// When you move the cursor out of the button this event occurs.
