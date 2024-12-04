const photos = [
    'familia1.jpg', 'familia2.jpg', 'familia3.jpg', 'familia4.jpg', 'familia5.jpg', 'familia6.jpg',
    'amiga1.jpg', 'amiga2.jpg', 'amiga3.jpg', 'papa-feo.jpg'
];

const titles = [
    'Aventuras en familia',
    'Grandes amigos',
    'Papa feo'
];

const photosPerPage = [6, 3, 1]; // Número de fotos en cada página

let currentPage = 0;
const photoGrid = document.getElementById('photo-grid');
const pageIndicator = document.getElementById('page-indicator');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const titleElement = document.createElement('h2');

// Agrega título dinámico al contenedor principal
document.querySelector('.album-container').insertBefore(titleElement, photoGrid);

function updateAlbum() {
    photoGrid.innerHTML = '';
    titleElement.textContent = titles[currentPage];
    
    const start = photosPerPage.slice(0, currentPage).reduce((a, b) => a + b, 0);
    const end = start + photosPerPage[currentPage];
    const currentPhotos = photos.slice(start, end);

    currentPhotos.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Foto';
        photoGrid.appendChild(img);
    });

    pageIndicator.textContent = `${currentPage + 1} / ${photosPerPage.length}`;
    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === photosPerPage.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateAlbum();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < photosPerPage.length - 1) {
        currentPage++;
        updateAlbum();
    }
});

// Carga inicial
updateAlbum();
