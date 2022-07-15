function solve() {
	document.querySelector('#searchBtn').addEventListener('click', onClick);

	function onClick() {
		let searchElement = document.querySelector('#searchField');
		let searchInput = searchElement.value;
		let table = document.querySelectorAll('.container tr');

		// Clear everything from last search
		table.forEach(x => x.classList.remove('select'));

		// Skip description cells
		for (let i = 2; i < table.length; i++) {
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