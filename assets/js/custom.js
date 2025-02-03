$(document).ready(function () {
	"use strict";

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 300) {
			$('.return-to-top').fadeIn();
		} else {
			$('.return-to-top').fadeOut();
		}
	});
	$('.return-to-top').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500);
		return false;
	});

	$(window).load(function () {
		$(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({ 'opacity': '0' });
		$(".welcome-hero-txt button").removeClass("animated fadeInDown").css({ 'opacity': '0' });
	});

	$(window).load(function () {
		$(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({ 'opacity': '0' });
		$(".welcome-hero-txt button").addClass("animated fadeInDown").css({ 'opacity': '0' });
	});

	$("#new-cars-carousel").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		dots: true,
		mouseDrag: true,
		nav: false,
		smartSpeed: 1000,
		transitionStyle: "fade",
		animateIn: 'fadeIn',
		animateOut: 'fadeOutLeft'
	});


	var owl = $('.testimonial-carousel');
	owl.owlCarousel({
		items: 3,
		margin: 0,

		loop: true,
		autoplay: true,
		smartSpeed: 1000,

		dots: false,
		autoplayHoverPause: false,

		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			640: {
				items: 2
			},
			992: {
				items: 3
			}
		}


	});


	$('.brand-item').owlCarousel({
		items: 6,
		loop: true,
		smartSpeed: 1000,
		autoplay: true,
		dots: false,
		autoplayHoverPause: false,
		responsive: {
			0: {
				items: 2
			},
			415: {
				items: 2
			},
			600: {
				items: 3
			},
			1000: {
				items: 6
			}
		}
	});


	$('.play').on('click', function () {
		owl.trigger('play.owl.autoplay', [1000])
	})
	$('.stop').on('click', function () {
		owl.trigger('stop.owl.autoplay')
	})

});









let isArabic = true;

