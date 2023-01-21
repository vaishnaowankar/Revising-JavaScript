let fruits = ["apple", "banana", "mango", "orange"];
let fruits2 = [];

// printing fruits one by one in uppercase
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i].toUpperCase());
}

// copying items to another array
for (let i = 0; i < fruits.length; i++) {
  fruits2.push(fruits[i]);
}

console.log(fruits2);
