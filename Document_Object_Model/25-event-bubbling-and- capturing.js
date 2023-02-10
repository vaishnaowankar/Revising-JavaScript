const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Capturing occurs from body to child
// for capturing we need to set the third parameter of eventlistener as true.
child.addEventListener(
  "click",
  () => {
    console.log("Capturing on child");
  },
  true
);
parent.addEventListener(
  "click",
  () => {
    console.log("Capturing on parent");
  },
  true
);
grandParent.addEventListener(
  "click",
  () => {
    console.log("Capturing on grandParent");
  },
  true
);
document.body.addEventListener(
  "click",
  () => {
    console.log("Capturing on body");
  },
  true
);

// Bubbling occurs form child to body
child.addEventListener("click", () => {
  console.log("Bubbling on child");
});
parent.addEventListener("click", () => {
  console.log("Bubbling on parent");
});
grandParent.addEventListener("click", () => {
  console.log("Bubbling on grandParent");
});
document.body.addEventListener("click", () => {
  console.log("Bubbling on body");
});
