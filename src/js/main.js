import "./sliders.js";

import "../styles/style.css";
import "../styles/sliders.css";

// ====================
// SERVICES NAVIGATION
// ====================

const servicesItems = document.querySelectorAll(".services__item");

// ====================
// SIDE MENU
// ====================

const sideMenu = document.querySelector(".side-menu");
const burgerButton = document.querySelector(".menu__button--burger");
const closeMenuButton = document.querySelector(".side-menu__button--close");
const menuOverlay = document.querySelector(".menu-overlay");
const navItems = document.querySelectorAll(".side-menu__item");

// ====================
// LANGUAGE BUTTONS
// ====================

const languageButtons = document.querySelectorAll(".language__button");

// ====================
// MODALS
// ====================

const modalOverlay = document.querySelector(".modal-overlay");
const callModal = document.querySelector(".modal-call");
const feedbackModal = document.querySelector(".modal-feedback");
const callButtons = document.querySelectorAll(".contact__btn--call");
const feedbackButtons = document.querySelectorAll(".contact__btn--feedback");
const modalCloseButtons = document.querySelectorAll(".modal__close");

// ====================
// HELPERS
// ====================

function setActive(items, activeClass, currentItem) {
	items.forEach((item) => {
		item.classList.remove(activeClass);
	});

	currentItem.classList.add(activeClass);
}

function setupActiveItems(items, activeClass) {
	items.forEach((item) => {
		item.addEventListener("click", () => {
			setActive(items, activeClass, item);
		});
	});
}

function setupModalButtons(buttons, modal) {
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			openModal(modal);
		});
	});
}

// ====================
// MENU FUNCTIONS
// ====================

// Открытие меню
function openMenu() {
	sideMenu.classList.add("side-menu--open");

	document.body.classList.add("menu-open");
	document.body.classList.add("no-scroll");
}

// Закрытие меню
function closeMenu() {
	sideMenu.classList.remove("side-menu--open");

	document.body.classList.remove("menu-open");

	const hasOpenModal = document.querySelector(".modal--open");

	if (!hasOpenModal) {
		document.body.classList.remove("no-scroll");
	}
}

// Переключение меню
function toggleMenu() {
	if (sideMenu.classList.contains("side-menu--open")) {
		closeMenu();
	} else {
		openMenu();
	}
}

// ====================
// MODAL FUNCTIONS
// ====================

// Открытие модалки
function openModal(modal) {
	modalOverlay.classList.add("modal-overlay--open");

	modal.classList.add("modal--open");

	document.body.classList.add("no-scroll");
}

// Закрытие конкретной модалки
function closeModal(modal) {
	modal.classList.remove("modal--open");

	const hasOpenModal = document.querySelector(".modal--open");
	const isMenuOpen = sideMenu.classList.contains("side-menu--open");

	if (!hasOpenModal) {
		modalOverlay.classList.remove("modal-overlay--open");
	}

	if (!hasOpenModal && !isMenuOpen) {
		document.body.classList.remove("no-scroll");
	}
}

// ====================
// INIT ACTIVE ITEMS
// ====================

setupActiveItems(servicesItems, "services__item--active");
setupActiveItems(navItems, "side-menu__item--active");
setupActiveItems(languageButtons, "language__button--active");

// ====================
// INIT MODALS
// ====================

setupModalButtons(callButtons, callModal);
setupModalButtons(feedbackButtons, feedbackModal);

// ====================
// MENU EVENTS
// ====================

// Клик по бургеру
burgerButton.addEventListener("click", toggleMenu);

// Кнопка закрытия меню
closeMenuButton.addEventListener("click", closeMenu);

// Overlay меню
menuOverlay.addEventListener("click", closeMenu);

// ====================
// MODAL EVENTS
// ====================

// Закрытие по кнопке
modalCloseButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const modal = button.closest(".modal");

		closeModal(modal);
	});
});

// Закрытие по overlay
modalOverlay.addEventListener("click", () => {
	const openedModal = document.querySelector(".modal--open");

	if (openedModal) {
		closeModal(openedModal);
	}
});

// ====================
// ESC CLOSE
// ====================

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		const openedModal = document.querySelector(".modal--open");

		const isMenuOpen = sideMenu.classList.contains("side-menu--open");

		if (openedModal) {
			closeModal(openedModal);
			return;
		}

		if (isMenuOpen) {
			closeMenu();
		}
	}
});
