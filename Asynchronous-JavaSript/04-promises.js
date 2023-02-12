console.log("Script Start");
const bucket = ["coffee", "chips","vegetables","salt","rice"];

// We are producing the Promise below , it needs to be consumed later
const friedRicePromise = new Promise((resolve, reject) => {
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"fulfilled"})
        // It can take any value like string,object,array.
    }else{
        reject("Could not deliver");
    }
})

// Resolve and Reject are the parameters need to passed to callback function to Promise.
// Resolve executes when it successfully performs and reject executes when there is an error.

// Consuming the promise
friedRicePromise.then((myFriedRice)=>{
    console.log("lets Eat Fried Rice",myFriedRice);
}).catch((error)=>{
    console.log(error);
})

// Remember The promise is handle by browser not by JS engine hence it behaves like asynchronous way.
// It is stored in Microtask Queue which has higher priority than callback Queue.
// So if something is ready in both callback Queue and microtask Queue , microtask queue will be executed first

// Ex:
setTimeout(()=>{
    console.log("Hello form setTImeout");
},0);

for(let i=0 ; i<100 ; i++){
    console.log(Math.random(),i);
}

console.log("Script End");

//  You will observe that the Promise content will be output first and then setTimeout one.