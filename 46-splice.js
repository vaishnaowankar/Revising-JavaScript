// splice is used to insert and delete any items from array
// It makes use of start , delete , insert parameters to do so

const myArray = ["item1", "item2", "item3"];

/* deleting items

const deletedItems = myArray.splice(1, 1);  // syntax -> myArray.splice(startingIndex , howManyItemsToDelete)
console.log(deletedItems);
console.log(myArray);

// Remeber it returns an array of deleted items as well and it changes the original array

*/

/* Insert a new item

myArray.splice(1, 0, "inserted Item");  // syntax -> myArray.splice(startingIndex , howManyItemsToDelete , itemToInsert)
console.log(myArray);

// will add inserted item at index 1

*/

/* Delete and insert at same time */

const deletedItems = myArray.splice(1, 2, "inserted item1", "inserted item2"); // syntax -> myArray.splice(startingIndex , howManyItemsToDelete , itemsToInsert)
console.log(deletedItems);
console.log(myArray);
