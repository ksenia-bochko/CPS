/* global Swiper */

// ====================
// SHOW MORE BUTTONS
// ====================

const firms = document.querySelector(".firms");
const technics = document.querySelector(".technics");

// Кнопки firms
const firmsButton = document.querySelector(".firms-btn");
const firmsButtonText = document.querySelector(".firms-text");
const firmsIcon = document.querySelector(".firms-icon");

// Кнопки technics
const technicsButton = document.querySelector(".tech-btn");
const technicsButtonText = document.querySelector(".tech-text");
const technicsIcon = document.querySelector(".tech-icon");

// ====================
// FIRMS TOGGLE
// ====================

firmsButton.addEventListener("click", function () {
	firms.classList.toggle("firms--open");

	const isOpen = firms.classList.contains("firms--open");

	if (isOpen) {
		firmsButtonText.textContent = "Скрыть";
		firmsIcon.classList.add("rotate");
	} else {
		firmsButtonText.textContent = "Показать все";
		firmsIcon.classList.remove("rotate");
	}
});

// ====================
// TECHNICS TOGGLE
// ====================

technicsButton.addEventListener("click", function () {
	technics.classList.toggle("technics--open");

	const isOpen = technics.classList.contains("technics--open");

	if (isOpen) {
		technicsButtonText.textContent = "Скрыть";
		technicsIcon.classList.add("rotate");
	} else {
		technicsButtonText.textContent = "Показать все";
		technicsIcon.classList.remove("rotate");
	}
});

// ====================
// SWIPERS
// ====================

let firmsSwiper = null;
let technicsSwiper = null;
let pricesSwiper = null;

// ====================
// FIRMS SWIPER
// ====================

function initFirmsSwiper() {
	// Мобильная версия
	if (window.innerWidth < 768 && !firmsSwiper) {
		firmsSwiper = new Swiper(".firms-swiper", {
			slidesPerView: "auto",
			spaceBetween: 16,
			loop: true,

			pagination: {
				el: ".swiper-pagination__firms",
				clickable: true,
			},
		});
	}

	// Планшет/десктоп
	if (window.innerWidth >= 768 && firmsSwiper) {
		firmsSwiper.destroy(true, true);
		firmsSwiper = null;
	}
}

// ====================
// TECHNICS SWIPER
// ====================

function initTechnicsSwiper() {
	// Мобильная версия
	if (window.innerWidth < 768 && !technicsSwiper) {
		technicsSwiper = new Swiper(".technics-swiper", {
			slidesPerView: "auto",
			spaceBetween: 16,
			loop: true,

			pagination: {
				el: ".swiper-pagination__tech",
				clickable: true,
			},
		});
	}

	// Планшет/десктоп
	if (window.innerWidth >= 768 && technicsSwiper) {
		technicsSwiper.destroy(true, true);
		technicsSwiper = null;
	}
}

// ====================
// PRICES SWIPER
// ====================

function initPricesSwiper() {
	// Мобильная версия
	if (window.innerWidth < 768 && !pricesSwiper) {
		pricesSwiper = new Swiper(".prices__mobile", {
			slidesPerView: "auto",
			spaceBetween: 16,
			loop: true,

			pagination: {
				el: ".swiper-pagination__prices",
				clickable: true,
			},
		});
	}

	// Планшет/десктоп
	if (window.innerWidth >= 768 && pricesSwiper) {
		pricesSwiper.destroy(true, true);
		pricesSwiper = null;
	}
}

// ====================
// INIT
// ====================

initFirmsSwiper();
initTechnicsSwiper();
initPricesSwiper();

// Повторная инициализация при resize
window.addEventListener("resize", function () {
	initFirmsSwiper();
	initTechnicsSwiper();
	initPricesSwiper();
});
