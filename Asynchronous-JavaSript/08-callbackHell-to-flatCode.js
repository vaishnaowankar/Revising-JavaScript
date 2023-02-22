const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

function changeText(element, text, color, time,) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
              element.textContent = text;
              element.style.color = color;
              resolve();
            }else{
                reject();
            }
          }, time);
        })
}

// As we know that then returns a promise we can make use of it to get rid of callback hell.
changeText(heading1,"one","red",1000)
    .then(()=>changeText(heading2,"two","green",1000))
    .then(()=>changeText(heading3,"three","blue",1000))
    .then(()=>changeText(heading4,"four","orange",1000))
    .then(()=>changeText(heading5,"five","brown",1000))
    .then(()=>changeText(heading6,"six","purple",1000))
    .then(()=>changeText(heading7,"seven","violet",1000))
    .then(()=>changeText(heading8,"eight","lightgreen",1000))
    .then(()=>changeText(heading9,"nine","pink",1000))
    .then(()=>changeText(heading10,"ten","darkblue",1000))
    .catch((error)=>{
        alert(error)
    }) // always check for error at the end.
    
// Above is the clean code version of promise chaining, whats actually happening is :-

// changeText(heading1,"one","red",1000)
//     .then(()=>{
//         return changeText(heading1,"one","red",1000)
//     })

// If we doesnt return return in then , it actually resolves the promise quickly and we wont see the time delay of one second, so we need to return the promise after every then block.