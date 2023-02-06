const link = document.querySelector("a");

// we can check the values of attribute of elements
console.log(link.getAttribute("href"));

// we can change the value of attributes also
link.setAttribute("href", "https://apple.com");
console.log(link.getAttribute("href"));

// If you want to ignore the # from link use slice
console.log(link.getAttribute("href").slice(1));
