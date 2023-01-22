// let and const are block scope variables
// var is a function scope variable

{
  let firstName = "Vaishnao";
  console.log(firstName);
}

// If we try to access the variable firstName outside the scope {} we will get error because let works only in blocks defined. Similar is for const

// But var is a function scope , i.e it is accessible anywhere in a function scope
function myApp() {
  if (true) {
    var firstName = "Vaishnao";
    console.log(firstName);
  }

  if (true) {
    console.log(firstName);
  }

  console.log(firstName);
}

myApp(); // All three firstNames will be printed because var is a function scope based
