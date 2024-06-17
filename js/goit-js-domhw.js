"use strict"

//Task 1 
// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.
const categories = document.getElementById("categories")
const categoryName = document.querySelectorAll(".item")
console.log(`Кількість категорій: ${categoryName.length}`); 
categoryName.forEach(item =>{
    const categoryTitle = item.querySelector("h2")
    console.log(`Заголовок категорії:${categoryTitle.textContent}`);
    const quantityOfCategory = item.querySelectorAll("ul li")
    console.log(`Кількість елементів: ${quantityOfCategory.length}`);
}) 




// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).
// Наприклад, для першої категорії вийде:
// Категорія: Тварини
// Кількість елементів: 4

//Task 2
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в 
//список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().

const ingridientsList = document.getElementById("ingridients")
ingridientsList.forEach(ingridients =>{
    
})
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
   ];