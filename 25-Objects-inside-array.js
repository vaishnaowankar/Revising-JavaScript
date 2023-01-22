// This is a very useful concept in real world applications

const users = [
  { userId: 1, firstName: "Vaishnao", gender: "Male" },
  { userId: 2, firstName: "Vaishnavi", gender: "Female" },
  { userId: 3, firstName: "Arpit", gender: "Male" },
];

// You can loop through array and get the required output , Ex if you want users firstName.
for (let user of users) {
  console.log(user.firstName);
}
