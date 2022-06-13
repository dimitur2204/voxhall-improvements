const bar = new Swiper(".beers", {
	initialSlide: 1,
	// centeredSlides: true,
	grabCursor: true,
	effect: "coverflow",
	loop: true,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 300,
		modifier: 1.2,
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

function barTapsAnimation() {
	const animeTimeline = anime.timeline({
		autoplay: false,
	});
	animeTimeline.add({
		duration: 1200,
		targets: ".line.tall",
		easing: "easeOutCirc",
		height: ["0", "120px"],
		delay: anime.stagger(300, { start: 300 }),
	});
	animeTimeline.add(
		{
			targets: ".line.short",
			easing: "easeOutCirc",
			height: ["0", "60px"],
			delay: anime.stagger(300),
		},
		"-=1500"
	);
	animeTimeline.add(
		{
			targets: ".beer-info",
			easing: "easeOutCirc",
			opacity: [0, 1],
			delay: anime.stagger(200, { start: 500 }),
		},
		"-=500"
	);
	animeTimeline.add(
		{
			targets: ".price",
			easing: "easeOutCirc",
			opacity: [0, 1],
			delay: anime.stagger(200, { start: 500 }),
		},
		"-=1500"
	);
	const options = {
		rootMargin: "20px",
		threshold: 0.6,
	};
	const linesObserver = new IntersectionObserver(([entry]) => {
		if (entry && entry.isIntersecting) {
			animeTimeline.play();
			linesObserver.unobserve(document.getElementById("taps-line"));
		}
	}, options);
	linesObserver.observe(document.getElementById("taps-line"));
}

barTapsAnimation();

const drinksCarousel = new Swiper(".drinks-menu", {
	grabCursor: true,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	slidesPerView: 1,
	centeredSlides: true,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
});

const burgerCarousel = new Swiper(".burgers", {
	spaceBetween: 20,
	grabCursor: true,
	loop: true,
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
