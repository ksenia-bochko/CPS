document.addEventListener("DOMContentLoaded", function () {
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

  if (window.innerWidth <= 768) {
    new Swiper(".swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
});
