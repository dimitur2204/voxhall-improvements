const toggle = document.querySelector("#show-more");
const items = Array.from(document.querySelectorAll(".grid-wrapper>div"));
toggle.addEventListener("click", () => {
	if (toggle.innerText === "Show more") {
		toggle.innerText = "Show less";
	} else {
		toggle.innerText = "Show more";
	}
	items.forEach((item, index) => {
		if (index > 7) {
			item.classList.toggle("hidden");
		}
	});
});
