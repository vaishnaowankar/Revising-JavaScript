const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);

// adding classes via javascript
sectionTodo.classList.add("bg-dark");

// Removing classes via javascript
sectionTodo.classList.remove("bg-dark");

// We can check if the element contains any class or not
const output = sectionTodo.classList.contains("container");
console.log(output);

// We can use toggle to switch between different properties
// USing something reverts the active property
sectionTodo.classList.toggle("bg-dark"); // will add the class
sectionTodo.classList.toggle("bg-dark"); // will remove the class

// Remember to deal with specificity of CSS declarion of classes as there may be a problem of overwriting and you dont see the desired changes.
