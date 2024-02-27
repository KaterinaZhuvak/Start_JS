//    Використовуючи попередній код написати скрипт закриття модального вікна по кліку на бекдроп

const openModal = document.querySelector('[data-action="open-modal"]')  
const closeModal = document.querySelector('[data-action="close-modal"]')
const modal = document.querySelector(".modal")
const backdrop = document.querySelector(".js-backdrop")
function toogleModal (){
    const bodyElement = document.body
    bodyElement.classList.toggle ("show-modal")
    document.backdrop.classList.toogle("js-backdrop") 
}
openModal.addEventListener("click", toogleModal);
backdrop.addEventListener("click", toogleModal);
