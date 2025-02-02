// تغيير النص عند النقر على زر اللغة
document.getElementById('languageButton').addEventListener('click', function () {
    const button = document.getElementById('languageButton');
    if (button.textContent === 'EN') {
        button.textContent = 'AR';
        // هنا يمكنك إضافة تغيير اللغة الفعلي للصفحة
    } else {
        button.textContent = 'EN';
        // هنا يمكنك إعادة اللغة إلى العربية
    }
});






//services
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





//Products


document.querySelectorAll(".toggle-arrow").forEach(arrow => {
    arrow.addEventListener("click", function () {
        let cardContent = this.parentElement;
        let description = cardContent.querySelector(".card-description");
        let extraText = cardContent.querySelector(".extra-text");

        if (extraText.style.display === "none") {
            extraText.style.display = "inline";
            description.classList.add("expanded");
            this.classList.add("expanded"); // يضيف تأثير 45 درجة
        } else {
            extraText.style.display = "none";
            description.classList.remove("expanded");
            this.classList.remove("expanded"); // يعيد السهم لحالته الطبيعية
        }
    });
});




//slide

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);