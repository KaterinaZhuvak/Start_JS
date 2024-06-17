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
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
   ];
   const ingredientsList = document.getElementById('ingredients');
   const fragment = document.createDocumentFragment();
 
   ingredients.forEach(ingredient => {
     const li = document.createElement('li');
     li.textContent = ingredient;
     fragment.appendChild(li);
   });
 
   ingredientsList.appendChild(fragment);

//task 3
   const images = [
    {
     url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    },
   ];

   const gallery = document.getElementById('gallery');
   const galleryItems = images.map(image => `
     <li>
       <img src="${image.url}" alt="${image.alt}">
     </li>
   `);
 
   gallery.insertAdjacentHTML('beforeend', galleryItems);

   //task 4
   let counterValue = 0;

   const valueSpan = document.getElementById('value');
   const decrementButton = document.querySelector('[data-action="decrement"]');
   const incrementButton = document.querySelector('[data-action="increment"]');
 
   const updateValue = () => {
     valueSpan.textContent = counterValue;
   };
 
   const decrement = () => {
     counterValue -= 1;
     updateValue();
   };
 
   const increment = () => {
     counterValue += 1;
     updateValue();
   };
 
   decrementButton.addEventListener('click', decrement);
   incrementButton.addEventListener('click', increment);
 
   updateValue();