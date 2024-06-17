//подіі  клавіатури та миші
document.addEventListener("keydown", e=>{
    console.log("keydown", e); 
    console.log("key:", e.key);
    console.log("code:", e.code);
})

document.addEventListener("keyup", e=>{
    console.log("keyup", e);

})

//Клавіши модлифікатора 
document.addEventListener("keydown", e=>{
    e. Ev   
    if((e.ctrlKey|| e.metaKey) && e.code === "Key5"){
        console.log("ctrl + 5 or  command + 5");
    }
})

//Події миші
const  square = document.querySelector(".square")
// square.addEventListener("mousedown", ()=>{
//     square.style.backgroundColor = "blue"
// })
// square.addEventListener("mouseup", ()=>{
//     square.style.backgroundColor = "yellow"
// })
// square.addEventListener("mouseover", ()=>{
//     square.style.backgroundColor = "green"
// })
// square.addEventListener("mouseout", ()=>{
//     square.style.backgroundColor = "purple"
// })

// square.addEventListener("mousemove", ()=>{
//     square.style.backgroundColor = "red"
// })
// // square.addEventListener("click", ()=>{
// //   alert("На квадрат було клікнуто")
// // })
// square.addEventListener("dblclick", ()=>{
//     alert("На квадрат було клікнуто двіччі")
//   })

//   square.addEventListener("contextmenu", (e)=>{
//     e.preventDefault()
//     square.style.backgroundColor = "black"
//     alert("Було ввімкнено контекстне меню")
//   })


// click - спрацьовує після mousedown, а потім mouseup над тим же елементом, якщо була використана ліва кнопка миші.


// dblclick - спрацьовує після двох кліків на одному елементі за короткий проміжок часу. На сьогоднішній день рідко використовується.

// contextmenu - спрацьовує при натисканні правої кнопки миші. Є й інші способи відкрити контекстне меню, напр. за допомогою спеціальної клавіші на клавіатурі, але це вже не зовсім подія миші.

// Написати скрипт в якому користувач друкує на клавіатурі текст який відображається на сторінці. При натисканні на кнопку “Очистити” очищувати надрукований текст.
// Використати можна наступну розмітку
// <button class="js-clear">Очистити</button>
// <p class="output js-output"></p>



//Координати clientХ/Y & pageX/Y

const rectangle = document.querySelector(".rectangle")
const info= document.querySelector(".info")
const body = document.body
rectangle.addEventListener("mouseout", (e) =>{
    const clientХ = e.clientХ
    const clientY = e.clientY

    const pageX = e.pageX
    const pageY = e.pageY
    info.textContent = `clientX:${clientХ} ,clientY:${clientY} pageX:${pageX} ,pageY:${pageY}`
    body.style.backgroundColor = "yellow"
})

rectangle.addEventListener("mousemove", () =>{
    info.textContent = ""
    rectangle.style.backgroundColor ="lightcoral"
})


body.addEventListener("mousemove", (e) =>{
    const clientХ = e.clientX
    const clientY = e.clientY

    const pageX = e.pageX
    const pageY = e.pageY
    info.textContent = `clientX:${clientХ} ,clientY:${clientY} pageX:${pageX} ,pageY:${pageY}`
    body.style.backgroundColor = "lightblue"    
})

body.addEventListener("mouseout" , () =>{
    info.textContent = ""
    rectangle.style.backgroundColor ="white"
})


const userButton = document.querySelector(".js-clear")
const userOutput= document.querySelector(".js-output")

document.addEventListener("keydown", (e) =>{
    console.log("keydown", e); 
    console.log("key:", e.key);
    console.log("code:", e.code);
    userOutput.textContent += e.key
})
userButton.addEventListener("click", () =>{
    userOutput.textContent = ""
})




//Змінити текст елементу з id="message" на текст, який користувач вводить у текстове поле з id="input" під час події keypress.
// <input type="text" id="input">
//<p id="message"></p>

const input = document.getElementById("input")
const message = document.getElementById("message")
input.addEventListener("keydown", () =>{
message.textContent = input.value   
})