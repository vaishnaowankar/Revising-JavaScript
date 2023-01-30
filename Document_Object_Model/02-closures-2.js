function hello(x) {
  const a = "varA";
  const b = "varB";
  return function () {
    console.log(a, b, x);
  };
}

const output = hello("people");
output();

// Just another example to understand closure
