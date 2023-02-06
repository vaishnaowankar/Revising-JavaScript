// This concept will tell us the difference between accessing HTML collections and nodeList.

// let navItems = document.getElementsByTagName("a");
// console.log(navItems);
// It will return HTML collections

// We can use following loops with HTML collections
// simple for loop
// for of loop
// forEach loop but after converting it to array using special methods.

// using simple for loop
// for (let i = 0; i < navItems.length; i++) {
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "yellow";
//   navItem.style.color = "red";
// }

// //using for of loop
// for (navItem of navItems) {
//   navItem.style.backgroundColor = "yellow";
//   navItem.style.color = "red";
//   navItems.fontWeight = "bold";
// }

// using forEach loop
// To use this loop we need to first convert the HTML collections to perfecr array .
// To do it we use from method of Array class

// navItems = Array.from(navItems);   // Now navItems is an array
// console.log(Array.isArray(navItems));   // True
// navItems.forEach((navItem) => {
//   navItem.style.backgroundColor = "yellow";
//   navItem.style.color = "red";
//   navItems.fontWeight = "bold";
// });

// Now with nodeList the only difference is that we can use forEach loop without converting it to array.
let navItems = document.querySelectorAll("a");

navItems.forEach((navItem) => {
  navItem.style.backgroundColor = "yellow";
  navItem.style.color = "red";
  navItems.fontWeight = "bold";
});
