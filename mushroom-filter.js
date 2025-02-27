const cards = document.querySelectorAll('.mushroom-guide .card')
const seasonalFilter = document.querySelector('#season')
const edibleFilter = document.querySelector('#edible')
const noResultsMsg = document.querySelector('.no-matches')

const currentFilters = {
	season: 'all',
	edible: 'all',
}

seasonalFilter.addEventListener('change', updateFilter)
edibleFilter.addEventListener('change', updateFilter)

function updateFilter(e) {
	const filterType = e.target.name
	currentFilters[filterType] = e.target.value

	filterCards()
}

function filterCards() {
	let hasVisibleCards = false
	cards.forEach((card) => {
		const season = card.querySelector('[data-season]').dataset.season
		const edible = card.querySelector('[data-edible]').dataset.edible

		const seasonMatch = currentFilters.season === 'all' || currentFilters.season === season
		const edibleMatch = currentFilters.edible === 'all' || currentFilters.edible === edible

		if (seasonMatch && edibleMatch) {
			card.hidden = false
			hasVisibleCards = true
		} else {
			card.hidden = true
		}
	})

	if (hasVisibleCards) {
		noResultsMsg.hidden = true
	} else {
		noResultsMsg.hidden = false
	}
}

function enableFiltering() {
	seasonalFilter.removeAttribute('hidden')
	edibleFilter.removeAttribute('hidden')
}

enableFiltering()
