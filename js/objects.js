"use strict"
// Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до 
// об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.
const person = {
    name: "Kate",
    age: 15,
    gender: "female",
    showPerson: function(){
        console.log(`name = ${this.name}, age = ${this.age},gender = ${this.gender}`);
    },
} 
person.showPerson()

