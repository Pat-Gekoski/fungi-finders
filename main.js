const navToggle = document.querySelector('[aria-controls="primary-navigation"]')
const primaryNav = document.getElementById('primary-navigation')

navToggle.addEventListener('click', (e) => {
	const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false
	navToggle.setAttribute('aria-expanded', !expanded)
	primaryNav.hidden = expanded
})

const resizeObserver = new ResizeObserver((entries) => {
	document.body.classList.add('resizing')

	requestAnimationFrame(() => {
		document.body.classList.remove('resizing')
	})
})

resizeObserver.observe(document.body)
