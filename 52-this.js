// this -> represents normally the window object

// console.log(this); // It will output the window object

// using this in function sometimes can give this window object which may be anomoly to our expected behaviour so to avoid this we use strict rules

"use strict";

function myFunc() {
  console.log(this);
}

myFunc(); // So now this will output as undefined as we used strict rules.
