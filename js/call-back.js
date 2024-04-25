"use strict"
//! Callback
const first = function(callback){
    setTimeout(()=>{
        console.log(1);
        callback()
    }, 500 )
}
const second = function(){
    console.log(2);
}
first(second)

//? Абстракція 
for(let i=0; i< 10; i++){
    console.log(i);
}
const repeatLog = function(n){
    for(let i=0; i<n; i++){
        console.log(i);
}
}
repeatLog(5)

const printValue = function(value){
    console.log(value);
}
const prettyPrint = function(value){
    console.log("Pretty func: ", value);
}
const repeat = function(n, action){
    for(let i = 0; i < n; i++){
        action(i)
    }
}
const labels = []
repeat(5, value =>{
    labels.push(`Label ${value + 1}`)
})
console.log(labels);
repeat(3, printValue)
repeat(3, prettyPrint)

//? Фільтрація массиву
const filter = function(array, test){
    const filteredElements =[];
for(let element of array){
    const passed = test(element)
    if(passed){
        filteredElements.push(element)
    } 
}
return filteredElements;
}



// 1. Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки
const myButton = document.getElementById('myBtn');
myBtn.addEventListener('click', () => {
    alert('Hello World!');
});

// 2. Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати 
// число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною



// 5. Розрахунок дисконтної ціни

// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки 
// як аргументи. Використайте стрілкову функцію та колбек.

const calculateDiscountPrice = (price, discount, callback) => {
    const discountAmount = price * (discount / 100);
    const discountedPrice = price- discountAmount;
    callback(discountedPrice);
};
const price = 100; 
const discount = 20; 

calculateDiscountPrice(price, discount, (discountedPrice) => {
    console.log("Discounted Price:", discountedPrice);
});