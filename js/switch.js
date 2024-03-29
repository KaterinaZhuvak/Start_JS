'use strict';

// Конструкція switch може замінити кілька if.

// Вона дає можливість більш наочного способу порівняння значення відразу з кількома варіантами.

// І if/else ifоператори, і switch оператор є структурами потоку керування в JavaScript, які використовуються для прийняття рішень на основі різних умов. Хоча вони служать подібним цілям, вони мають різні варіанти використання та переваги:

// Гнучкість : if/else if оператори є більш гнучкими та можуть працювати з широким діапазоном умов. Вони дозволяють перевіряти складні умови за допомогою різноманітних операторів порівняння (наприклад, ===, >, <тощо), логічних операторів ( &&, ||, !) і спеціальних функцій. Ви також можете вкладати if/else оператори, щоб створювати більш складні процеси прийняття рішень.
// Порівняння : це switch твердження в основному використовується для простих порівнянь на основі цінностей. Він обчислює вираз один раз, а потім порівнює отримане значення з кількома реченнями case. Він не підтримує складні умови чи діапазони значень у кожному випадку.
// Читабельність : switch оператор може зробити код більш читабельним і організованим під час обробки серії рівностей щодо однієї змінної. Це особливо корисно при роботі з великою кількістю справ.
// Продуктивність : у деяких випадках switch оператор може бути швидшим, ніж довгі ланцюжки if/else if операторів, коли є кілька випадків і можна знайти пряму відповідність без необхідності оцінювати кожну умову.


// Використовуйте if/else if оператори, коли вам потрібно перевірити складні умови або оцінити кілька умов у певному порядку.
// Використовуйте цей switch оператор, коли у вас є просте порівняння на основі значення з кількома випадками, і кожен випадок прямо збігається з однією змінною.

// Інструкції Switch не можуть включати порівняння. Наприклад, перевірити, чи одна змінна є істинною, а інша – хибною, чи одне число більше іншого.

// Перемикачі призначені для перевірки однієї змінної, яка може бути в одному з багатьох станів.   

// Напиши скрипт вибору опції доставки товару. Опція зберігається в змінній option: 1 - самовивіз, 2 - кур"єр, 3 - пошта. В змінну message записати повідомлення в залежності від опції.
// - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
// - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
// - 'Посилка буде відправлена сьогодні'
// - 'Вам передзвонит менеджер'.
// Напиши скрипт вибору готеля по кількості зірок.

// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число,яке дорівнює сумі букв імені і прізвища. Якщо умова не виконується - вивести “УПС”. Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12. Використовувати вбудований метод length.

// Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік".
// При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.
const input = document.getElementById("option-input")
const optionBtn = document.querySelector(".option")
function option(){
    switch(input.value){
        case "1":
            alert("Ви обрали каву")
        break    
        case "2":
            alert("Ви обрали чай")
        break    
        case "3":
            alert("Ви обрали сік")
        break 
         default:
            alert("Ви не обрали напій")
         break
    }
} 
optionBtn.addEventListener("click", option)
// Створити розмітку з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок",
//  "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.
const weekInput = document.getElementById("week-input")
const weekButton = document.querySelector(".week-button")
function weekDay(){
    switch (weekInput.value) {
        case "Monday": 
        case "Tuesday": 
        case "Wednesday": 
        case "Thursday": 
        case "Friday":
            alert("Робочий день тиждня")
            break;
        case "Saturday": 
        case "Sunday":
        alert("Вихідний")  
        break
        default:
            alert("Введіть деннь тіжня")
            break;
    }
}
weekButton.addEventListener("click", weekDay )
// Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.
 const monthInput = document.getElementById("month-input")
 const monthButton = document.querySelector(".month-check")
 function month(){
  switch(monthInput.value){
    case "1": 
    case "2": 
    case "12":
        alert("Winter")
        break
        case "3": 
        case "4": 
        case "5":
            alert("Spring")
            break
        case "6": 
        case "7": 
        case "8":
                alert("Summer")
                break
            case "9": 
            case "10": 
            case "11":
                    alert("Autumn")
                break
    default:
        alert("Enter a num")
  }
 }
 monthButton.addEventListener("click", month)
// Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити кількість днів у цьому місяці. 
// В Январе, Марте, Мае, Июле, Августе, Октябре и Декабре - 31 день. В Апреле, Июне, Сентябре и Ноябре - 30 дней. В Феврале - 28 дней, но если год високосный - 29 дней.
const dayInput = document.getElementById("days-input")
const daysBtn = document.querySelector(".day-btn")
function checkDay(){
    switch(dayInput.value){
        case "January": 
        case "March" : 
        case "May" : 
        case "July" :
        case "October": 
        case "December":
            alert("There is 31 day in this month")
            break  
            case "April": 
            case "June" : 
            case "September": 
            case "November":
                alert("There is 30 day in this month")
                break  
              
            case "February":
                alert("There is 28/29 day in this month")
                break  
                default:
                    alert("Enter the name of a month")
                   break 
    }
}
daysBtn.addEventListener("click", checkDay)
// Створити розмітку з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. При натисканні на кнопку виводити відповідне повідомлення про
//  дію: якщо це "червоний" — "стоп", якщо "зелений" — "йти", якщо "жовтий" — "чекати".
const colorInput = document.getElementById("color")
const colcorBtn = document.querySelector(".check-colour")
function color(){
    switch(colorInput.value){
        case "Red":
            alert("Stop")
         break   
         case "Yellow":
            alert("Wait")
         break
         case "Green":
            alert("Go")
         break
         default:
            alert("Enter a name of a color")
            break
    }
}
colcorBtn.addEventListener("click", color)
// Створити розмітку з двома полями введення, що приймають числа та список (select) з варіантами вибору 
// операцій: "+", "-", "*", "/". При натисканні на кнопку виводити результат обраної операції над цими числами. Користувач повинен бути попереджений про можливість ділення на нуль.