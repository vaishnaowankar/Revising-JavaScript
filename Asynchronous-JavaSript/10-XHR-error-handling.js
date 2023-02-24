const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr  = new XMLHttpRequest();

xhr.open('GET', URL);


xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response);
        console.log(data);
        // Now if we want to visit specific path inside the given URL we can do by opening new XMLHTTPRequest for the same here but it is not recommended.
        // We do it using promises which is showm in next file.
    }else{
        console.log("Something went wrong");
    }
    
}

// Suppose we have a network issue , like internet is not working. then we can use onerror 
xhr.onerror = ()=>{
    console.log("Network error");
}
xhr.send();