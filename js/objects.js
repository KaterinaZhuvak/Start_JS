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



// Створіть масив об'єктів "students", де кожен об'єкт буде містити властивості "name", "age", "gender" та 
// "grade". Напишіть функцію, яка приймає масив об'єктів "students" і повертає середній бал групи.

const students = [
    {
    name: "Alice",
    age: 14,
    gender:"female",
    grade: 9,

},

{
    name: "Nazar",
    age: 16,
    gender:"male",
    grade: 10,

},
{
    name: "Sasha",
    age: 15,
    gender:"female",
    grade: 11,

}
]
const overageGrade =(array)=>{
    let sum = 0  
    for(let i = 0; i<array.length; i++){
        sum += array[i].grade
    }
    return sum / array.length
}
console.log(overageGrade(students));

// Створіть об'єкт "book" з властивостями "title", "author", "year"
//  та "genre". Додайте до об'єкту метод, який дозволить змінювати значення властивостей.

const book= {
    title: "Name",
    author:"Nazar",
    year:2010, 
    gener:"comedy",
    changeProperty: function(property, value){
        //hasOwnProperty - метод для зміни значення влативості
      if(this.hasOwnProperty(value)){
        this[value] = property
      }
      else{
        console.log("Property does not exist");
      }
    }
    }   
    console.log(book.changeProperty(author, "Kate"));
    console.log(book);


    hasOwnProperty