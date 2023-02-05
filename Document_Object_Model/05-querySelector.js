// Using querySelector we can select any element from HTML file

const mainHeading = document.querySelector("#main-heading");
const header = document.querySelector(".header");
const navItem = document.querySelector(".nav-item");
// Note as we can have same class name for different elements but we will be getting only the first element of the class name.
console.log(navItem);

// to get all the elements we need to use querySelectorAll
const allNavItems = document.querySelectorAll(".nav-item");
console.log(allNavItems);

// It will give a node list of elements that looks like array but is not an array.
