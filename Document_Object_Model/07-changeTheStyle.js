// aim to change the color and background color of main heading.

const mainHeading = document.querySelector("div.heading h2");

// console.log(mainHeading.style);
// It gives all the style properties for mainHeading that can be modified

// Changing the style
mainHeading.style.color = "yellow";

// Now note the properties that contain - in css must be written as camelCase in JS , Ex:
mainHeading.style.backgroundColor = "purple";
mainHeading.style.border = "5px solid green";
