// Whenever an event listener is added to any element , two things happen
// Browser has js engine + some webAPIS
// 1) browser will give the callback function to js engine and start executing line by line
// 2) browser will also return the information about the event occured with the callback in the form of object.

const firstButton = document.querySelector("#one");
firstButton.addEventListener("click", function (event) {
  console.log(event);
  console.log(event.currentTarget);
  console.log(event.target);
});

// target and currentTarget are the two important properties of event object which will be useful in event bubbling and capturing.
