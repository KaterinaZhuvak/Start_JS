"use strict";   
//function expression
// * Правильно
const add = function (a, b, c) {
    return a + b + c;
}
console.log(add(1,2,3));
const result = add(1,2,3)
console.log(result);

// ! Порядок виконання коду

const fnA = function(){
    console.log("Почала виконуватись [fnA]");
    fnB()
    console.log("Продовжує виконуватись[fnA] ");
}

const fnB = function(){
    console.log("Запустилась [fnB]");
}
console.log("Виконання main code");
fnA()
console.log("Продовження main code");

//! Параметри за замовчуванням
    const count = function ( a = 0, b = 10, step = 2){
        console.log(`a = ${a}, countTo = ${b}, step = ${step}`);
        for(let  i = a; i<= b; i+= step){
            console.log(i);
        }
    }

    
    count(1,5)
    count(2)
    count(undefined, 4, 1) //* a = 0, b = 4, step = 1
    count(4, undefined, 1)//* a = 4, b = 10, step = 1

  //! Паттерн Guard Clause  
  //amount - сума для зняття коштів
  //balance - загальний баланс рахунку

    const withdraw =  function(amount, balance){
        // Звичайний спосіб
//     if (amount === 0){
//         console.log("Для проведення операції введіть сумму більше 0 ");
//     }
//     else if(amount > balance){
//         console.log("Недостатньо коштів на рахунку");
//     }
//     else{
//         console.log("Операція зняття коштів проведена");
//     }
//   }
      if (amount === 0){
        console.log("Для проведення операції введіть сумму більше 0 ");
        return
     }
      if(amount > balance){
         console.log("Недостатньо коштів на рахунку");
         return
     }
         console.log("Операція зняття коштів проведена");        
   }

  withdraw(0, 300)  
  withdraw(500, 300)  
  withdraw(100, 300)  

  //Function declaration
//! Погано
 console.log(add(2,4,5));
  function add( a,b,c) {
    return a +b+c
  }

  //? Псевдомасив 
  const sum = function(){
    let total = 0
    for(const argument of arguments){
        total += argument
    }
    return total
  }
  console.log(sum(1,2,3,4));

  const fn = function(... args){
    // const args = Array.from(arguments) 
    return args
  }
  console.log(fn(1,2,3,4,5));


  const a = 10
  // Голобальна область видимості
  const foo = function(){
    console.log(a);
    const b = 5  
    // Функціональна область видімості 
    console.log(b);
    if 
    (true){
      console.log(b);
    // Локальна область видимості
    console.log(b);
    }
const validateInput = function(){
      // Функціональна область видімості 
}
console.log(b);
    // Функціональна область видімості 
  }

  //Д/з

  // Напиши функцію logItems(array), яка отримує масив і використовує цикл for, 
  // який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента]. Нумерація повинна починатися з 1.
  // Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.
// const logItems = function(array){
//   for(i=0; i < array.lenght; i++){
//     console.log(`${array[i + 1]} - ${array[1]}`);
//   }
// }


// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть 
// тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

 const calculateEngravingPrice = function(message, pricePerWord){
  let engravingArray = message.split(" ")
  let totalCost = 0
  for(let i = 0; i < message.length; i++){
    totalCost = message[i + 1] * pricePerWord
  }
    return totalCost
}

console.log(calculateEngravingPrice("My Love", 20));
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.


 const findLongestWord= function(string) {
  let words = string.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
          longestWord = words[i];
      }
  }

  return longestWord;
}


const inputString = "Hi my name is ";
console.log("Найдовше слово у рядку:", findLongestWord(inputString));





//
//? Стрілочна функція 
// const bar = function(name){
//   console.log(name);
// }

const bar = name =>{
  console.log(name);
}
bar("type")
// Напишіть функцію, яка приймає на вхід масив чисел і повертає новий масив, в якому кожний елемент є квадратом відповідного елементу вхідного масиву.
// const squareArray = function(array){
//   const numSguare = []
//   for(let i<)
// }

const obj ={
  name:'John',
  sayName: function(){
    console.log(`My name is : ${this.name }`);
  },
  sayNameArrow: () =>{
    console.log(`My name is : ${this.name }`);
  }
  }
  obj.sayName()
  obj.sayNameArrow()
// Напиши стрілкову функцію myNewArrowFunction(), яка приймає всі аргументи за допомогою ...rest і в результаті виводить масив цих аргументів у консоль.
const myNewArrowFunction =(...args)=>{
  console.log(args);
} 
 myNewArrowFunction(1, 2, 3);
 myNewArrowFunction(100, 200, 300, 400, 500);
 myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

//  Напишіть функцію, яка повертає новий масив, в якому всі елементи масиву помножені на задане число, з використанням колбек-функції


// const arr = [1, 2, 3, 4, 5];


// function multiplyArray(arr, num, callback) {

// }


// multiplyArray(arr, 3, () => {});