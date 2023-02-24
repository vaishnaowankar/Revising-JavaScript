const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method,url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = ()=>{
            if(xhr.status >= 200 && xhr.status <300){
                resolve(xhr.response);
            }else{
                reject(new Error("Something went wrong"));
            }
        }
        xhr.onerror = ()=>{
            reject(new Error("Some error occured"));
        }
        xhr.send();
    })
}

// As sendRequest returns a promise we can use a promise chaining to achieve the data of the specific path.
sendRequest("GET",URL)
    .then(response =>{
        const data = JSON.parse(response);
        return data  // Here it will return as promise with respect to data.
    })
    .then(data => {
        const id = data[3].id;
        return id;
    })
    .then(id => {
        const url = `${URL}/${id}`;
        return sendRequest("GET",url);
    })
    .then(newResponse =>{
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
    .catch(error=>{
        console.log(error);
    })

// Using the promise chaining we need not create another sendRequest method inside other , hence promise makes it easy.