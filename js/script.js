// // let number = 5;

// // number = 10;

// // console.log(number);

// // const leftBorderWidth = {
// //   a: 20,
// // };

// // leftBorderWidth.a = 4;

// // console.log(leftBorderWidth);

// // console.log(num);
// // var num = 8;
// // {
// //   let result = 50;
// //   //   let result_1 = 60,
// // }
// // console.log(result);
"use strict";
// // const str = "Font Awesome";
// // const price = 8;
// // const age = 18;
// // const total = price + age;
// // console.log(total);
// // console.log(str.length);
// // console.log(str.toUpperCase());
// // const quantity = 17;
// // console.log(typeof quantity); // "number"

// // const message = "JavaScript is awesome!";
// // console.log(typeof message); // "string"

// // const isSidebarOpen = false;
// // console.log(typeof isSidebarOpen); // "boolean"
// // alert("Are you here?");
// // const result = confirm("are you here?");
// // console.log(result);

// // 0  1  2
// // const answer = [];
// // const result = [1, 2, 3, 4];
// // answer[0] = prompt("what is your name?", "");
// // answer[1] = prompt("what is your hoobie?", "");
// // answer[2] = prompt("do you have a pet?", "");
// // console.table({ answer });
// // console.table(result);
// // let a = 3;
// // let b = 4;
// // let total = a + b;
// // console.log(total);
// // const group = [];
// // group = prompt("Я навчаюся в групі...", "");
// // console.table(group);

// //! Оголоси дві змінні, які зберігають назву та ціну товару: name і price. Присвойте змінним наступні характеристики товару (відразу при оголошенні) назва: MacBook Pro 13″, ціна: 100000
// //! Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде: 'Обрано «MacBook Pro 13″», ціна за штуку 10000 кредитів'. Присвой товару нову ціну - 20000. Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде: 'Обрано «MacBook Pro 13″», ціна за штуку 2000 кредитів'.

// // const name = "MacBook Pro 13";
// // let price = 10000;
// // console.log("Обрано", name, "ціна за штуку", price, " кредитів");
// // price = 20000;
// // console.log("Обрано", name, "ціна за штуку", price, " кредитів");

// let num = "787";
// console.log(typeof num);
// num = Number(num);
// console.log(typeof num);
// console.log(num);

// let elementWidth = "50px";
// elementWidth = Number.parseInt(elementWidth);
// console.log(elementWidth);
// console.log(typeof elementWidth);

// let elementWidth = "50.090998dgdhdpx";
// elementHeight = Number.parseFloat(elementHeight);
// console.log(elementHeight);
// console.log(typeof elementHeight);

// const validNumber = Number("57");
// console.log(Number.isNaN(validNumber));

// console.log((0.1 * 10 + 0.2 * 10) / 10);

// //Math floor- повертае наибільше ціле число//
// console.log(Math.floor(1.7));
// //math.ceil- повертае найбільше ціле число
// console.log(Math.ceil(9.3));
// //Math.round - округлює число
// console.log(Math.round(11.6));
// //Math.max(num1,num2,...)-повертае нвйбільше число з набору
// console.log(Math.max(11, 12, 67, 9));
// //Math.min(num1,num2,...)-повертае нвйменьше число з набору
// console.log(Math.min(11, 12, 67, 9));
// //Math.pow(num, exponent)-возводить число в ступінь
// console.log(Math.pow(3, 3));
// //Math.random-видає рандомне число в діапазоні від 0 до 1
// console.log((Math.random() * (10 - 1) + 1).toFixed(2));

//Унарний плюс
let getDate = "154";
const getAge = +prompt("How old are you?", "");
console.log(typeof +getDate);
console.log(typeof +getAge);

let isFail = +"";
console.log(isFail);

//! Напишіть скрипт, який знаходить обсяг циліндра висотою 10м і діаметром основи 4м , результат та дані повинні зберігатися в змінних

// const radius = +"2*2";
// const height = +"10";
// const pi = +"3.14";
// let area = +pi * +height * +radius;
// console.log(area);
const single = "одинарні лапки";
const double = "подвійні лапки";
const backstrips = `зворотні лапки`;

