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
                slidesPerView: 6.4,
            },

            768: {
                spaceBetween: 8,
                slidesPerView: 5,
            },
            420: {
                spaceBetween: 5,
                slidesPerView: 2.5,
            },

            0: {
                spaceBetween: 3,
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


// lang
document.querySelectorAll(".lang-option").forEach(item => {
    item.addEventListener("click", function (event) {
        event.preventDefault();
        let selectedLang = this.getAttribute("data-lang");
        let langText = document.getElementById("langText");
        let elements = document.querySelectorAll(".translatable");

        // تحديث النص المتعلق بالـ LangText
        langText.innerText = selectedLang;

        elements.forEach(el => {
            // تغيير النصوص للـ LABELs
            if (el.tagName === 'LABEL') {
                el.innerText = el.getAttribute(`data-${selectedLang.toLowerCase()}`);
            }

            // تغيير النصوص للـ INPUTs و TEXTAREAs
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                let placeholder = el.getAttribute(`data-${selectedLang.toLowerCase()}-placeholder`);
                if (placeholder) {
                    el.placeholder = placeholder;
                }
            }

            // في حالة وجود نصوص مباشرة في العناصر الأخرى (مثل div أو p أو span)
            if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' && el.getAttribute(`data-${selectedLang.toLowerCase()}`)) {
                el.innerText = el.getAttribute(`data-${selectedLang.toLowerCase()}`);
            }
        });
    });
});


// form
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // منع إرسال الفورم بشكل تقليدي

    // الحصول على البيانات من الحقول
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let company = document.getElementById('company').value;
    let position = document.getElementById('position').value;
    let city = document.getElementById('city').value;
    let message = document.getElementById('message').value;

    // صياغة نص الرسالة
    let textMessage = `اسم العميل: ${name}%0Aرقم الجوال: ${phone}%0Aاسم المنشأة: ${company}%0Aالصفة في المنشأة: ${position}%0Aالمدينة: ${city}%0Aالمطلوب: ${message}`;

    // رقم الواتساب
    let whatsappNumber = "+201021170207";

    // إنشاء رابط الواتساب
    let whatsappLink = `https://wa.me/${whatsappNumber}?text=${textMessage}`;

    // إعادة توجيه المستخدم إلى رابط الواتساب
    window.location.href = whatsappLink;
});
