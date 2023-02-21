function friedRice(){
    const bucket = ["coffee", "chips","vegetables","salt","rice"];
    return new Promise((resolve, reject) => {
        if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
            resolve({value:"fulfilled"})
            // It can take any value like string,object,array.
        }else{
            reject("Could not deliver");
        }
    })
}

// Calling is same as a simple promise , only that we need to call a function with the name
friedRice().then((myFriedRice)=>{
    console.log("lets Eat Fried Rice",myFriedRice);
}).catch((error)=>{
    console.log(error);
})

