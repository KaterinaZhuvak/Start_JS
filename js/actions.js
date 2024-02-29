"use strict"

const inputElement = document.querySelector(".my-input")
const focusBtn = document.querySelector(".focus")
const blurBtn = document.querySelector(".blur")

focusBtn.addEventListener("click", () =>{
    inputElement.focus()
    console.log("Input focused");
})
blurBtn.addEventListener("click", () =>{
    inputElement.blur()
    console.log("Input blured");
})
inputElement.addEventListener("change",(event) =>{        
    const newValue = event.target.value        //! target = елемент, якій ініциює подію
    console.log("Event change: ", newValue);
} )
inputElement.addEventListener("input",(event) =>{        
    const newValue = event.target.value        //! target = елемент, якій ініциює подію
    console.log("Event input: ", newValue);
} )

const box = document.querySelector(".box")
let leftPosition = box.offsetLeft
let topPosition = box.offsetTop
function translatePosition(event){
if(event.key ==="ArrowRight"){
    leftPosition += 10
    box.style.left = leftPosition + "px"
}
else if(event.key ==="ArrowLeft"){
    leftPosition -= 10
    box.style.left = leftPosition + "px"   
}
if(event.key ==="ArrowUp"){
    topPosition -= 10
    box.style.top = topPosition + "px"   
}
if(event.key ==="ArrowDown"){
    topPosition += 10
    box.style.top = topPosition + "px"   
}
}


document.addEventListener("keydown", translatePosition)
