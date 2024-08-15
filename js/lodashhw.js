//task 1
const debouneFunction= _.debounce((func, delay) => {
    let timeoutId = 0;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  })
const resizeImage =(event)=> {
    const slider = event.target;
    const image = document.querySelector('.slider__image');
    const scale = slider.value;
    image.style.width = `${scale}%`;
  }
  const sliderInput = document.querySelector('.slider__input');
  sliderInput.addEventListener('input', _.debounce(resizeImage, 200));  

//task 2

const box = document.getElementById('box');
const moveBox =(event)=> {
  const x = event.clientX;
  const y = event.clientY;
  box.style.transform = `translate(${x}px, ${y}px)`;
}
const debouncedMove = _.debounce(moveBox, 100);
document.addEventListener('mousemove', debouncedMove);