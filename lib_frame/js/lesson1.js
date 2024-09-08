import { nanoid } from 'nanoid'
const addTaskAndRemove =()=>{
    const ul = document.querySelector("#taskList")
    const taskInput = document.querySelector("#taskInput")
    const taskText = taskInput.value
    const taskId = nanoid(2)
    const taskItem = document.createElement("li")
    taskItem.innerHTML = `<p>${taskText}</p> <button class="delete_btn">task delete</button>`
    ul.appendChild(taskItem)
    taskInput.value = ''
    taskItem.id = taskId
    const deleteBtn = taskItem.querySelector(".delete_btn")
    deleteBtn.addEventListener("click", ()=>{
        taskItem.remove()
    })
}
// const deleteTask =()=>{
//     const deleteBtn = document.querySelector(".delete_btn")
//     deleteBtn.addEventListener("click", "delete")
// }

const addTaskBtn = document.querySelector("#addTaskBtn")
addTaskBtn.addEventListener("click", addTaskAndRemove)