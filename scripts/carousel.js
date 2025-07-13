const carouselContainer = document.querySelector('.carousel-container');
const carouselImages = document.querySelector('.carousel-images');
const carouselButtons = document.querySelectorAll('.carousel-button');
const carouselDots = document.querySelectorAll('.dot');
const images = document.querySelectorAll('.carousel-images img');

let currentIndex = 0;
const totalImages = images.length;

function updateCarousel() {
    carouselImages.style.transform = `translateX(-${currentIndex * (4 * 100) / totalImages}%)`;

    carouselDots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

carouselButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('next')) {
            currentIndex = (currentIndex + 1) % totalImages;
        } else if (button.classList.contains('prev')) {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        }
        updateCarousel();
    });
});

carouselDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

let autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}, 5000);

carouselContainer.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
carouselContainer.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }, 5000);
});

updateCarousel();