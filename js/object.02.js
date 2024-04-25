"use strict"

// const user = {
//     name:"Kate",
//     age: 15,
//     isAdmin: true
// }

// console.log(user.name);

// for(let key in user){
//     console.log(key);
//     console.log(user[key]);
  
// }
//? Корисні методи обєкту 


// const hotel= [
//     name:"Resort Hotel",

// ]
//* Object.valies(obj)- повертає маасів значень 

//! Припустимо перед нами стоїть завдання порахувати загальну кількість продуктів в об'єкті формату ім'я-продукту: кількість.
//!  Тоді підійде метод Object.values () для того щоб отримати масив всіх значень і потім зручно їх скласти.

const foods ={
    apple: 6,
    oranges:9,
    cherry:3,
    bread:2,
    cheese:7,
}
const foodsValue = Object.values(foods)
// console.log(foodsValue);
let count = 0
for( let i = 0; i <foodsValue.length; i++){
    count+= foodsValue[i]
}
console.log(count);

// Оператор spread - дозволяє  розгортати елементи  массиву або властивості обєкту 
// 1) -Розпилиння обэкту
const temperaturesCity = {

 Lviv: 14,
 Kyiv:20,
 London:13,
 Oslo:10
}
const valuesTemperaturesCity = Object.values(temperaturesCity)
console.log(valuesTemperaturesCity);
const minTemperature = Math.min(...valuesTemperaturesCity)
console.log(minTemperature);


//2)  Розпилення массивів -  дозволяє розгортати елементи одного массиву в інший
 
// const houses = ["Arryn", "Frey", "Strack","Lannister"]

// const copyOfHouses = [...houses]
// const copyOfHousesSecond = houses.splice(0, 10)
// console.log(houses);
// console.log(copyOfHouses);
// console.log(copyOfHousesSecond);
// console.log(houses === copyOfHouses);



// const  completeHouses = [...houses, "Tagaryen"]
// console.log(completeHouses);


const houses = ["arryn", "frey", "stark"];
const copyOfHoyses = [...houses];
const copyOfHoysesSecond = houses.slice();
console.log(houses);

console.log(copyOfHoyses);
console.log(copyOfHoysesSecond);
console.log(houses === copyOfHoyses);

const completeHouses = [... houses, 'tagaryen']
console.log(completeHouses);


// const houses = ['Arryn', 'Frey', 'Stark', 'Lannister'];

// const copyOfHouses = [...houses];

// console.log(houses);
// console.log(copyOfHouses);

// // console.log(houses === copyOfHouses);
// const completeHouses = [...houses, 'Tagatyen']
// console.log(completeHouses);


//  qСтворіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw",
// який дозволяє знімати гроші з рахунку. 
//  Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.
//  Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0
//  градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true"
// вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
const temperatureInput = document.getElementById("check-temperature")
const temperatureBtn = document.getElementById("temperature-btn")
const weather = {
    temperature:temperatureInput.value,
    humidity:"clear",
    windSpeed:20,
    checkTemperature(){
        if(temperatureInput.value>=0){
            alert("Тeмпература вище за 0 градусів цельсія")
        }
        else{
            alert("Тeмпература нижча за 0 градусів цельсія")
        }
    }
}
temperatureBtn.addEventListener("click", () =>{
    weather.checkTemperature()
})
//  Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та 
//  password. Використайте інпути для запису значень властивостей в об’єкт
const userEmail = document.getElementById("email")
const userPassword = document.getElementById("password")
const userBtn = document.getElementById("btn")
const user = {
    name:"Kate",
    email: "katerinazhuvak@icloud.com",
    password:"Kate2306",
    login(){
        if(userEmail === "katerinazhuvak@icloud.com" && userPassword === "Kate2306"){
            alert("Верифікація пройденна")
        }
        else{
            alert("Верифікація проваленна")
        }
    }
}
userBtn.addEventListener("click", () =>{
    user.login()
})

//  Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 
//  8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.