// Select carousel elements
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;
const totalSlides = carouselSlides.length;

// Function to update the carousel's slide position
function updateCarousel() {
    const offset = -currentIndex * 100; // Move to the current slide
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Function to move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    updateCarousel();
}

// Function to move to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide
    updateCarousel();
}

// Add event listeners to navigation buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Automatic sliding
let autoSlideInterval = setInterval(nextSlide, 5000); // Change every 5 seconds

// Pause auto sliding when user hovers over the carousel
carouselContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
carouselContainer.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(nextSlide, 5000);
});
