const band = {
  bandName: "One Direction",
  famousSong: "Night Changes",
  year: 2014,
  famousSinger: "Zain Malik",
};

// const { bandName, famousSong } = band;
// console.log(bandName, famousSong);
// Remember the variable names in the const should match the keys of the object.
// const {var1 , var2} = band;  will give undefined as output

// If you want to assign a separate variable for keys then you can do the following
const { bandName: var1, famousSong: var2 } = band;
console.log(var1, var2);

// To add other keys or properties to another object use spread operator
const { bandName, famousSong, ...restprops } = band;
console.log(restprops);
