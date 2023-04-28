export default function hamburgerMenu(panelBtn, panel, menuLink) {
	const d = document;
	// Cualquier evento click en el documento es capturado acá
	d.addEventListener("click", (e) => {
		// e.target representa el objeto en donde se hizo clic
		if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
			d.querySelector(panel).classList.toggle('is-active')
			d.querySelector(panelBtn).classList.toggle('is-active')
		}
		if (e.target.matches(menuLink)) {
			d.querySelector(panel).classList.remove('is-active')
			d.querySelector(panelBtn).classList.remove('is-active')
		}
	})
}