function toggleLanguage() {
	isArabic = !isArabic;
	document.documentElement.lang = isArabic ? 'ar' : 'en';

//translation

// كائن يحتوي على النصوص باللغتين
const translations = {
    en: {
        home: "Home",
        about: "About Us",
        products: "Products",
        services: "Services",
        partners: "Partners",
        contact: "Contact Us",
        slogan: "Innovation and Unmatched Quality in Packaging Solutions",
        subSlogan: "Strong packaging solutions, innovative designs",
        contactUs: "Contact Us",
        whoWeAre: "Who We Are",
        whoWeAreText: "Mesir industrial plant was established in 1990 in the field of metallurgical industry and household refrigeration products. Through years of R & D and expansion, we have introduced diversified lines that include more metallurgical industries as well as commercial stationary refrigeration and transportation solutions. Mesir services has expanded to serve larger segments of customers to include after-sales services in spare parts sales,maintenance of commercial refrigeration systems, catering and coffee centers. The maseer industrial factory is located in the first industrial city in Qassim governorate, the kingdom's food basket of vegetables and dates. We are proud to be the only factory of its kind in the region and all regions of the north of the kingdom, which makes us responsible for providing service and meeting the needs and requirements of our customers to achieve the vision of the kingdom in securing food and supply chains throughout the kingdom. Mesir industrial factory offers a variety of products, services and integrated solutions that serve a wide range of customers in many different sectors.",
        servicesTitle: "Services",
        service1: "Maintenance of cooling and freezing rooms",
        service2: "Maintenance of refrigerated vehicle boxes",
        service3: "Maintenance of refrigerated vehicle units",
        service4: "Hotel suction and central cooling systems",
        partnersTitle: "Products",
        excellenceTitle: "What Sets Us Apart",
        experience: "Over 17 years of experience",
        description: "Maseer Industrial Factory was established in 1990 in the field of metal industries and household cooling products.",
        contactFormTitle: "Contact us via WhatsApp",
        product1Title: "Cooling and Freezing Rooms and Warehouses",
        product1Description: "Maseer’s cooling and freezing warehouses provide integrated and advanced storage solutions to keep products in environments with controlled low temperatures. Maseer relies on the latest technologies to ensure product quality and safety, whether for food or medical items. These warehouses are equipped with efficient cooling systems to meet the needs of industries requiring long-term storage under stable temperatures, while providing high levels of safety and cleanliness.",
        product2Title: "Refrigerated and Freezer Vehicles",
        product2Description: "Maseer’s cooling and freezing warehouses provide storage solutions.",
        footerText: "We are distinguished by providing high-quality services and helping our clients meet their needs in the best possible ways. We are always here for you to offer innovative and effective solutions.",
        send: "Send",
        location: "Saudi Arabia, Qassim",
        phone: "0163242112 - 0553242112",
        email: "info@maseer.com.sa",
        website: "https://maseer.com.sa",
        copyright: "All rights reserved to Maseer © 2024",
        copyrightText: "© Designed by HATF",
        },

    ar: {
        home: "الصفحة الرئيسية",
        about: "من نحن",
        products: "المنتجات",
        services: "الخدمات",
        partners: "شركاء النجاح",
        contact: "اتصل بنا",
        slogan: "ابتكار وجودة لا مثيل لها في حلول التغليف",
        subSlogan: "حلول تغليف قوية، تصاميم مبتكرة",
        contactUs: "تواصل معنا",
        whoWeAre: "نعرفك علينا",
        whoWeAreText: "تأسس مصنع مسير الصناعي عام 1990 في مجال الصناعات المعدنية ومنتجات التبريد المنزلية. من خلال سنوات من البحث والتطوير والتوسع ، أدخلنا خطوطًا متنوعة تشمل المزيد من الصناعات المعدنية بالإضافة إلى حلول التبريد التجاري الثابت والنقل. توسعت خدمات مسير لتخدم قطاعات أكبر من العملاء لتشمل خدمات ما بعد البيع في مبيعات قطع الغيار وصيانة أنظمة التبريد التجارية ومراكز تقديم الطعام والقهوة. يقع مصنع مسير الصناعي في المدينة الصناعية الأولى بمحافظة القصيم ، سلة غذاء المملكة من الخضار والتمور. نفخر بكوننا المصنع الوحيد من نوعه في المنطقة وجميع مناطق شمال المملكة ، مما يجعلنا مسؤولين عن تقديم الخدمة وتلبية احتياجات ومتطلبات عملائنا لتحقيق رؤية المملكة في تأمين الغذاء و سلاسل التوريد لجميع أنحاء المملكة. يقدم مصنع مسير الصناعي مجموعة متنوعة من المنتجات والخدمات والحلول المتكاملة التي تخدم مجموعة واسعة من العملاء في العديد من القطاعات المختلفة.",
        servicesTitle: "الخدمات",
        service1: "صيانة غرف ومستودعات التبريد والتجميد",
        service2: "صيانة صناديق السيارات المبردة",
        service3: "صيانة وحدات تبريد السيارات المبردة",
        service4: "أنظمة شفط الفنادق والتبريد المركزية",
        partnersTitle: "المنتجات",

        experience: "أكثر من 17 عاما من الخبرة",
        description: "تأسس مصنع مسير الصناعي عام 1990 في مجال الصناعات المعدنية ومنتجات التبريد المنزلية.",
        successTitle: "شركاء النجاح",
        product1Title: "غرف و مستودعات التبريد و التجميد",
        product1Description: "مستودعات التبريد والتجميد من مسير توفر حلول تخزين متكاملة ومتطورة للحفاظ على المنتجات في بيئات محكومة بدرجات حرارة منخفضة. تعتمد مسير على أحدث التقنيات لضمان الحفاظ على الجودة والسلامة للمنتجات المخزنة، سواء كانت غذائية أو طبية. هذه المستودعات مجهزة بأنظمة تبريد فعّالة تلبي احتياجات الصناعات التي تتطلب تخزينًا طويل الأمد تحت درجات حرارة ثابتة، مع توفير مستويات عالية من الأمان والنظافة.",
        product2Title: "السيارات المبردة و المجمدة",
        product2Description: "مستودعات التبريد والتجميد من مسير توفر حلول تخزين.",
        footerText: "نتميز بتقديم خدمات عالية الجودة ونساعد عملاءنا في تلبية احتياجاتهم بأفضل الطرق الممكنة. نحن هنا دائمًا من أجلكم لتقديم حلول مبتكرة وفعّالة.",
        contactFormTitle: "تواصل معنا عبر واتساب",
        send: "إرسال",
        location: "المملكة العربية السعودية, القصيم",
        phone: "0163242112 - 0553242112",
        email: "info@maseer.com.sa",
        website: "https://maseer.com.sa",
        copyright: "جميع الحقوق محفوظة لـ مَسير © 2024",
        copyrightText: "© تم تصميمه بواسطة هتف",
        }
};

// تغيير اللغة عند الضغط على الزر
function toggleLanguage() {
    let currentLang = document.documentElement.lang || "ar";
    let newLang = currentLang === "ar" ? "en" : "ar";

    // تغيير لغة الصفحة
    document.documentElement.lang = newLang;

    // تغيير النصوص بناءً على اللغة الجديدة
    document.getElementById("languageButton").innerText = newLang === "ar" ? "EN" : "AR";
    document.querySelector(".nav-links li:nth-child(1) a").innerText = translations[newLang].contact;
    document.querySelector(".nav-links li:nth-child(2) a").innerText = translations[newLang].partners;
    document.querySelector(".nav-links li:nth-child(3) a").innerText = translations[newLang].services;
    document.querySelector(".nav-links li:nth-child(4) a").innerText = translations[newLang].products;
    document.querySelector(".nav-links li:nth-child(5) a").innerText = translations[newLang].about;
    document.querySelector(".nav-links li:nth-child(6) a").innerText = translations[newLang].home;
    document.querySelector(".welcome-hero-txt h2").innerHTML = translations[newLang].slogan;
    document.querySelector(".welcome-hero-txt p").innerText = translations[newLang].subSlogan;
    document.querySelector(".welcome-btn").innerText = translations[newLang].contactUs;
    document.querySelector(".about-text h2").innerText = translations[newLang].whoWeAre;
    document.querySelector(".about-text p").innerText = translations[newLang].whoWeAreText;
    document.querySelector(".service-btn h2").innerText = translations[newLang].servicesTitle;
    document.querySelector(".slide:nth-child(1) .overlay-s").innerText = translations[newLang].service1;
    document.querySelector(".slide:nth-child(2) .overlay-s").innerText = translations[newLang].service2;
    document.querySelector(".slide:nth-child(3) .overlay-s").innerText = translations[newLang].service3;
    document.querySelector(".slide:nth-child(4) .overlay-s").innerText = translations[newLang].service4;
    document.querySelector(".tit-head").innerText = translations[newLang].excellenceTitle;
    document.querySelector(".container-slider label[for='c1'] .description h4").innerText = translations[newLang].experience;
    document.querySelector(".container-slider label[for='c1'] .description p").innerText = translations[newLang].description;
    document.querySelector(".card-prod:nth-child(1) .card-title").innerText = translations[newLang].product1Title;
    document.querySelector(".card-prod:nth-child(1) .card-description").innerText = translations[newLang].product1Description;
    document.querySelector(".card-prod:nth-child(2) .card-title").innerText = translations[newLang].product2Title;
    document.querySelector(".card-prod:nth-child(2) .card-description").innerText = translations[newLang].product2Description;
    document.querySelector(".tit-head").innerText = translations[newLang].successTitle;
    document.querySelector(".footer-text p").innerText = translations[newLang].footerText;
    document.querySelector(".tit-head").innerText = translations[newLang].partnersTitle;
    document.querySelector(".tit-head").innerText = translations[newLang].partnersTitle;
    document.querySelector(".contact-form h2").innerText = translations[newLang].contactFormTitle;
    document.querySelector("#contactForm button").innerText = translations[newLang].send;
    document.querySelector(".contact-info p:nth-child(1)").innerText = translations[newLang].location;
    document.querySelector(".contact-info p:nth-child(2)").innerText = translations[newLang].phone;
    document.querySelector(".contact-info p:nth-child(3)").innerText = translations[newLang].email;
    document.querySelector(".contact-info p:nth-child(4) a").innerText = translations[newLang].website;
    document.querySelector(".footer-copyright p").innerText = translations[newLang].copyright;
    document.querySelector(".footer-copyright:nth-child(2) p").innerText = translations[newLang].designedBy;
    document.querySelector(".footer-copyright p").innerText = translations[newLang].copyrightText;
}

// تشغيل اللغة المحفوظة عند تحميل الصفحة
window.onload = function () {
    let savedLang = localStorage.getItem("language") || "ar";
    document.documentElement.lang = savedLang;
    toggleLanguage();
};
}













