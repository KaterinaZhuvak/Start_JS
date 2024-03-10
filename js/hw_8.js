"use strict"
// Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".
const inputText = document.querySelector("#validation-input1")
const inputTextTwo = document.querySelector("#validation-input2")
const checkButton = document.querySelector(".check")
function checkInput(){
    if(inputText.value && inputTextTwo.value){
        alert("Всі поля заповнено)")
    }
    else{
        alert("НЕ всі поля заповнено!!!")
    }
}
checkButton.addEventListener("click", checkInput)
// Створити розмітку  з двома числовими полями та кнопкою. При натисканні на кнопку перевіряти, 
//чи сума значень полів більша за 10, якщо так, то виводити повідомлення "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".


  const input1 = document.getElementById("filed1")
  const input2 = document.getElementById("filed2")
  const checkBtn = document.querySelector(".check-number")
  function checkNum(){
      if( input1.value.content && input2.value.content < 10){
          alert("Сума більша за 10")
      }
      else {
          alert("Сума менша або дорівнює 10")
      }
}
  checkBtn.addEventListener("click", checkNum)

// Створити розмітку  з текстовим полем та кнопкою. При натисканні на кнопку перевіряти, чи введений текст містить слово "JavaScript", якщо так, то виводити повідомлення "Tекст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".
 const input = document.getElementById("text-field")
 const btn = document.querySelector(".text-btn")
 function validText(){
    if(input.value.includes("JavaScript")){
         alert("Tекст містить слово JavaScript")
     }else{
         alert("Tекст не містить слово JavaScript")
     }
 }
 btn.addEventListener("click", validText)
// Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введене число більше за 10 та менше за 20, якщо так, то виводити повідомлення "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".
const diaposon1 = document.getElementById("diaposon1") 
const btnNumber = document.querySelector(".number")
function checkRange(){
    if(diaposon1.value >10 && diaposon1.value < 20){
        alert("Чісло входить в діапозон")
    }
    else{
        alert("Чісло HE входить в діапозон")
    }
}
btnNumber.addEventListener("click", checkRange)
// Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так, 
//то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку. Правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, 
//пароль містить не менше 6 символів.
const username = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const formBtn = document.querySelector(".check-form")
function checkForm(){
    if(username.value > 3 && email.includes("@") && password.value > 6){
        alert("All good")
    }else{
        alert("Mistake! Check your form")
    }
}
formBtn.addEventListener("click", checkForm)

