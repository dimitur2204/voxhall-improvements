(function () {
	const themeSwitch = document.getElementById("theme-switch");
	const themeSwitchIcon = document.querySelector("#theme-switch>i");
	let theme = "dark";
	const dark = {
		"--body-color": "var(--primary-white)",
		"--body-text": "var(--primary-black)",
	};
	const light = {
		"--body-color": "var(--primary-black)",
		"--body-text": "var(--primary-white)",
	};

	function setVariable(variable, value) {
		document.documentElement.style.setProperty(variable, value);
	}

	themeSwitch.addEventListener("click", () => {
		if (theme === "dark") {
			theme = "light";
			themeSwitch.classList.remove("btn-dark");
			themeSwitchIcon.classList.remove("fa-moon");
			themeSwitchIcon.classList.add("fa-sun");
			Object.keys(light).map((variable) => {
				setVariable(variable, light[variable]);
			});

			return;
		}
		theme = "dark";
		themeSwitchIcon.classList.remove("fa-sun");
		themeSwitch.classList.add("btn-dark");
		themeSwitchIcon.classList.add("fa-moon");
		Object.keys(dark).map((variable) => {
			setVariable(variable, dark[variable]);
		});
	});
})();
