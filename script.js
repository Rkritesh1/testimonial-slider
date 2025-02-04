let currentIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentIndex ? 'block' : 'none';
  });
}

// Initially show the first slide
updateSlider();
