
import { defaultModules, error, success, info  } from '@pnotify/core';
    import * as PNotifyMobile from '@pnotify/mobile';
    import '@pnotify/core/dist/PNotify.css';
    import '@pnotify/core/dist/BrightTheme.css'
    defaultModules.set(PNotifyMobile, {});

 const key = document.getElementById("key")

 let currentKeyIndex = 0;
 const keyElement = document.getElementById('key');
 const newGameBtn = document.getElementById('restart');
 const keys = ["a","s","d","f","g","h","j","k","l"]


 function startNewGame() {
     currentKeyIndex = Math.floor(Math.random() * keys.length);
     keyElement.textContent = keys[currentKeyIndex];
     const infoNotice = info({
         text: 'Нова гра розпочата! Натисніть правильну клавішу.',
     });
 }


 document.addEventListener('keydown', function(event) {     
  const pressedKey = event.key.toUpperCase();  
     if (pressedKey === keys[currentKeyIndex]) {
       const successNotice = success({
             text: 'Ви натиснули правильну клавішу!',
         });

         currentKeyIndex = Math.floor(Math.random() * keys.length);
         keyElement.textContent = keys[currentKeyIndex];
     } else {
       const myError = error({
             text: 'Неправильна клавіша! Спробуйте знову.',
         });
     }
 });

 document.addEventListener('keypress', function(event) {
     event.preventDefault(); 
 });


newGameBtn.addEventListener('click', startNewGame);


 startNewGame();
