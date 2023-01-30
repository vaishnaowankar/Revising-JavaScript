function play() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log("Hi , Thanks for calling me ");
      counter++;
    } else {
      console.log("I dont respond to anyone twice ");
    }
  };
}

const output = play();
output();
output();
output();
