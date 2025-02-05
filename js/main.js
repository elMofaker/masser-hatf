// start slider
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth; // عرض الشريحة
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`; // نقل الشرائح
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}



// بدء العرض الأول
showSlide(currentIndex);

// end slider