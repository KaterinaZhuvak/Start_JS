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
// "use strict";
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

const radius = +"2*2";
const height = +"10";
const pi = +"3.14";
let area = +pi * +height * +radius;
console.log(area);
