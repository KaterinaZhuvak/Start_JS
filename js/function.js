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