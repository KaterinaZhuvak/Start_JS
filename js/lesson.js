console.log(_.add(2,5));
const ThrotteledFunction =_.throttle(()=>{
    console.log("Throttle called");
})
window.addEventListener("scroll", ThrotteledFunction)
const vannilaOutput = document.querySelector('.output.vanilla');
const throtteledOutput = document.querySelector(".output.throttle")
let scrollEventCount = 0;
const eventCounter={
    vannila:0,
    throttle:0,
    debounce:0
}
document.addEventListener('scroll', () => {
    scrollEventCount+=1
    vannilaOutput.textContent = scrollEventCount;
})

document.addEventListener('scroll', _.throttle(()=>{
    eventCounter.throttle+=1
    throtteledOutput.textContent = eventCounter.throttle;
}, 1000))

