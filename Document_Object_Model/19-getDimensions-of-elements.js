// Way to get dimensions of any element

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect(); // It will give the object that contains all the dimensions .
// To get a specific dimension
const height = info.height;
console.log(info);
console.log(height); // so on
