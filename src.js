// start scroll nav
const navbar = document.getElementById('navbar');
window.onscroll = function () {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('not-scroll');
    } else {
        navbar.classList.add('not-scroll');
        navbar.classList.remove('scrolled');
    };
}
// end scroll nav


// start swiper
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {

            1024: {
                slidesPerView: 3.2,
            },

            768: {
                slidesPerView: 2.2,
            },

            0: {
                slidesPerView: 1.2,
            },
        }
    });

    document.getElementById("prev-slide").addEventListener("click", function () {
        swiper.slidePrev();
    });

    document.getElementById("next-slide").addEventListener("click", function () {
        swiper.slideNext();
    });
});
// end swiper

