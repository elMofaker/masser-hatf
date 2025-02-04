function adjustLayout() {
    let width = window.innerWidth;
    let navbar = document.querySelector(".navbar");
    let container = document.querySelector(".container");

    if (width <= 600) { // للهواتف
        navbar.style.flexDirection = "column";
        navbar.style.padding = "10px";
        container.style.flexDirection = "column";
        container.style.width = "100%";
    } else if (width <= 1024) { // للأجهزة المتوسطة (تابلت)
        navbar.style.flexDirection = "row";
        container.style.flexDirection = "row";
        container.style.justifyContent = "center";
    } else { // لأجهزة الكمبيوتر
        navbar.style.flexDirection = "row";
        container.style.width = "80%";
    }
}

// استدعاء الدالة عند تحميل الصفحة وعند تغيير الحجم
window.addEventListener("load", adjustLayout);
window.addEventListener("resize", adjustLayout);





//nav

let navbar = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    let currentScrollY = window.scrollY;
    let navbarHeight = navbar.offsetHeight;

    // تحديث موقع الـ Navbar بناءً على الاتجاه
    navbar.style.top = currentScrollY + "px";

    // التأكد من عدم اختفاء الـ Navbar خارج الشاشة
    if (currentScrollY < navbarHeight) {
        navbar.style.top = "0px";
    }

    lastScrollY = currentScrollY;
});





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

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

