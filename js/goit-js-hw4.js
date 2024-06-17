 document.addEventListener('DOMContentLoaded', () => {
     const images = document.querySelectorAll('.image');
     const fullImageContainer = document.getElementById('fullImageContainer');
     const fullImage = document.getElementById('fullImage');
     let currentIndex = 0;
  
    function showFullImage(index) {
       fullImage.src = images[index].src;
       fullImageContainer.style.display = 'flex';     }
  
     function hideFullImage() {
       fullImageContainer.style.display = 'none';
     }
  
     function navigate(direction) {
       if (direction === 'left') {
         currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
       } else if (direction === 'right') {
         currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
       }
       showFullImage(currentIndex);
     }
  
     images.forEach((image, index) => {
       image.addEventListener('click', () => {
         currentIndex = index;
         showFullImage(currentIndex);
       });     });
  
     fullImageContainer.addEventListener('click', hideFullImage);
  
     document.addEventListener('keydown', (event) => {
       if (fullImageContainer.style.display === 'flex') {
        if (event.key === 'ArrowLeft') {
           navigate('left');
         } else if (event.key === 'ArrowRight') {
           navigate('right');
         } else if (event.key === 'Escape') {
           hideFullImage();
         }
      }
     });
  });




  document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#controls input');
    const renderBtn = document.querySelector('[data-action="render"]');
    const destroyBtn = document.querySelector('[data-action="destroy"]');
    const boxesContainer = document.getElementById('boxes');
  
    renderBtn.addEventListener('click', () => {
      const amount = Number(input.value);
      createBoxes(amount);
    });
  
    destroyBtn.addEventListener('click', destroyBoxes);
  
    function createBoxes(amount) {
      destroyBoxes(); // Очищає попередні елементи перед створенням нових
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        const size = 20 + i * 7;
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
        fragment.appendChild(box);
      }
      boxesContainer.appendChild(fragment);
    }
  
    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }
  
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  });