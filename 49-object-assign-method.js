// Object.assign() is used to clone or make a copy of an object

const obj = {
  key1: "value1",
  key2: "value2",
};

// const obj2 = obj;
// doing so will point both obj and obj2 to same memory in heap and changes made to one will reflect in other
// So we need to clone the second obj so we can avoid this problem

// One method we saw is using spread operator
// const obj2 = {...obj1};

// Lets do it using Object.assign()
const obj2 = Object.assign({}, obj);
obj["key3"] = "value3";
console.log(obj);
console.log(obj2);
// Here changes made to obj will not reflect in obj2
