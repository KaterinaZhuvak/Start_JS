//? Створення та видалення елементів

//? Створення елементів

const heading = document.createElement("h1");
const text = document.createElement("p")
heading.textContent = "Створення та видалення вузлів";
text.textContent = "Ціль уроку:Створити нові елементи да додати їх в розмітку";

console.log(heading);

//* element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.

// document.querySelector('.list').append(heading)

//* element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.

// document.querySelector(".hero").prepend(heading);


//* element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.


// document.querySelector(".hero").before(heading);

//* element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.

document.querySelector(".hero").after(heading,text);
//append.child
document.querySelector(".hero").appendChild(text)
//insertBefore(elem, nextElem)

const parentElem = document.getElementById("parent")
const nextSibling = document.getElementById("nextSibling")
const newElem = document.createElement("div")
newElem.textContent = "New Elem"
parentElem.insertBefore(newElem,nextSibling)

//Видалення елементів 
parentElem.remove()


const title = document.querySelector(".title")
console.log(title.textContent); // textContent- Отримує текст елемента та його нащадків. Ігнорує HTML теги  і повертає тільки текст
console.log(title.innerHTML); // innerHTML - отримує HTML-розмітку всередені елемента у вигляді рядка

//* основна різниця між ними полягає в тому, що textContent працює лише з текстовим вмістом, тоді як innerHTML працює з HTML-розміткою.
//* Використовуйте textContent, коли вам потрібен тільки текст, і innerHTML, коли вам потрібно працювати з HTML-розміткою
title.innerHTML = " new <b>text </b>"
// title.textContent = " new <b>text </b>"


//? Мeтод insertAdjecentHTML()


 const parentElem2 = document.querySelector(".parent-inner")

 parentElem2.insertAdjacentHTML("beforeend", "<div>Абзац перед елементом</div>") //*"beforeend" - всередині elem, після усіх дітей

 parentElem2.insertAdjacentHTML("beforebegin", "<div>Абзац перед батьківським елементом</div>")

 parentElem2.insertAdjacentHTML("afterbegin", "<div>Абзац на початку батьківського елементом</div>")

 parentElem2.insertAdjacentHTML("afterend", "<div>Абзац після елемента</div>")
// //?Атрибути
// //

const btn = document.querySelector("#mySave")
console.log(btn.hasAttribute("class"));
console.log(btn.hasAttribute("data-action"));

btn.setAttribute("width", "300")
btn.removeAttribute("class")


const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
    ];

    const colorPicker = document.querySelector(".js-color-picker")
    const buttonHTML = colorPickerOptions.map((option) =>{
        const markUp = `<button style="background-color:${option.color}">${option.label}</button>`
        return markUp   
    })
colorPicker.insertAdjacentElement("afterend", buttonHTML)
    // colorPickerOptions.forEach((option )=>{
    //     const btn = document.createElement("button")
    //     btn.textContent
    // })
// btn.attributes
// elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.

const createProductCard  = (name, descr, price)=>{
    const article = document.createElement("article")
    article.classList.add("product")
    const title  = document.createElement("h2")
    title.textContent = name
    title.classList.add("product__name")

    const description = document.createElement("p")
    description.textContent = descr
    description.classList.add("product__descr")

    const productPrice = document.createElement("p")
    productPrice.textContent = `Ціна : ${price} credits`
    productPrice.classList.add("product__price")

    article.appendChild(title)
    article.appendChild(description)
    article.appendChild(productPrice)

}
const productContainer  = document.querySelector(".js-products")
const productCard = createProductCard("apple", "very tasty", 54)
productContainer.appendChild(product)