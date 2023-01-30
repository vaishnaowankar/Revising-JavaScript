// We know that function can return a function

function fullName(firstName, lastName) {
  function printName() {
    console.log(firstName + " " + lastName);
  }
  return printName();
}

const output = fullName("Vaishnao", "Wankar");
// Note that output contains the printName function returned by fullName
// So we need to call it.
output();

// Now when we look at the function execution context of the printName function we find that their are no arguments in the arguments list as it uses the arguments of fullName function, but still it is able to give the required output.

// This is because printName function as it is present in the fullName function takes the arguments of fullName function along with it as it is returned and it stores them in its closures.
// Thus closures are the parallel storage concept for returned function to access the necessary data from its parents.
