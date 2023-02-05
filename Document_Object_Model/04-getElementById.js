// When browser renders the html file it creates a document object in its window object which further contains objects of each elements described in html file.
// Thus we make use of document object to manipulate html file accordingly.

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);
// Remember it returns an object
console.log(typeof mainHeading);
console.dir(mainHeading);
