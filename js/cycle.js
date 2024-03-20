"use strict"
let counter = 0;


while(counter <= 10) {
console.log(`counter: ${counter}`);
counter++
}

let clientCounter = 18;
const maxClients = 25;

while(clientCounter <= maxClients) {
console.log(clientCounter);
clientCounter++
}

// do... while

// do {
//     // тіло циклу
//     } while(умова)
// Цю форму синтаксису слід використовувати лише тоді, коли ви хочете, щоб тіло циклу виконалось хоча б один раз, незалежно від умови. Зазвичай, інша форма є більш бажаною while(…) {…}
// for(let multiply = 1; )


const lines = 6;
let result = "";
for (let i = 0; i <= lines; i++) {
   for (let g = 0; g < lines - i; g++) {
     result += " ";
   }
   for (let g = 0; g < 2 * i + 1; g++) {
     result += "*";
   }
   result += "\n";
}




// Вивести на екран всі числа від 1 до 10 за допомогою циклу while.
// let i = 0
// while(i <= 10){
//   alert(i)
//   i++
// } 
// Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число не парне, пропустити його за допомогою continue.
// for(let y = 1; y <= 20; y++){
//   if(y % 2 !== 0)
//    continue
//   alert(y)
// }
// Вивести на екран таблицю множення числа 7 за допомогою циклу for.
// for(let j = 1; j <= 10; j++ ){
//    let table = j * 7
//   alert(table)
// }
// Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.
// let myNumbers = [1,2,3,4,5] 
// let index = 0
// while(index < myNumbers.length){
//   alert(myNumbers[index])
//   index++
// }

// Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7, закінчити
//  виконання циклу за допомогою оператора break.
// let myOrder = 0; 
// for(let list = [1,2,3,4,5,6,7,8,9,10]; myOrder < list.length; myOrder++ ){
//   alert(list[myOrder])
//   if(myOrder === 6){
//     break
//   }
// }
// Створити скрипт, який виводить на екран всі числа, які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
let n = 15
let k = 0
while( k >= n){
  alert(k)
  k++
  break
}

// За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3.
//  Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue