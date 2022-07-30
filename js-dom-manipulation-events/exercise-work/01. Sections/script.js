function create(words) {
	let wordsArray = Array.from(words);
	console.log(wordsArray);
	let contentElement = document.querySelector('#content');

	for (let i = 0; i < wordsArray.length; i++) {
		let customDiv = document.createElement('div');
		let customParagraph = document.createElement('p');
		customParagraph.textContent = `${wordsArray[i]}`
		customParagraph.style.display = 'none'
		customDiv.appendChild(customParagraph);

		customDiv.addEventListener('click', function() {
			customParagraph.style.display = 'block';
		})

		contentElement.appendChild(customDiv);
	}
} 