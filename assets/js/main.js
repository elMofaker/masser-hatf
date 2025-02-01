let index = 0;
function showSlide() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(${-index * 270}px)`;
}
function nextSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index < totalSlides - 3) {
        index++;
        showSlide();
    }
}
function prevSlide() {
    if (index > 0) {
        index--;
        showSlide();
    }
}



function toggleText(event) {
    event.preventDefault();
    let cardContent = event.target.parentElement;
    let description = cardContent.querySelector(".card-description");
    let extraText = cardContent.querySelector(".extra-text");

    if (extraText.style.display === "none") {
        extraText.style.display = "inline";
        description.classList.add("expanded");
        event.target.innerText = "إقرأ أقل";
    } else {
        extraText.style.display = "none";
        description.classList.remove("expanded");
        event.target.innerText = "اقرأ المزيد";
    }
}