const todoList = document.querySelector(".todo-list");

todoList.innerHTML += "<li>Learn JavaScript</li>"; // should be avoided ( adding new elements )

// Remember adding new elements using innerHTML has performance issue so you should not use it to add new elements.
// You should use innerHTML only when you want to change the content of any existing element.
