"use strict"
//! hw 6
const changeTextBtn = document.querySelector(".change-text");
const text = document.querySelector(".text")
changeTextBtn.addEventListener("click",() =>{
    text.textContent="New text"
})

let image = document.getElementById("image")
image.addEventListener("click", () =>{
    image.src= "https://www.nature.scot/sites/default/files/styles/hero_banner_half_width/public/2022-05/RedFox-FGD8284_Original%20Image_m276208.jpg?h=fee4874d&itok=JN1cm_83"
})

const link = document.querySelector(".link")
const img = document.querySelector(".img")
link.href = 'faceboook.com'
img.alt="panda"