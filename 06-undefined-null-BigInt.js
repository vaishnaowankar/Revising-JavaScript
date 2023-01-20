/* undefined */

// let firstname;
// when we dont initialise a variable it is of type undefined

/* null */

// let firstName = null;
// null simply means nothing

//Error, bug in null in JS
// When we will try to find out typeof null it gives as object , but it is not that actually. Its not solved by JS because many projects will face a problem if solved.

/* BigInt */
// There is a limit in JS for a number datatype
// console.log(Number.MAX_SAFE_INTEGER);
// If we want to use number higher than this , we need to use bigint.
let myNumber = BigInt(1234567940343032); //one way
let myAnotherNUmber = 23819748937n; //another way adding n at the end
console.log(myNumber);
console.log(myAnotherNUmber);

//Remember we can add only bigint numbers with other bigint number ,change in datatype will result in error.
