// Sometimes the properties may not exist in the objects but may be inserted later , so to avoid the error in meanwhile we use optional chaining

const person = {
  firstName: "Vaishnao",
  //   address: { houseNumber: 201 },
};

// console.log(person.firstName);
// console.log(person.address.houseNumber);
// This will work fine if address is present

// But if address is not present

// console.log(person.address.houseNumber);    // It will give error - undefined for address and typeError for houseNumber

// So we use optional chaining means adding ? before the dot operator
console.log(person?.firstName);
console.log(person?.address?.houseNumber);
// Now it will check if address is present, as soon as it sees it is not it outputs as undefined and doesnt proceed saving us from getting error.
