const navbar = document.querySelector(".mobile-navbar");
var slideout = new Slideout({
	panel: document.getElementById("panel"),
	menu: document.getElementById("menu"),
	padding: 256,
	tolerance: 70,
	easing: "cubic-bezier(.32,2,.55,.27)",
	side: "right",
	touch: false,
});

const overlay = document.getElementById("overlay");
// Toggle button
document.querySelector("#nav-toggle").addEventListener("click", function () {
	slideout.open();
	document.querySelector("menu>a").focus();
});
document.querySelector("#nav-close").addEventListener("click", function () {
	slideout.close();
});
