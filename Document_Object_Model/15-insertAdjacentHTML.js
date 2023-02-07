// There are more methods to create elements but the one that are used in previous file are used by most developers.
// Stick to any one type.

// In this way to create elements we can directly add the html element after querying the necessary element.
const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend", "<li> Learn JavaScript </li>"); // acts like append
todoList.insertAdjacentHTML("afterbegin", "<li> Learn JavaScript </li>"); // acts like  prepend
todoList.insertAdjacentHTML("afterend", "<li> Learn JavaScript </li>"); // acts like after
todoList.insertAdjacentHTML("beforebegin", "<li> Learn JavaScript </li>"); // acts like before
