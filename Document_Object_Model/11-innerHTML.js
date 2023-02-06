// All the elements inside a selected query are known as innerHTMLs.

const heading = document.querySelector(".heading");
console.log(heading.innerHTML);

// We can change the innerHTML if we want
heading.innerHTML = "<h1>Inner HTML changed</h1>";
heading.innerHTML += '<button class="btn">Learn More</button>';
// Notice the += sign , we are adding the HTML with the previous one.
// Remember to use escape character if Inverted commas needs to be nested.
// heading.innerHTML += "<button class=\"btn\">Learn More</button>"";
