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
// const temperatureInput = document.getElementById("check-temperature")
// const temperatureBtn = document.getElementById("temperature-btn")
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
// const user = {
//     name:"Kate",
//     email: "katerinazhuvak@icloud.com",
//     password:"Kate2306",
//     login(){
//         if(userEmail === "katerinazhuvak@icloud.com" && userPassword === "Kate2306"){
//             alert("Верифікація пройденна")
//         }
//         else{
//             alert("Верифікація проваленна")
//         }
//     }
// }
// userBtn.addEventListener("click", () =>{
//     user.login()
// })

//  Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 
//  8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.




//Розпилення обєктів




//? Деструктирізація об'єктів

const person = {
    name:"john",
    age:38,
    city:"New York"

}
const{name, age, city,job, isAdmin = false} = person;
console.log(name);
console.log(age);
console.log(city);
console.log(job);
console.log(isAdmin);


const person2 ={
    name:"Oliver",
    age:20,
    // city:"London"
}
const{name: personName, age: personAge, city: personCity = "Miami" } = person2
console.log(personName);
console.log(personCity)


const hotel = {
    name:"SunRise Resort & Spa",
    stars: 5,
    city:"Sharm El Sheikh"
}
const{ name , ...rest} = hotel

console.log(name);
console.log(rest);

//* Гліюока деконструктуризація

const options ={
    size:{
        width:200,
        height:100
    },
   items:["Cake","Donut"],
   extra:true
}
const {
    size,
    size:{
        width,
        height
    },
    items,
    items:[item1, item2],
    extra,
    title ="menu"
} = options

console.log(size);
console.log(width);
console.log(height);
console.log(items);
console.log(item1);
console.log(item2);
console.log(extra);
console.log(title);
 const fn = function(){
 console.log(arguments);
 }
 fn(6,5,6,3,3,2)


 //Д/З 
// Task  1) Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
 
const user = {
    name: 'Kate',
    age: 15,
    hobby: 'dance',
    premium: true
  };
  
 
  user.mood = 'happy';
  
  user.hobby = 'skydiving';
  user.premium = false;
  
  for ( key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }

  //Task 2 Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.


  const countProps = function(obj) {
    let count = 0;
    for ( key in obj) {
      if (obj.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }

  const list = {
    name: 'Peter',
    job:"Teacher"
  };
  
  console.log(countProps(list));

  //Task 3 Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). 
// Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const  findBestEmployee = function(employees) {
  let maxTasks = 0;
  let bestEmployee = '';
  for (employee in employees) {
    if (employees[employee] > maxTasks) {
      maxTasks = employees[employee];
      bestEmployee = employee;
    }
  }
  return bestEmployee;
}
 const employees = {
   Kate: 10,
   Lena: 8,
   Sonia: 1,
   Petya: 11
 };

console.log(`${findBestEmployee(employees)}: ${findBestEmployee(employees.value)}`);
    
//Task 4 Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її.
//  Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата"
const countTotalSalary = function(employees) {
  let totalSalary = 0;
  for ( employee in employees) {
    totalSalary += employees[employee];
  } 
  return totalSalary;
}

const salary = {
  Sasha: 2000,
  Jane: 1800,
  Hanah: 2200,
  Alice: 2500
};

console.log(countTotalSalary(salary));




//Task 5 
const getAllPropValues = function(arr, prop) {
  let propValues = [];
  for ( obj of arr) {
    if (obj.hasOwnProperty(prop)) {
      propValues.push(obj[prop]);
    }
  }

  return propValues;
}
const fruits = [
  { name: 'peach', color: 'pink' },
  { name: 'banana', color: 'yellow' },
  { name: 'apple', color: 'green' }
];

console.log(getAllPropValues(fruits, 'name')); 
console.log(getAllPropValues(fruits, 'color')); 

//Task 6 
const calculateTotalPrice = function(allProducts, productName) {
    let totalPrice = 0;
    for ( product of allProducts) {
      if (product.name === productName) {
        totalPrice += product.price * product.quantity;
      }
    }

    return totalPrice;
  }
  
  const products = [
    { name: 'cheese', price: 1.2, quantity: 2 },
    { name: 'chocolate', price: 0.8, quantity: 5 },
    { name: 'milk', price: 2.5, quantity: 1 }
  ];
  
  console.log(calculateTotalPrice(products, 'cheese')); 
  console.log(calculateTotalPrice(products, 'chocolate')); 
  console.log(calculateTotalPrice(products, 'milk')); 