const input = document.querySelector("input")
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")


function debounce(cb, delay = 1000) {
    let timeout
  
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        cb(...args)
      }, delay)
    }
  }


const throttle = (cb, delay = 300) =>{
    let running = false;

    return (...args) => {
            if(!running){
                cb(...args);
                running = true;

                setTimeout(()=>{
                    running = false;           
                }, delay);
             
            }        
    }
}

// const throttle = (fn, limit) => {
//     let flag = true;
//     return function(){
//       let context = this;
//       let args = arguments;
//       if(flag){
//         fn.apply(context, args);
//         flag = false;
//         setTimeout(() => {
//           flag=true;
//         }, limit);
//       }
//     }
//   }




//-----INPUT----------------------------------------

const updateDefaultTextInput = (text) => {
    defaultText.textContent = text;
}

const updateDebounceTextInput = debounce((text) => {
    debounceText.textContent = text;
}, 500);


const updateThrottleTextInput = throttle((text) => {
    throttleText.textContent = text;
}, 100);





// input.addEventListener("input", (e)=>{
//     updateDefaultTextInput(e.target.value);
//     updateDebounceTextInput(e.target.value);
//     updateThrottleTextInput(e.target.value);
// })



//---------MOUSE--MOVE-------------------------------

const updateDefaultText = () => {
    increametCount(defaultText)
}

const updateDebounceText = debounce(() => {
    increametCount(debounceText)
}, 1000)

const updateThrottleText = throttle(() => {
    increametCount(throttleText)
}, 100)

document.addEventListener("mousemove", ()=>{
    updateDefaultText();
    updateDebounceText();
    updateThrottleText();
})




function increametCount(element) {
    element.textContent = (parseInt(element.innerText) || 0) + 1;
}

