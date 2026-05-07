// ====================
// SERVICES NAVIGATION
// ====================

const servicesItems = document.querySelectorAll(".services__item");

servicesItems.forEach((item) => {
	item.addEventListener("click", function () {
		// Удаляем active у всех элементов
		servicesItems.forEach((serviceItem) => {
			serviceItem.classList.remove("services__item--active");
		});

		// Добавляем active текущему элементу
		this.classList.add("services__item--active");
	});
});

// ====================
// SIDE MENU
// ====================

const sideMenu = document.querySelector(".side-menu");
const burgerButton = document.querySelector(".menu__button--burger");
const closeMenuButton = document.querySelector(".side-menu__button--close");
const menuOverlay = document.querySelector(".menu-overlay");

// Открытие меню
function openMenu() {
	sideMenu.classList.add("side-menu--open");
	document.body.classList.add("menu-open");
}

// Закрытие меню
function closeMenu() {
	sideMenu.classList.remove("side-menu--open");
	document.body.classList.remove("menu-open");
}

// Клик по бургеру
burgerButton.addEventListener("click", function () {
	const isMenuOpen = sideMenu.classList.contains("side-menu--open");

	if (isMenuOpen) {
		closeMenu();
	} else {
		openMenu();
	}
});

// Клик по кнопке закрытия
closeMenuButton.addEventListener("click", closeMenu);

// Клик по overlay
menuOverlay.addEventListener("click", closeMenu);

// Закрытие меню при клике вне меню
document.addEventListener("click", function (event) {
	const isMenuOpen = sideMenu.classList.contains("side-menu--open");

	const clickInsideMenu = sideMenu.contains(event.target);

	const clickOnBurger = burgerButton && burgerButton.contains(event.target);

	if (isMenuOpen && !clickInsideMenu && !clickOnBurger) {
		closeMenu();
	}
});

// ====================
// SIDE MENU ACTIVE ITEMS
// ====================

const navItems = document.querySelectorAll(".side-menu__item");

// Удаляем active у всех пунктов меню
function removeNavActiveClass() {
	navItems.forEach((item) => {
		item.classList.remove("side-menu__item--active");
	});
}

// Добавляем active выбранному пункту
function addNavActiveClass(item) {
	item.classList.add("side-menu__item--active");
}

// Обработка клика по пунктам меню
navItems.forEach((item) => {
	const button = item.querySelector("button");

	button.addEventListener("click", function () {
		removeNavActiveClass();
		addNavActiveClass(item);
	});
});

// ====================
// LANGUAGE BUTTONS
// ====================

const languageButtons = document.querySelectorAll(".language__button");

// Удаляем active у всех языков
function removeLanguageActiveClass() {
	languageButtons.forEach((button) => {
		button.classList.remove("language__button--active");
	});
}

// Добавляем active выбранному языку
function addLanguageActiveClass(button) {
	button.classList.add("language__button--active");
}

// Обработка клика по языкам
languageButtons.forEach((button) => {
	button.addEventListener("click", function () {
		removeLanguageActiveClass();
		addLanguageActiveClass(button);
	});
});

// ====================
// MODALS
// ====================

const modalOverlay = document.querySelector(".modal-overlay");

const callModal = document.querySelector(".modal-call");
const feedbackModal = document.querySelector(".modal-feedback");

const callButtons = document.querySelectorAll(".contact__btn--call");

const feedbackButtons = document.querySelectorAll(".contact__btn--feedback");

const modalCloseButtons = document.querySelectorAll(".modal__close");

// Открытие модалки
function openModal(modal) {
	modalOverlay.classList.add("modal-overlay--open");
	modal.classList.add("modal--open");
}

// Закрытие всех модалок
function closeModals() {
	modalOverlay.classList.remove("modal-overlay--open");

	callModal.classList.remove("modal--open");
	feedbackModal.classList.remove("modal--open");
}

// Открытие модалки звонка
callButtons.forEach((button) => {
	button.addEventListener("click", function () {
		openModal(callModal);
	});
});

// Открытие модалки обратной связи
feedbackButtons.forEach((button) => {
	button.addEventListener("click", function () {
		openModal(feedbackModal);
	});
});

// Закрытие по кнопке
modalCloseButtons.forEach((button) => {
	button.addEventListener("click", closeModals);
});

// Закрытие по overlay
modalOverlay.addEventListener("click", closeModals);

console.log(callButtons);
console.log(feedbackButtons);