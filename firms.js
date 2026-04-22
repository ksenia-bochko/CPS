let allFirms = document.querySelector(".firms");
let showMoreButton = document.querySelector(".more__btn");
let btnText = document.querySelector(".btn-text");
let iconMore = showMoreButton.querySelector(".more__icon");

showMoreButton.addEventListener("click", function () {
  allFirms.classList.toggle("firms--open");

  if (allFirms.classList.contains("firms--open")) {
    btnText.textContent = "Скрыть";
    iconMore.classList.add("rotate");
  } else {
    btnText.textContent = "Показать все";
    iconMore.classList.remove("rotate");
  }
});



let swiper = null;

function initSwiper() {
  if (window.innerWidth <= 768 && !swiper) {
    swiper = new Swiper(".swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else if (window.innerWidth > 768 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

initSwiper();

window.addEventListener("resize", initSwiper);
