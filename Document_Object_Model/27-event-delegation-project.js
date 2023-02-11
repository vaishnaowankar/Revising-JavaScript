// Use it with index.html file
// We will add the functionality to our to do list using event delegation

// there is a submit event on forms , so we will select the form first
const todoForm = document.querySelector(".form-todo");

// To get the value entered by the user in the text box we will select the text input from form
const todoInput = document.querySelector(".form-todo input[type='text']");

// Selecting ul element to append the user inserted value in the form of li
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault(); // To prevent the page from refreshing after hitting submit button...it is very important
  const newTodoText = todoInput.value;
  //   value will give the user inputed text
  const newLi = document.createElement("li");
  const newLiInnerHTML = `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;
  newLi.innerHTML = newLiInnerHTML; // Changing the content inside the li item.
  todoList.append(newLi);
  todoInput.value = ""; // Resting the value inside text form of todo input box.
});

// Now using the concept of event delegation we will just add event listener to ul element and handle the done and remove button accordingly.
todoList.addEventListener("click", (event) => {
  // classList gives the class names that an element has , conatains is used to check if the class is present.
  if (event.target.classList.contains("done")) {
    // we need to change the text of span which is previous sibling to parent of done element
    const liSpan = event.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
  if (event.target.classList.contains("remove")) {
    // we need to change the text of span which is previous sibling to parent of done element
    const targetedLi = event.target.parentNode.parentNode; // Basically selecting the li element to remove.
    targetedLi.remove();
  }
});
