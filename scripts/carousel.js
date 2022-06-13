const homepageCarousel = new Swiper(".concerts", {
	initialSlide: 3,
	centeredSlides: true,
	grabCursor: true,
	effect: "coverflow",
	loop: true,
	coverflowEffect: {
		rotate: 20,
		stretch: 0,
		depth: 500,
		modifier: 1,
		slideShadows: true,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	slidesPerView: 1,
	breakpoints: {
		460: {
			slidesPerView: 2,
		},
		720: {
			slidesPerView: 3,
		},
	},
});
