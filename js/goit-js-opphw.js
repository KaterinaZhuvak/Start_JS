"use strict"


//Task 1
// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. В prototype функції-конструктора добав метод getInfo(), 
// який виводить в консоль значення полів login і email об'єкта який його викликав.

class Account {
  constructor({email, login}){
    this.login = login
    this.email= email
  }
  getInfo(){
     console.log(`Login :${this.login}, Email :${this.email} ` );
    // return this.email && this.login
}
}
 console.log(Account.prototype.getInfo); // function
 
const mango1 = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango1.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly1 = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly1.getInfo();

//Task 2
// Напиши клас User для створення користувача з наступними властивостями:

// name - рядок
// age - число
// followers - число
// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers


class User {
  constructor({name, age,followers}){
    this.name = name
    this.age = age
    this.followers = followers
  }
  getInfo(){
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
  }
}
const mango2 = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango2.getInfo(); // User Mango is 2 years old and has 20 followers

const poly2 = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly2.getInfo(); // User Poly is 3 years old and has 17 followers

//Task 3 
//Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.

// Додай методи класу:

// getItems() - повертає масив поточних товарів
// addItem(item) - отримує новий товар і додає його до поточних
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',

  'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]



//Task 4

// Напиши клас StringBuilder. На вхід він отримує один параметр - рядок, який записує у властивість _value.

// Додай класу наступний функціонал:

// Геттер value - повертає поточне значення поля _value
// Метод append(str) - отримує параметр str (рядок) і додає його в кінець _value
// Метод prepend(str) - отримує параметр str (рядок) і додає його на початок _value
// Метод pad(str) - отримує параметр str (рядок) і додає його на початок і в кінець _value

class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    this._value = str + this._value + str;
  }
}

const builder = new StringBuilder('.');
//append() -  вставляет набор объектов Node или строковых объектов после последнего дочернего элемента документа.
builder.append('^');
console.log(builder.value); // '.^'
//prepend() - 
builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='