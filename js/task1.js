// Розробіть програму для відображення списку користувачів з можливістю видалення окремих користувачів.
//  Використовуйте делегування подій для обробки кліків на кнопках видалення, щоб зменшити кількість обробників подій та спростити код.

const userList = document.getElementById('userList');
function deleteUser(event) {
    if(event.target.nodeName === "BUTTON"){
        const item = event.target.parentElement
        // console.log(item);
        item.remove()
        console.log(item.dataset.id);
    }
}
userList.addEventListener("click", deleteUser)


// Розробіть програму, яка відображає список завдань з можливістю додавання, видалення та відмітки виконаних завдань.
// Використовуйте делегування подій для обробки кліків на кнопках видалення та чекбоксах виконаних завдань.

const input = document.querySelector("#newTask")
const btn = document.querySelector("#addTask")
const list = document.querySelector("#taskList")
const form = document.querySelector("form")
console.log(form);
const deligationFunction =(event)=>{
    event.preventDefault()
    if(event.target.nodeName === "BUTTON"){
        const newLi = document.createElement("li")
        newLi.innerHTML = `<input type = "checkbox" /> <span>${input.value}</span> <button type="button" class="deleteBtn">Delete Btn</button>`
        list.appendChild(newLi)
         input.value = ""
      
    }
    
}
const handleTaskClick =(event)=>{
    event.preventDefault()
    if(event.target.nodeName === "BUTTON"){
        const item = event.target.parentElement;
        item.remove()
    
    }
}
form.addEventListener("click", deligationFunction)
list.addEventListener("click", handleTaskClick)

const colorTask =(event)=>{
    if(event.target.type === "checkbox"){
        event.target.nextSibling.style.color =  "4feb34"
    }
}
list.addEventListener("click", colorTask) 