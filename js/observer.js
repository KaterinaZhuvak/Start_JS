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
 //For images 
 const images = document.querySelectorAll("img")
 console.log(images);
  const checkImage =(entries,observer) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.src = entry.target.dataset.src
            observer.unobserve(entry.target)
        }
    })
  }

  const optionsForImage ={
    threshold:0.2
  }
  const imageObserver =  new IntersectionObserver(checkImage, optionsForImage)
  images.forEach(image => imageObserver.observe(image))
  //For video 
const video = document.querySelector("video")
  const videoCheck =(entries,observer) =>{
    entries.forEach(entry =>{
        //перевірка на те чи відео запустилось
        if(entry.isIntersecting !== 0){
            //якщо видео за межами viewport або видиме на 20%
            if(entry.isIntersecting <= 0.2){
                entry.target.pause()
            }
            else{
                entry.target.play()
            }
        }
    })
  }
  const optionsForVideo ={
    threshold:0.2
  }
  const videoObserver =  new IntersectionObserver(videoCheck, optionsForVideo)
  videoObserver.observe(video)


  const sections = document.querySelectorAll("section")
  const link = document.querySelector("a")
  const checkForSections =(entries, observer)=>{
    entries.forEach(enrty =>{
        if(entry.isIntersecting && entry.intersectionRatio >= 0.5){
            links.forEach(link =>{
                link.classList.remove("active")
                const activeId = entry.target.id
                const activeLink = document.querySelector(`a[href = "${activeId}"]`)
                
                if(activeLink){
                    activeLink.classList.add("active")
                }
            })
        }
    })
  }
  const optionsForSections ={
    threshold:0.2 //[0.2,0.5,0,8]
  }
  const sectionObserver =  new IntersectionObserver(checkForSections, optionsForSections)
  images.forEach(image => sectionObserverObserver.observe(video))