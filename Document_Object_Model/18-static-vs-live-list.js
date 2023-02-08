// const listItems = document.querySelectorAll(".todo-list li");
// const sixthItem = document.createElement("li");
// sixthItem.textContent = "item 6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthItem);
// console.log(listItems);

// The point is that item 6 will be added on the website but the nodeList returned by querySelectorAll will have only previous 5 elements. Therefore querySelectorAll will give us static list.

// Live list is given by getElementBySomething (something here represents id,class etc).

const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");
// will select all the li inside ul
const sixthItem = document.createElement("li");
sixthItem.textContent = "item 6";
ul.append(sixthItem);
console.log(listItems);
// Here the li items will be added in the HTML collection as well returned by getElementsByTagName method.
