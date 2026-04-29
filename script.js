let tab_links = document.querySelectorAll("li.tabs__link");

console.log(tab_links);

tab_links.forEach((link) => {
	link.addEventListener("click", function () {
		tab_links.forEach((item) => {
			item.classList.remove("tabs__link--active");
		});

		this.classList.add("tabs__link--active");
	});
});