let guestList = "Гості: \n Іван \n Степан \n Петро";
console.log(guestList);

const name = "Marshal";
console.log(`Name: ${name}`);

// let str = "Op";
// str = "o" + str[1];
// console.log(str);
// console.log(str.length);

// const str = "я Барт Сімсон, я погаджно вчуся в сімсон школі";
// console.log(str.indexOf("я", 2));
// console.log(str.includes("сім", 2));

const massage = "Mango " + "is " + "happy ";
console.log(massage);

let result;
result = 5 / "2";
console.log(result);
console.log(typeof result);

const str = "Успіх - це не випадковість, а результат постійного старання";
console.log(str.startsWith("Усп"));
console.log(str.endsWith("ння"));

const title = "Welcome";
console.log(title.trim());
console.log(title.padEnd(13, "("));
console.log(title.padStart(17, ")"));

// !Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .charAt(), вивести перший символ вашого імені в консоль.
// const name = "Kate";
// console.log(name.charAt(0));

//! Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .indexOf(), знайти і вивести в консоль позицію, на якій знаходиться пробіл між ім'ям та прізвищем
const fullName = "Zhuvak Kateryna";
console.log(fullName.indexOf(" "));

// !Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .replace(), замінити першу літеру вашого імені на символ "@" та вивести результат в консоль.
// const name = "KKateryna";
// console.log(name.replace("K", "@"));

// !Створити змінну, яка містить рядок зі словом "JavaScript". Використовуючи метод .substring(), вивести підстроку, яка містить перші 4 символи слова "Java".
let subtitle = "JavaScript";
console.log(subtitle.substring(0, 4));

// !Напиши скрипт який виведе рядок в форматі: “Гість x y поселяється в n номер g”, підставивши замість x, y, n, g значення змінних

 let name = "Анатолій";
 let surname = "Шацький";
 let camber = 211;
 let hotel = "Hotel";
 let Surname = alert("Enter your surname:", "");
 let Name = prompt("Enter your name:", "");
 let aprtment = +prompt("Enter your room number:", "");
 let hotek = prompt("Enter your hotel:", "");
 let mess = alert(
   "Гість `${Name}` `${Surname}`  поселяється в `${hotek}` номер `${aprtment}`"
 );
 console.log(mess);


let balance = "Ваш баланс попвненно на 1";
console.log(balance.padEnd(30, "0"));

//Написати скрипт пошуку в рядку. Дано
//const blacklistedWord1 = 'спам';
//const blacklistedWord2 = 'розпродаж';
// const blacklistedWord1 = "спам";
// const blacklistedWord2 = "розпродаж";
// const blacklistedWord3 = "кампанія";
// const string1 = "Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!";
// const string2 = "Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!";
// const string3 = "Рекламна кампанія #jsIsAwesome";
// console.log(string1.includes(blacklistedWord1));
// console.log(string2.includes(blacklistedWord2));
// console.log(string3.includes(blacklistedWord3));

const totalMinutes = prompt("Введіть кількість хвилин", "");
const numberHours = totalMinutes / 60;
const hours = Math.floor(numberHours % 24);
const days = Math.floor(numberHours / 24);
const minutes = totalMinutes % 60;
const modeMinutes = String(minutes).padStart(2, "0");
const modeHours = String(hours).padStart(2, "0");
alert(`${days} days ${modeHours}:${modeMinutes}`);
console.log(`${days} days ${modeHours}:${modeMinutes}`);

//! Navigator-за допомогою нього ми можемо отримати інформацію про браузер та операцийну сістему
// !BOM

// console.log(navigator.userAgent);
// alert(location.href);
// if(confirm("Перейті на сайт Вікіпедія?")){
//     location.href="https://wikipedia.org"
// }

//! DOM-навігація по документу
// const htmlElement = document.documentElement;
// const headElement = document.head;
// const bodyElement = document.body;

