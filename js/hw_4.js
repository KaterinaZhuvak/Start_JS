"use strict";
// ! Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
let result = 5 + 5 + "5";
console.log(result);
//! Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.
const email= "katerinazhuvak@icloud.com";
console.log(email.includes("@",2));

//! Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
const my = "My ";
const name ="name ";
const is = "is ";
const fullName = my + name + is;
console.log(fullName,`${Victor}` );


//! Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»
let userName = "Alex"
const payment = 2000
const output = alert("Дякую,'${userName}'. До сплати `payment`гривень")
console.log(output);