
const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch returns a promise that is resolved when the post has been fetched successfully .

fetch(URL,{
    method: 'POST',      // when we use POST method we tend to send the data to serve
    body: JSON.stringify({       // stringify converts the data object to JSON format.
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8', // headers are important to mention
    },
  })
    .then(response => {
        if(response.ok){
            return response.json();   // In fetch simply response returns an object that has a method known as json to fetch the data.
            // response.ok checks if the request was successful
         }else{
            throw new Error("Something went wrong!!!");   // If error is not thrown then the catch block below wont be executed until and unless its the network error.
         }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Inside Catch");
        console.log(error); 
    })
    // Now fetch wont show this error until any network issue occurs.