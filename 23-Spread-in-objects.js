const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = {
  key1: "valueDifferent",
  key3: "value3",
  key4: "value4",
};

const newObject = { ...obj1, ...obj2 };
console.log(newObject);

// Remember objects only have unique keys , so when you merge two objects and keys collide the later object in order's key will be considered.

const newObject2 = { ...obj1, ...obj2, key24: "value24" };
console.log(newObject2);

const newObject3 = { ..."abcdefghijklmnopqrstuvwxyz" };
console.log(newObject3);
// This will spread all letters in the object and the keys will be the numbers starting from 0 ,,, 0:a , 1:b and so on.

const newObject4 = { ...["item1", "item2"] };
console.log(newObject4);
// This too will spread the array with numbers as keys starting from 0.
