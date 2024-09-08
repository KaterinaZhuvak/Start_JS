const key = document.getElementById("key")
const restartBtn = document.getElementById("restart")
let currentIndex = 0
const message = document.getElementById("message")
const keys = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

const newKeyFn =()=>{
    currentIndex = Math.floor(Math.random() * key.length);
    key.textContent = keys[currentIndex];
    message.textContent = ""
}
document.addEventListener("keydown", e =>{
    if(e.key === keys[currentIndex]){
        newKeyFn()
        message.textContent = "lucky guess"
        const successNotice = success({
            text:'succesful guess!'
        })
    }
    else{
        message.textContent = 'UNlucky guess'
        const myError = error({
            text:'Incorrect!'
        })
    }
})
document.addEventListener("keydown", (e)=>{
    e.preventDefault()
})
restartBtn.addEventListener("click", ()=>{
    newKeyFn()
    const infoNotice = info({
        text:"New game started!"
    })
})
newKeyFn()