function updateSlidePosition() {
    const slidesContainer = document.querySelector('.slides');
    const slideWidth = slides[0].offsetWidth + 20; // عرض الشريحة مع المسافة بينها
    slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
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





//translation

const translations = {
    "ar": {
        "home": "الصفحة الرئيسية",
        "about": "من نحن",
        "products": "المنتجات",
        "services": "الخدمات",
        "partners": "شركاء النجاح",
        "contact": "اتصل بنا",
        "slogan": "ابتكار وجودة لا مثيل لها في حلول التغليف التي تلبي احتياجات كافة الصناعات",
        "subSlogan": "حلول تغليف قوية، تصاميم مبتكرة",
        "contactUs": "تواصل معنا",
        "whoWeAre": "نعرفك علينا",
        "whoWeAreText": "تأسس مصنع مسير الصناعي عام 1990 في مجال الصناعات المعدنية ومنتجات التبريد المنزلية. من خلال سنوات من البحث والتطوير والتوسع ، أدخلنا خطوطًا متنوعة تشمل المزيد من الصناعات المعدنية بالإضافة إلى حلول التبريد التجاري الثابت والنقل. توسعت خدمات مسير لتخدم قطاعات أكبر من العملاء لتشمل خدمات ما بعد البيع في مبيعات قطع الغيار وصيانة أنظمة التبريد التجارية ومراكز تقديم الطعام والقهوة. يقع مصنع مسير الصناعي في المدينة الصناعية الأولى بمحافظة القصيم ، سلة غذاء المملكة من الخضار والتمور. نفخر بكوننا المصنع الوحيد من نوعه في المنطقة وجميع مناطق شمال المملكة ، مما يجعلنا مسؤولين عن تقديم الخدمة وتلبية احتياجات ومتطلبات عملائنا لتحقيق رؤية المملكة في تأمين الغذاء و سلاسل التوريد لجميع أنحاء المملكة. يقدم مصنع مسير الصناعي مجموعة متنوعة من المنتجات والخدمات والحلول المتكاملة التي تخدم مجموعة واسعة من العملاء في العديد من القطاعات المختلفة",
        "serviceTitle": "الخدمات",
        "service1": "صيانة غرف ومستودعات التبريد والتجميد",
        "service2": "صيانة صناديق السيارات المبردة",
        "service3": "صيانة وحدات تبريد السيارات المبردة",
        "service4": "أنظمة شفط الفنادق والتبريد المركزية",
        "productTitle": "المنتجات",
        "excellenceTitle": "اهم ما يميزنا",
        "partnersTitle": "شركاء النجاح",
        "contactFormTitle": "تواصل معنا عبر واتساب",
        "namePlaceholder": "الاسم",
        "phonePlaceholder": "هاتفك",
        "emailPlaceholder": "البريد الإلكتروني",
        "messagePlaceholder": "الرسالة...",
        "sendButton": "إرسال",
        "footerText": "نتميز بتقديم خدمات عالية الجودة...",
        "address": "المملكة العربية السعودية, القصيم",
        "productCard1Title": "غرف و مستودعات التبريد و التجميد",
        "productCard1Description": "مستودعات التبريد والتجميد من مسير توفر حلول تخزين متكاملة ومتطورة للحفاظ على المنتجات في بيئات محكومة بدرجات حرارة منخفضة. تعتمد مسير على أحدث التقنيات لضمان الحفاظ على الجودة والسلامة للمنتجات المخزنة، سواء كانت غذائية أو طبية. هذه المستودعات مجهزة بأنظمة تبريد فعّالة تلبي احتياجات الصناعات التي تتطلب تخزينًا طويل الأمد تحت درجات حرارة ثابتة، مع توفير مستويات عالية من الأمان والنظافة.",
        "productCard2Title": "السيارات المبردة و المجمدة",
        "productCard2Description": "مستودعات التبريد والتجميد من مسير توفر حلول تخزين.",
        "excellenceCard1Title": "أكثر من 17 عاما من الخبرة",
        "excellenceCard1Description": "تأسس مصنع مسير الصناعي عام 1990 في مجال الصناعات المعدنية ومنتجات التبريد المنزلية.",
        "excellenceCard2Title": "أكثر من 17 عاما من الخبرة",
        "excellenceCard2Description": "تأسس مصنع مسير الصناعي عام 1990 في مجال الصناعات المعدنية ومنتجات التبريد المنزلية.",
        "excellenceCard3Title": "أكثر من 17 عاما من الخبرة",
        "excellenceCard3Description": "تأسس مصنع مسير الصناعي عام 1990 في مجال الصناعات المعدنية ومنتجات التبريد المنزلية.",
    },
    "en": {
        "home": "Home",
        "about": "About Us",
        "products": "Products",
        "services": "Services",
        "partners": "Success Partners",
        "contact": "Contact Us",
        "slogan": "Unmatched Innovation and Quality in Packaging Solutions for All Industries",
        "subSlogan": "Strong Packaging Solutions, Innovative Designs",
        "contactUs": "Contact Us",
        "whoWeAre": "Who We Are",
        "whoWeAreText": "Maseer Industrial Factory was established in 1990 in the field of metal industries and household refrigeration products. Through years of research, development, and expansion, we introduced diverse lines that include more metal industries in addition to solutions for fixed commercial refrigeration and transportation. Maseer’s services have expanded to serve larger customer sectors, including after-sales services for spare parts sales and maintenance of commercial refrigeration systems, catering centers, and coffee shops. Maseer Industrial Factory is located in the First Industrial City in the Qassim region, the Kingdom’s food basket for vegetables and dates. We are proud to be the only factory of its kind in the region and all the northern parts of the Kingdom, making us responsible for providing service and meeting the needs and requirements of our customers to support the Kingdom’s vision of securing food and supply chains across the Kingdom. Maseer Industrial Factory offers a wide range of products, services, and integrated solutions that serve a wide variety of customers in many different sectors",
        "serviceTitle": "Services",
        "service1": "Maintenance of Cooling and Freezing Rooms & Warehouses",
        "service2": "Maintenance of Refrigerated Vehicle Boxes",
        "service3": "Maintenance of Refrigerated Vehicle Cooling Units",
        "service4": "Hotel Exhaust and Central Cooling Systems",
        "productTitle": "Products",
        "excellenceTitle": "What Makes Us Special",
        "partnersTitle": "Success Partners",
        "contactFormTitle": "Contact Us via WhatsApp",
        "namePlaceholder": "Name",
        "phonePlaceholder": "Your Phone",
        "emailPlaceholder": "Email",
        "messagePlaceholder": "Your Message...",
        "sendButton": "Send",
        "footerText": "We are distinguished by providing high-quality services and help our customers meet their needs in the best possible way. We are always here for you to provide innovative and effective solutions.",
        "address": "Kingdom of Saudi Arabia, Qassim",
        "productCard1Title": "Cooling and Freezing Rooms & Warehouses",
        "productCard1Description": "Maseer’s cooling and freezing warehouses provide integrated and advanced storage solutions to preserve products in environments with low temperatures. Maseer relies on the latest technologies to ensure the quality and safety of stored products, whether food or medical. These warehouses are equipped with efficient cooling systems to meet the needs of industries requiring long-term storage at stable temperatures, while providing high levels of safety and cleanliness.",
        "productCard2Title": "Refrigerated and Frozen Vehicles",
        "productCard2Description": "Maseer’s cooling and freezing warehouses provide storage solutions.",
        "excellenceCard1Title": "Over 17 Years of Experience",
        "excellenceCard1Description": "Maseer Industrial Factory was established in 1990 in the field of metal industries and home refrigeration products.",
        "excellenceCard2Title": "Over 17 Years of Experience",
        "excellenceCard2Description": "Maseer Industrial Factory was established in 1990 in the field of metal industries and home refrigeration products.",
        "excellenceCard3Title": "Over 17 Years of Experience",
        "excellenceCard3Description": "Maseer Industrial Factory was established in 1990 in the field of metal industries and home refrigeration products.",
    }
};

let currentLanguage = "ar";

function toggleLanguage() {
    currentLanguage = currentLanguage === "ar" ? "en" : "ar";
    document.getElementById("languageButton").textContent = currentLanguage === "ar" ? "EN" : "AR";
    translatePage();
}

function translatePage() {
    document.querySelectorAll(".scroll a").forEach((element, index) => {
        const keys = ["contact", "partners", "services", "products", "about", "home"];
        element.textContent = translations[currentLanguage][keys[index]];
    });
    
    document.querySelector(".welcome-hero-txt h2").textContent = translations[currentLanguage]["slogan"];
    document.querySelector(".welcome-hero-txt p").textContent = translations[currentLanguage]["subSlogan"];
    document.querySelector(".welcome-btn").textContent = translations[currentLanguage]["contactUs"];
    document.querySelector("#Who-we-are h2").textContent = translations[currentLanguage]["whoWeAre"];
    document.querySelector("#Who-we-are p").textContent = translations[currentLanguage]["whoWeAreText"];
    document.querySelector("#Services h2").textContent = translations[currentLanguage]["serviceTitle"];
    
    document.querySelectorAll(".overlay-s").forEach((element, index) => {
        const keys = ["service1", "service2", "service3", "service4"];
        element.textContent = translations[currentLanguage][keys[index]];
    });
    
    document.querySelector("#Products h2").textContent = translations[currentLanguage]["productTitle"];
    document.querySelector("#Excellence h2").textContent = translations[currentLanguage]["excellenceTitle"];
    document.querySelector("#Partners-of-success h2").textContent = translations[currentLanguage]["partnersTitle"];
    document.querySelector(".form-container h2").textContent = translations[currentLanguage]["contactFormTitle"];
    document.querySelector("input[name='name']").placeholder = translations[currentLanguage]["namePlaceholder"];
    document.querySelector("input[name='phone']").placeholder = translations[currentLanguage]["phonePlaceholder"];
    document.querySelector("input[name='email']").placeholder = translations[currentLanguage]["emailPlaceholder"];
    document.querySelector("textarea[name='message']").placeholder = translations[currentLanguage]["messagePlaceholder"];
    document.querySelector("button[type='submit']").textContent = translations[currentLanguage]["sendButton"];
    document.querySelector(".footer-text p").textContent = translations[currentLanguage]["footerText"];
    document.querySelectorAll(".contact-info p")[0].textContent = translations[currentLanguage]["address"];

    
    // Translate product section
    document.querySelectorAll(".card-title").forEach((element) => {
        if (element.getAttribute("data-lang") === "titlecard1") {
            element.textContent = translations[currentLanguage]["productCard1Title"];
        } else {
            element.textContent = translations[currentLanguage]["productCard2Title"];
        }
    });
    
    document.querySelectorAll(".card-description").forEach((element, index) => {
        if (index === 0) {
            element.textContent = translations[currentLanguage]["productCard1Description"];
        } else {
            element.textContent = translations[currentLanguage]["productCard2Description"];
        }
    });

     // Translate Excellence section
    document.querySelectorAll(".card .description h4").forEach((element, index) => {
        const key = `excellenceCard${index + 1}Title`;
        element.textContent = translations[currentLanguage][key];
    });
    
    document.querySelectorAll(".card .description p").forEach((element, index) => {
        const key = `excellenceCard${index + 1}Description`;
        element.textContent = translations[currentLanguage][key];
    });
}

