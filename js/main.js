// ====================
// SERVICES NAVIGATION
// ====================

const servicesItems = document.querySelectorAll(".services__item");

servicesItems.forEach((item) => {
	item.addEventListener("click", function () {
		servicesItems.forEach((serviceItem) => {
			serviceItem.classList.remove("services__item--active");
		});

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
	document.body.classList.add("no-scroll");
}

// Закрытие меню
function closeMenu() {
	sideMenu.classList.remove("side-menu--open");

	document.body.classList.remove("menu-open");

	// Проверяем есть ли открытая модалка
	const hasOpenModal = document.querySelector(".modal--open");

	if (!hasOpenModal) {
		document.body.classList.remove("no-scroll");
	}
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

// Кнопка закрытия меню
closeMenuButton.addEventListener("click", closeMenu);

// Overlay меню
menuOverlay.addEventListener("click", closeMenu);

// ====================
// SIDE MENU ACTIVE ITEMS
// ====================

const navItems = document.querySelectorAll(".side-menu__item");

// Удаление active
function removeNavActiveClass() {
	navItems.forEach((item) => {
		item.classList.remove("side-menu__item--active");
	});
}

// Добавление active
function addNavActiveClass(item) {
	item.classList.add("side-menu__item--active");
}

// Клик по пунктам меню
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

// Удаление active языка
function removeLanguageActiveClass() {
	languageButtons.forEach((button) => {
		button.classList.remove("language__button--active");
	});
}

// Добавление active языка
function addLanguageActiveClass(button) {
	button.classList.add("language__button--active");
}

// Клик по языкам
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

	document.body.classList.add("no-scroll");
}

// Закрытие конкретной модалки
function closeModal(modal) {
	modal.classList.remove("modal--open");

	// Проверяем есть ли открытые модалки
	const hasOpenModal = document.querySelector(".modal--open");

	// Проверяем открыто ли меню
	const isMenuOpen = sideMenu.classList.contains("side-menu--open");

	// Если модалок нет — скрываем overlay
	if (!hasOpenModal) {
		modalOverlay.classList.remove("modal-overlay--open");
	}

	// Если ничего не открыто — возвращаем скролл
	if (!hasOpenModal && !isMenuOpen) {
		document.body.classList.remove("no-scroll");
	}
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
	button.addEventListener("click", function () {
		const modal = button.closest(".modal");

		closeModal(modal);
	});
});

// Закрытие по overlay
modalOverlay.addEventListener("click", function () {
	const openedModal = document.querySelector(".modal--open");

	if (openedModal) {
		closeModal(openedModal);
	}
});

// ====================
// ESC CLOSE
// ====================

document.addEventListener("keydown", function (event) {
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