// console.log(htmlElement)
// console.log(headElement)
// console.log(bodyElement)
const item = document.querySelector(".item")
const parentElementNode = item.parentNode;
console.log(parentNode);  //!elem.parentNode - вибере батька elem

//! elem.childNodes - псевдомасив зберігає всі дочірні елементи, включаючи текстові.
const  childElementNode = item.childNodes;
console.log(childElementNode);

// !elem.children - псевдомасив зберігає тільки дочірні вузли-елементи, тобто
// !відповідні тегам.

const childrenElem =  parentElementNode.children;
console.log(childrenElem);

//!elem.firstChild - вибере перший дочірній елемент всередині elem, включаючи текстові вузли.

const container = document.querySelector(".container")
const firstChildElement =  container.firstElementChild;
console.log(`Перший дочірній елемент:${firstChildElement}`);
const lastChild =  container.last6ElementChild;
console.log(`Останній дочірній елемент(Включаючи текстові вузли ):${lastChild}`);
const lastElementChild =  container.last6ElementChild;
console.log(`Останній дочірній елемент:${lastElementChild}`)

const  secondElement = firstChildElement.nextElementSibling
console.log(`Отримання попереднього сусіда:${lastElementChild}`);

const thirdElement = secondElement.nextElementSibling;


const firstParagraph =  document.querySelector("p")

console.log(`First element <p>: ${firstParagraph}`);

const allParagraphs = document.querySelectorAll("p")
const secondParagraph = document.querySelector(".second")
console.log(`Second element <p>: ${secondParagraph}`);

const btn = document.getElementsById("btn");
// const button = document.querySelector("#btn");
//value:ця властивисть містить поточний текстовий вміст елементів: input, select, textarea.вона допомогає отриматиабо змінювати значення елементів.
const btnChangeValue = document.querySelector(".btn-input");
const inputValue = document.querySelector(".input");

btnChangeValue.addEventListener("click", () => {
  inputValue.value = "New value";
});

const checkbox = document.getElementById("checkbox");
const btnStageChange = document.querySelector(".btn-state");
btnStageChange.addEventListener("click", () => {
  checkbox.checked = !checkbox.checked;
});
//! name = властивість зберігає значення вказане в  HTML атрибуті name.
//!Зазвичай буде застосовуватись для відправки формна сервері

// const showBtnState = document.querySelector(".btn-show");
// const userName = document.querySelector("#usernameInput");
// showBtnState.addEventListener("click", () => {
//   alert("Username is:" + userName.name);
//   alert("Username is:" + userName.value);
// });

//! src

let image = document.getElementById("image");

image.addEventListener("click", () => {
  image.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-SaYWlXmVicHWYEEpRgrmFir507tWQk3pA&usqp=CAU";
});

// !elem.textContent — властивість, містить текстовий контент всередині елемента. Доступно для запису, при чому незалежно що буде передано в textContent, дані завжди будуть записані як текст.
const changeBtn = document.querySelector(".change-text");
const text = document.querySelector(".text");
changeBtn.addEventListener("click", () => {
  text.textContent = "New text";
});
text.style.backgroundColor = "yellow";
text.style.fontSize = "40px";
text.style.borderRadius = "10px";
text.style.padding = "40px";
text.style.color = "green";

// const addButton = document.getElementById("addButton");
// const checkButton = document.getElementById("checkButton");
// const replaceButton = document.getElementById("replaceButton");
// const toggleButton = document.getElementById("toggleButton");
// const removeButton = document.getElementById("removeButton");

// checkButton.addEventListener("click", () => {
//   // elem.classList.contains(cls) - повертає true або false, в залежності від того, чи є в елемента клас cls

//   const hasClass = example.classList.contains("hightLigt");
//   console.log(hasClass);
// });

// addButton.addEventListener("click", () => {
//   example.classList.add("italic");
// });

// removeButton.addEventListener("click", () => {
//   example.classList.remove("highLight");
// });
// repalceButton.addEventListener("click", () => {
//   example.classList.replace("highlight", "bold");
// });
// toggleButton.addEventListener("click", () => {
//   example.classList.toggle("highlight", "bold");
// });