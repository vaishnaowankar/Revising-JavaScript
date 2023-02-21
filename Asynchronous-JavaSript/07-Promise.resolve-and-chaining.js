
// Promise.resolve()
// const myPromise = Promise.resolve(5); // It will print whatever the parameter is being passed
// Promise.resolve(5).then(value=>{
//     console.log(value);
// })

// Promise chaining

// Remember the then() in Promise always returns a promise which gives us a way to chain promises

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}

myPromise().then((value)=>{
    console.log(value);
    value += "bar";
    return value;
}).then((value)=>{
    console.log(value);
    value += "baaz";
    return value;
}).then((value)=>{
    console.log(value);
})