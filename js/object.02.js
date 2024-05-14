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
const{ name7, age, city,job, isAdmin = false} = person;
console.log(name7);
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
 
// const user = {
//     name: 'Kate',
//     age: 15,
//     hobby: 'dance',
//     premium: true
//   };
  
 
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

console.log(`${findBestEmployee(employees[employee])}: ${findBestEmployee(employees[employee].value)}`);
    
//Task 4 Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її.
//  Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата"
const countTotalSalary = function(employees) {
  let totalSalary = 0;
  for ( employee in employees) {
    totalSalary += employees[employee];
  } 
  return totalSalary;


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
const[name, color]=fruits
console.log(name,color);

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
  const [name0, price, quantity] = products
console.log(name0, price, quantity);
  
  console.log(calculateTotalPrice(products, 'cheese')); 
  console.log(calculateTotalPrice(products, 'chocolate')); 
  console.log(calculateTotalPrice(products, 'milk')); 





  //Деструктуризація об'єктів 

  const rgb = [200, 255, 100]
  let red, green, blue;
  [red, green, blue] = rgb

console.log(red, green, blue);


const rgb2 = [200, 255, 100, 300]
const [red1, green1, ...colors] = rgb2
console.log(red1, green1, colors);

const rgb3 = [200, 255, 100]
const [, , blue1] = rgb3
console.log(blue1);


const user = {
    name: "John",
    age: 30,
    email: "john@example.com",
    };
    
    const { name: nameUser, age: ageUser, email: emailUser } = user;
    
    console.log(nameUser, ageUser, emailUser);

    const car = {
        make: 'Toyota',
        model: 'Camry',
        year: 2020,
        features: ['power windows', 'rear camera', 'navigation'],
        safety: {
        airbags: true,
        antilock_brakes: true,
        stability_control: true
        }
        }
        
    const { make, model, year,features, features: {item01, item02, item3}, safety, safety: {airbag,anticlock_brakes, stability_control}} = car   
    console.log( make, model, year,features,  safety, );


    const movie = {
        title0: 'The Shawshank Redemption',
        director: {
        name: 'Frank Darabont',
        nationality: 'American'
        },
        actors: ['Tim Robbins', 'Morgan Freeman'],
        release_year: 1994,
        ratings: {
        imdb: 9.3,
        rotten_tomatoes: 90
        }
        }

     const {title0, director, director:{name1,nationality}, actors, actors:{actorName1, actorName2}, release_year, ratings, ratings:{imdb, rotten_tomatoes}}  = movie 
     console.log(title0, director,  actors, release_year, ratings);

     const books = {
        count: 3,
        list: [
        {
        title1: "The Great Gatsby",
        author1: "F. Scott Fitzgerald",
        year1: 1925,
        },
        {
        title2: "To Kill a Mockingbird",
        author2: "Harper Lee",
        year2: 1960,
        },
        {
        title3: "1984",
        author3: "George Orwell",
        year3: 1949,
        },
        ],
        };
        const {
        count,
        list,
        // list: [
        // { title1, author1, year1 },
        // { title2, author2, year2 },
        // { title3, author3, year3 },
        // ],
        } = books;
        // console.log(
        // count,
        // list,
        // title1,
        // author1,
        // year1,
        // title2,
        // author2,
        // year2,
        // title3,
        // author3,
        // year3
        // );
        
        const [{title1,author1,year1}] = list
        console.log(title1,author1,year1);


        const musicLibrary = {
            count: 2,
            artists: [
            {
            name: 'The Beatles',
            albums: [
            {
            title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
            year: 1967,
            tracks: [
            { title: 'With a Little Help from My Friends', duration: '2:44' },
            { title: 'Lucy in the Sky with Diamonds', duration: '3:28' },
            { title: 'A Day in the Life', duration: '5:33' }
            ]
            },
            {
            title: 'Abbey Road',
            year: 1969,
            tracks: [
            { title: 'Come Together', duration: '4:19' },
            { title: 'Something', duration: '3:01' },
            { title: 'Here Comes the Sun', duration: '3:06' }
            ]
            }
            ]
            },
            {
            name: 'Pink Floyd',
            albums: [
            {
            title: 'The Wall',
            year: 1979,
            tracks: [
            { title: 'Another Brick in the Wall, Part 2', duration: '3:59' },
            { title: 'Comfortably Numb', duration: '6:23' },
            { title: 'Hey You', duration: '4:40' }
            ]
            },
            {
            title: 'Dark Side of the Moon',
            year: 1973,
            tracks: [
            { title: 'Speak to Me/Breathe', duration: '3:58' },
            { title: 'Time', duration: '7:06' },
            { title: 'Money', duration: '6:22' }
            ]
            }
            ]
            }
            ]
            }


            // const {counts,  artists} = musicLibrary
            // const[{name, albums}] = artists
            // const[{albums: album1, album2}] = artists
            // const[{tracks:tracks1, tracks2}]= albums
            // const[{name:name1,name2}] = artists
            // const[{title, year, tracks}] = albums
            // const[{title:title1,title2,title3 , duaration:duaration1,duaration2,duaration3 }] = tracks
            // console.log(name1);


            //?Перебираючі методи
            //*forEach()
            const number = [ 5, 0, 7, 8, 20 ]
            number.forEach((num, index, array) => {
                console.log(`index: ${index}, number: ${num}, array: ${array}`);
            })

           for(let i=0; i < number.length; i++){
            console.log(`index: ${i}, number: ${number[i]}, array: ${number}`);
           }

//map - Не змінює  вихідний массив -використовується  зазвічай  для трансформаціі массиву.
//  Результат виводить в новий массив .Старий і новий массив завжди мають однакову довжину.
const number2 = [5,6,21,56]
const doubleledNumbers = number2.map(num =>{
    return num * 2
})
number2.map(num => {
    return num * 2
})
console.log(number2);

const users = [
    {id:1, name:"Alice"},
    {id:2, name:"Rob"},
    {id:3, name:"Charlie"}
]
const userNames = users.map(user => user.name)

console.log(userNames.length);
console.log(users.length);
console.log(userNames)

//filter() - Використовується для фільтраціі массиву. Призначений для відбору елементів , які задовільняють нашу умову в callback-функції
const  numbers3 = [ 1,2,3,4,5,6,7]
const evenNumbers = numbers3.filter(num =>{
     return num % 2 == 0
})
console.log(evenNumbers);

//Фільтрація  массиву об'єктів на основі значення властивості
const users2 = [
    {id:1, name:"Alice", salary:2000},
    {id:2, name:"Rob", salary:2500},
    {id:3, name:"Charlie",salary:3000},
    {id:4, name:"Jonh",salary:5000}
]
const filteredUsers = users2.filter((element) => element.salary >2500)
console.log(filteredUsers);
//* Фільтрація массиву рядків на основі пошукових запитів
const fruits1 = ["apple","banana","cherry","kiwi"]
const searchTeam = "a"
const matchingFruits = fruits1.filter(fruit => fruit.includes(searchTeam))
console.log(matchingFruits);

//Фільтрація массиву об'єктів  на основі декількох умов
 const products1 =[ 
    {name:"Laptop", price:1000, category:"Electronic"},
    {name:"Skirt", price:100, category:"Clothes"},
    {name:"Phone", price:800, category:"Electronic"},
    {name:"Pants", price:150, category:"Clothes"}
]
const searchElectronic = products1.filter((product) => product.category == "Electronic" && product.price >= 500)
console.log(searchElectronic);

//Delete clones in massives using method filter()

const numbers4 = [3,5,4,6,7,4,9,8,6,7]
const uniqueNumbers = numbers4.filter((value, index, self) => self.indexOf(value) === index)
console.log(uniqueNumbers);

//self- оригінальний массив якій фільтрується 
//? Метод find() -використовується для пошуку і поверненню першого елементу массиву, який задовільняє умову
const trees = ["brich","maple","oak", "poplar","brich","oak"] 
const findTree =  trees.find(tree => tree.includes("m"))
console.log(findTree);

const arrayTrees =[
    {name:"brich", count: 6},
    {name:"maple", count: 2},
    {name:"oak", count: 9},
    {name:"poplar", count: 5}
]
const findTreeData = arrayTrees.find(tree => tree.count >5 )
console.log(findTreeData);

//? Метод every() - повертає true, якщо всі елементи пройшли перевірку, і false якщо хоч один не пройшов
const users3 = [
    {name:"Alice", isPremium: true},
    {name:"Rob", isPremium: false},
    {name:"Charlie", isPremium: true}
]
const isPremiumUser = user => user.isPremium
console.log(users3.every(isPremiumUser));

const formFields = ["name","email", "password"]
const formValue = {name:"Jonh",email:"john@icloud.com", password:"johnsmith123"}
const isFormFilled = (field => field in formValue)
console.log(formFields.every(isFormFilled));
//? Метод some() - повертає true, якщо хоча б один елемент пройшов перевірку, і false якщо ні один не пройшов

const usersForSome = [
    {name:"Alice", isPremium: true},
    {name:"Rob", isPremium: false},
    {name:"Charlie", isPremium: true}
]
console.log(usersForSome.some(user => user.isPremium));

const formFieldsForSome = ["name","email", "password"]
const formValueForSome = {name:"Jonh",email:"john@icloud.com"}
console.log(formFieldsForSome.some(field => field in formValueForSome));

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    ]

    const playerNames = players.map((player) =>{
        return player.name
    })
console.log(playerNames);
const updatedPlayer = players.map((player) =>{
    return {...player, points: Math.round(player.points * 1.1)}
    })
    console.log(updatedPlayer);
console.log(updatedPlayer);


const playerId = "player-3"
const findPlayer ={...players.find((player) => player.id === playerId)}
findPlayer.timePlayed = 100
console.log(findPlayer);  

//     Використовуючи 👆 масив об’єктів виконай наступні завдання
//     Отримати масив імен всіх гравців
//     Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
//     Збільшити кількість годин гравця по id. Переписати на тернарник
//     Отримати масив всіх гравців онлайн
//     Отримати масив всіх гравців офлайн
//     Отримати масив всіх хардкорних гравців з часом більше 250
//     Знайти гравця по id
//     Знайти гравця по імені
//     Перевірити чи всі гравці мають час більше 200
//     Перевірити чи всі гравці онлайн 