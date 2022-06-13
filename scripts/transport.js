const heads = Array.from(document.getElementsByClassName("faq-card-all"));
heads.forEach((h) => {
	h.addEventListener("click", () => {
		const body = h.lastElementChild;
		if (body.style.display === "block") {
			body.style.display = "none";
		} else {
			body.style.display = "block";
		}
	});
});
