//! Intersection Observer API дозволяє виконувати асинхронне спостереження за змінами видимості 
//!елемента на веб-сторінці в межах кореневого елемента або в межах viewport (області видимості вікна браузера).
//! Цей API є корисним для реалізації відкладеного завантаження зображень (lazy loading), нескінченного прокручування
//! (infinite scrolling), або для відстеження того, коли елементи стають видимими на екрані.
const target = document.querySelector(".target")
const callback =(entries, observer)=>{
    console.log(entries);
    entries.forEach((entry)=>{
        if(entry.isIntersecting){  //властивість isIntersecting є булевою і вказує чі перетинається спостерігач з областю видимиості(viewport)  або з кореневим  елементом root в данний момент
            console.log("Елемент став видимим");
            // observer.unobserve(target) // припиняємо спостереження після першого перетину з елементом
        }
    else{
        console.log("Елемент став не видимим");
    }
    })
}

const options={
    root:null,
    rootMargin: "100px",
    threshold:0 // елемент є повністтю видимим
}

const  observer =  new IntersectionObserver(callback, options)
observer.observe(target)
//?  observe - починає  спостереження за заданим елементом 
// setTimeout(() =>{
//     console.log('припиняємо стереження');
//    observer.disconnect()
// }, 100000)

 //властивість isIntersecting є булевою і вказує чі перетинається спостерігач з областю видимиості(viewport)  або з кореневим  елементом root в данний момент