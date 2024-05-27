"use strict"
const car ={
    wheels:4,
    speed:200,
    color:"black",

    drive(){
        console.log("go");
    }
}

const ford={
    health:100,
    __proto__: car
}

console.log(ford.wheels);
ford.drive()


const audi=Object.create(car)
audi.name="audi"
audi.color="red"
console.log(audi.color);
console.log(audi.wheels);
console.log(audi.name);
audi.drive()
console.log(audi.hasOwnProperty("name"));
console.log(audi.hasOwnProperty("wheels"));
console.log(audi.hasOwnProperty("color"));
console.log(audi);
console.log(car.isPrototypeOf(audi));

const animal = {eats:true }
const dog =Object.create(animal)
dog.barks= true;
for(let key in dog) {
    console.log(key); //barks, eats
    if(!dog.hasOwnProperty(key))continue;
     {
        console.log(key); //barks, eats
    }
    
}
//Використовюємо для повернення власних ключів  массиву
const dogKeys = Object.keys(dog)
console.log(dogKeys);

//Класси

class User {
    constructor({name, email}){
        this.name = name;
        this.email = email;
    }
    getEmail() {
        return this.email
    }
    changeEmail(newEmail){
        return( this.email = newEmail)
    }
} 

const timur =  new User({name:"Timur",email: "timur@gmail.com"})
console.log(timur)
const polina = new User({name:"Polina", email:"polina@gmail.com"})
console.log(polina);
console.log(timur.getEmail());
console.log(timur.changeEmail("newEmail@gmail.com"));

//Приватні властивості 

//Гетери та сеттери 


 const sasha = new UserMain({name:"Sasha", email:"sasha@gmail.com"})
 console.log(sasha.email);
 sasha.email="sashaStevensom@gmail.com"
 console.log(sasha.email);

 //Статичні методи 
 class UserMain {
   
   static #takenEmails = []
    static isEmailTaken(email){
        return UserMain.#takenEmails.includes(email)
    }
    #email;
    constructor({email}){
        this.#email = email
        UserMain.#takenEmails.push(email)
    }
}
const orest = new UserMain({email:"orest@gmail.com"})    
console.log(UserMain.isEmailTaken('orest@gmail.com')); //true
console.log(UserMain.isEmailTaken('sasha@gmail.com')); //false

class UserMain {
    #email;
    constructor(email){
        // this.name = name
        this.#email = email
    }
    get email(){  //Геттер
        return this.#email
    }
    set email(newEmail) { //Сеттер
        if(newEmail === ""){
            console.log("Mistake");
            return
        }
        return(this.#email = newEmail)
    }
}

class ContentEditor extends UserMain{
    constructor({email,posts}){
        super(email)
        this.posts = posts
    }
    addPost(post){
        this.posts.push(post)
    }
}
const editor = new ContentEditor({email:"mango@gmail.com", posts:[]}) 
console.log(editor);
console.log(editor.email);
editor.addPost( "post-1")
console.log(editor.posts);

