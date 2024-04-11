"use strict"
//! Callback
const first = function(callback){
    setTimeout(()=>{
        console.log(1);
        callback()
    }, 500 )
}
const second = function(){
    console.log(2);
}
first(second)

//? Абстракція 
for(let i=0; i< 10; i++){
    console.log(i);
}
const repeatLog = function(n){
    for(let i=0; i<n; i++){
        console.log(i);
}
}
repeatLog(5)

const printValue = function(value){
    console.log(value);
}
const prettyPrint = function(value){
    console.log("Pretty func: ", value);
}
const repeat = function(n, action){
    for(let i = 0; i < n; i++){
        action(i)
    }
}
const labels = []
repeat(5, value =>{
    labels.push(`Label ${value + 1}`)
})
console.log(labels);
repeat(3, printValue)
repeat(3, prettyPrint)

//? Фільтрація массиву
const filter = function(array, test){
    const filteredElements =[];
for(let element of array){
    const passed = test(element)
    if(passed){
        filteredElements.push(element)
    } 
}
return filteredElements;
}