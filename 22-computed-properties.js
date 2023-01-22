const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myValue1";
const value2 = "myValue2";

// We intend to create a obj that has properties like objkey1 : myValue1 but using their variables declared

// Normal way
/*
const obj = {}
obj[key1] = value1;
obj[key2] = value2;
*/

// Using computed properties
const obj = {
  [key1]: value1, // using square bracket with keys
  [key2]: value2,
};

console.log(obj);
