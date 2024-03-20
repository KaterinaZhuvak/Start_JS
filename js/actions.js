"use strict"

// const inputElement = document.querySelector(".my-input")
// const focusBtn = document.querySelector(".focus")
// const blurBtn = document.querySelector(".blur")

// focusBtn.addEventListener("click", () =>{
//     inputElement.focus()
//     console.log("Input focused");
// })
// blurBtn.addEventListener("click", () =>{
//     inputElement.blur()
//     console.log("Input blured");
// })
// inputElement.addEventListener("change",(event) =>{        
//     const newValue = event.target.value        //! target = елемент, якій ініциює подію
//     console.log("Event change: ", newValue);
// } )
// inputElement.addEventListener("input",(event) =>{        
//     const newValue = event.target.value        //! target = елемент, якій ініциює подію
//     console.log("Event input: ", newValue);
// } )

// const box = document.querySelector(".box")
// let leftPosition = box.offsetLeft
// let topPosition = box.offsetTop
// function translatePosition(event){
// if(event.key ==="ArrowRight"){
//     leftPosition += 10
//     box.style.left = leftPosition + "px"
// }
// else if(event.key ==="ArrowLeft"){
//     leftPosition -= 10
//     box.style.left = leftPosition + "px"   
// }
// if(event.key ==="ArrowUp"){
//     topPosition -= 10
//     box.style.top = topPosition + "px"   
// }
// if(event.key ==="ArrowDown"){
//     topPosition += 10
//     box.style.top = topPosition + "px"   
// }
// }


// document.addEventListener("keydown", translatePosition)

const range = document.getElementById("font-size-control")
const text = document.getElementById("text")
range.addEventListener("input", () =>{
    text.style.fontSize = `${range.value}px`
})


let stars= +prompt("Write how much starts do you want")
let cost;
switch(stars){
    case 1:
        cost = 20 
    break
    case 2:
        cost = 30
    break
    case 3:
        cost = 50 
    break
    case 4:
        cost = 70
    break
    case 5:
        cost= 120
    break
    default:
        alert("Такої кількості зірок не має")         
}
const start = alert("Check for this Hotel whith" +  stars  + "stars $" +  cost)


const lang = prompt("Chose a language")
const month = 1
switch (lang){
    case "en":
        switch (month){
            case 8:
                month = "August"
            break 
            case 9:
                month = "September"
            break  
            case 10:
                month = "October"
            break
        }
        break
        case "ua":
            switch (month){
                case 8:
                    month = "Серпень"
                break 
                case 9:
                    month = "Вересень"
                break  
                case 10:
                    month = "Жовтень"
                break
            }
            break
            case "fr":
                switch (month){
                    case 8:
                        month = "Août"
                    break 
                    case 9:
                        month = "Septembre"
                    break  
                    case 10:
                        month = "Octobre"
                    break
                }
                break
}