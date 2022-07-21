function solve() {
	document.querySelector('#searchBtn').addEventListener('click', onClick);

	function onClick() {
		let searchElement = document.querySelector('#searchField');
		let searchInput = searchElement.value;
		let table = document.querySelectorAll('tbody tr');

		for (let i = 0; i < table.length; i++) {
			// Clear everything from last search
			table[i].classList.remove('select');
			let tdElements = table[i].getElementsByTagName('td');
			let tdElementsArray = Array.from(tdElements);
			
			let doesExistInWord = tdElementsArray.some(x => x.textContent.includes(searchInput));

			if (doesExistInWord) {
				table[i].classList.add('select');
			}
		}
		searchElement.value = '';
	}
}