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

function changeText(element, text, color, time, onSuccess, onFailure) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSuccess) {
        onSuccess();
      } else {
        if (onFailure) {
          onFailure();
        }
      }
    }
  }, time);
}

// This is called callback hell.
setTimeout(()=>{
  heading1.textContent = "one";
  heading1.style.color = "violet";
  setTimeout(()=>{
    heading2.textContent = "two";
    heading2.style.color = "purple";
    setTimeout(()=>{
      heading3.textContent = "three";
      heading3.style.color = "red";
      setTimeout(()=>{
        heading4.textContent = "four";
        heading4.style.color = "green";
        setTimeout(()=>{
          heading5.textContent = "five";
          heading5.style.color = "pink";
        },1000)
      },1000)
    },1000)
  },2000)  
},2000)


// This is pyramid of doom
changeText(heading1,"one","green",1000,()=>{
  changeText(heading2,"two","blue",2000,()=>{
    changeText(heading3,"three","red",2000,()=>{
      changeText(heading4,"four","green",1000,()=>{
        changeText(heading5,"five","yellow",2000,()=>{
          changeText(heading6,"six","orange",1000,()=>{
            changeText(heading7,"seven","brown",1000,()=>{
              changeText(heading8,"eight","purple",2000,()=>{
                changeText(heading9,"nine","violet",1000,()=>{
                  changeText(heading10,"tee","pink",1000,()=>{

                  },()=>{console.log("Heading 1 does not exist")})
                },()=>{console.log("Heading 2 does not exist")})
              },()=>{console.log("Heading 3 does not exist")})
            },()=>{console.log("Heading 4 does not exist")})
          },()=>{console.log("Heading 5 does not exist")})
        },()=>{console.log("Heading 6 does not exist")})
      },()=>{console.log("Heading 7 does not exist")})
    },()=>{console.log("Heading 8 does not exist")})
  },()=>{console.log("Heading 9 does not exist")})
},()=>{console.log("Heading 10 does not exist")})
