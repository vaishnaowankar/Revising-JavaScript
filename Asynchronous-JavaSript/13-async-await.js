const URL = "https://jsonplaceholder.typicode.com/posts";

// wrting async before a function makes it to return a promise
// async function getPosts(){
//     const response = await fetch(URL);  // await will wait for the fetch function to execute first then move forward
//     if(!response.ok){
//         throw new Error("Something went wrong");
//     }
//     const data = await response.json();
//     return data;  // remember data is being returned as a promise its not actual data we need to resolve using then method.
// }

// Using arrow functions
// write async before parenthesis
const getPosts = async()=>{
    const response = await fetch(URL);  // await will wait for the fetch function to execute first then move forward
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;  // remember data is being returned as a promise its not actual data we need to resolve using then method.
}


getPosts()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Inside catch");
        console.log(error);
    })