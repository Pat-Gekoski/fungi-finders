const navToggle = document.querySelector('[aria-controls="primary-navigation"]')
const primaryNav = document.getElementById('primary-navigation')

navToggle.addEventListener('click', (e) => {
	const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false
	navToggle.setAttribute('aria-expanded', !expanded)
	primaryNav.hidden = expanded
})
