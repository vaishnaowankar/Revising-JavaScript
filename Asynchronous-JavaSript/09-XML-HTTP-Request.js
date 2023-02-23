// We have 3 most common ways to create and send request to the server
// 1) xmlHTTPRequest (old way of doing)
// 2) Fetch API (new way of doing)
// 3) axios (this  is a third party library)

// Lets see the usage of xlHTTPRequest
const url = "https://jsonplaceholder.typicode.com/posts";

// Step 1 - create a xmlHttpRequest object
const xhr = new XMLHttpRequest();
// console.log(xhr);      // It will output an object that has various properties.

// We have two most imp properties of xhr readyState and onReadyStateChange , which shows the status of the request being processed

// Step 2 - we need to open the request means to make a request to the url
// before opening readyState = 0
// console.log(xhr.readyState);
xhr.open("GET",url);
// after opening readyState = 1;
// console.log(xhr.readyState);

// onReadyStateChange works for 2 3 and 4 state , 4 means operation is completed.
// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         const response = xhr.response;  // It gives the response in string type
//         // we need to parse that to JS object using JSON parser
//         const data = JSON.parse(response);
//         console.log(data);
//     }
// }

// Now we dont need to keep track of onreadystatechange to be 4
// We can make use of onload property as it runs only when the readystate becomes 4.
xhr.onload = function(){
    const response = xhr.response;   // // It gives the response in string type
    // we need to parse that to JS object using JSON parser
    const data = JSON.parse(response);
    console.log(data);
}

// Final step - we need to send the  request to get the response
xhr.send();