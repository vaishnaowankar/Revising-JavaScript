const users = [
  { userId: 1, firstName: "Vaishnao", gender: "Male" },
  { userId: 2, firstName: "Vaishnavi", gender: "Female" },
  { userId: 3, firstName: "Arpit", gender: "Male" },
];

const [user1, user2, user3] = users;
console.log(user1); // will return object with properties of 1st user.

// If you want just the specific part of object like the firstName of user1 and gender of user3 then do the following:

// const [{ firstName }, , { gender }] = users;
// console.log(firstName);
// console.log(gender);

// You can change the variable name as well
const [{ firstName: user1firstName, userId }, , { gender: user3gender }] =
  users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);
