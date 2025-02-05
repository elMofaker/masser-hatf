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
                spaceBetween: 10,
                slidesPerView: 4.4,
            },

            768: {
                spaceBetween: 8,
                slidesPerView: 4.1,
            },
            420: {
                spaceBetween: 5,
                slidesPerView: 2.5,
            },

            0: {
                spaceBetween: 5,
                slidesPerView: 1.5,
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


// prodact
document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".card-body");

    cards.forEach(card => {
        let arrow = card.querySelector('img[alt="img"]');
        card.addEventListener("click", function () {
            document.querySelectorAll('.card-body img[alt="img"]').forEach(img => {
                img.style.transform = "rotate(0deg)";

            });

            if (!card.classList.contains("open")) {
                arrow.style.transform = "rotate(180deg)";
                card.classList.add("open");
            } else {
                arrow.style.transform = "rotate(0deg)";
                card.classList.remove("open");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".toggle-card").forEach(card => {
        card.addEventListener("click", function () {
            this.classList.toggle("expanded");
        });
    });
});