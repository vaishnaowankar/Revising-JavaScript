// Text Content is used to grab the text of any element

const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading.textContent);

// Remember textContent will show all the text inside element targeted whether it is displayed on screen or not.

const specificMainHeading = document.querySelector("#main-heading");
console.log(specificMainHeading.innerText);

// innerText will only display the text that's shown on screen , if something is hidden it wont be displayed.

// Also we can change the textContent
mainHeading.textContent = "Its fun coding JS";
console.log(mainHeading);
