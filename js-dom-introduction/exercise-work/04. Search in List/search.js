function search() {
	//let matches = []; -> If we want to keep the matched towns; Faster way is just using count
	let count = 0;

	let input = document.getElementById('searchText').value;
	let result = document.getElementById('result');
	let towns = document.getElementsByTagName('li');

	// Reverting if changes are made before
	for (let i = 0; i < towns.length; i++) {
		towns[i].style.fontWeight = 'normal';
		towns[i].style.textDecorationLine = 'none';
	}

	for (let i = 0; i < towns.length; i++) {
		let town = towns[i].textContent;
		
		if (town.match(input)) {
			towns[i].style.fontWeight = 'bold';
			towns[i].style.textDecorationLine = 'underline';
			count++;
			//matches.push(town);
		}
	}

	result.textContent = `${count} matches found`;
}