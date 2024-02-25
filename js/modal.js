const openModal = document.querySelector('[data-action="open-modal"]')  
const closeModal = document.querySelector('[data-action="close-modal"]')
const modal = document.querySelector(".modal")
const backdrop = document.querySelector(".js-backdrop")
function toogleModal (){
    const  bodyElement = document.body
    // bodyElement.classList.toggle ("show-modal")
    document.backdrop.classList.togle.toggle("show-modal") 
}
openModal.addEventListener("click", toogleModal);
closeModal.addEventListener("click", toogleModal);