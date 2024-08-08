 // Масив зображень для галереї
 const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
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