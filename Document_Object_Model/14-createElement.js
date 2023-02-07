// As we saw that innerHTML is not the best way to add elements in document , so here we will see those ways.

const newTodoList = document.createElement("li");
// one way to put content in element
// const newTodoListText = document.createTextNode("Learn JavaScript");
// another way to put content in element
newTodoList.textContent = "Learn JavaScript";
// newTodoList.appendChild(newTodoListText);  // appendChild was used earlier
// newTodoList.append(newTodoListText); // append replaced appendChild , both are same actually

// Now we need to add the created li in our ul class
const todoList = document.querySelector(".todo-list");
todoList.append(newTodoList);

todoList.prepend(newTodoList); // will add the new item before the existing item.

// todoList.remove();    // will remove the entire class
const todo1 = document.querySelector(".todo-list li");
todo1.remove(); // will remove the first li item

// We can use before and after methods to add elements before and after of any element
// EX:- adding li before and after ul(todo-list class) element
todoList.before(newTodoList);
todoList.after(newTodoList);
