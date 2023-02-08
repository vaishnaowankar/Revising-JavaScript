//
// These are some old methods that support poor Internet Explorer

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "New Todo";
const referenceNode = document.querySelector(".first-todo");

// append child
// ul.appendChild(li);

// insertBefore
// ul.insertBefore(li, referenceNode);

// replaceChild
// ul.replaceChild(li, referenceNode);

// removeChild
// ul.removeChild(referenceNode);
