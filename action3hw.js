 // Масив зображень для галереї
 const galleryItems = [
    {
      preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg',
      description: 'Tulips',
    },{
      preview: 'https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?cs=srgb&dl=pexels-trinitykubassek-445109__340.jpg',
      original: 'https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?cs=srgb&dl=pexels-trinitykubassek-445109_1280.jpg',
      description: 'Girl',
    }
    // Додайте інші елементи галереї
  ];

  // Знайти елемент галереї в DOM
  const galleryContainer = document.querySelector('.js-gallery');

  // Створити розмітку для кожного елемента галереї
  const galleryMarkup = galleryItems.map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"

        />
        
      </a>
    </li>
  `).join('');

  // Додати розмітку до контейнера галереї
  galleryContainer.innerHTML = galleryMarkup;

  // Додавання обробника подій на галерею
  galleryContainer.addEventListener('click', onGalleryItemClick);

  function onGalleryItemClick(event) {
    event.preventDefault();

    // Перевірка, що клік був по зображенню
    if (event.target.nodeName !== 'IMG') {
      return;
    }

    // Отримання URL великого зображення
    const largeImageURL = event.target.dataset.source;

    // Відкриття модального вікна з повнорозмірним зображенням
    openModal(largeImageURL);
  }

  // Функція для відкриття модального вікна
  function openModal(imageURL) {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox__image');

    // Підміна значення атрибута src елемента img
    lightboxImage.src = imageURL;

    // Відкриття модального вікна
    lightbox.classList.remove('is-hidden');
  }

  // Додавання обробника подій для кнопки закриття модального вікна
  const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');

  closeModalBtn.addEventListener('click', closeModal);

  function closeModal() {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox__image');

    // Очищення значення атрибута src елемента img
    lightboxImage.src = '';

    // Закриття модального вікна
    lightbox.classList.add('is-hidden');
  }