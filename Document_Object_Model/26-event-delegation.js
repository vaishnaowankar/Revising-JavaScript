const grandParent = document.querySelector(".grandparent");

grandParent.addEventListener("click", (event) => {
  //   console.log("You clicked grandparent");
  console.log(event.target);
});
// You need not create seperate eventlisteners for the parent and childs because we can access them through target properties of grandparent object. This is known as event delegation.

// Though we have added event listener only to grandparent box , it will be revoked after clicking parent as well as child box
