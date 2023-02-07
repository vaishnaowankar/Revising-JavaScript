const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "Learn JavaScript";

// ul.append(li);
// ul.prepend(li);
// If you try to view the above two methods simultaneously they wont be applied together, one that comes after will be seen, because the li is a single node only.

// So we can clone the nodes to view both of them
const li2 = li.cloneNode(true);
// True is used for deep cloning , if not used you may see irregularities (textContent wont be seen);
ul.append(li);
ul.prepend(li2);
