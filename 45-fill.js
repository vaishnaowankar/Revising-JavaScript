// fills certain values in array either whole or some

/* first use 
// creating a array of some size that contains same values

const myArray = new Array(10).fill(0);
console.log(myArray);
 
// will create a array of size 10 that has all values as 0

*/

/* Second use - changing the values in already exisitng array to some new value  */
const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
// we aim to change 3,4,5 to 0
myArray.fill(0, 2, 5); // Syntax - myArray.fill(valueToInsert, startingIndex , endingIndex(one higher than required one))
console.log(myArray);

// fill method changes the original array.
