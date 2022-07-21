function solve() {
	let inputValue = document.getElementById('input').value
	let outputElement = document.getElementById('output');

	let wholeTextArray = inputValue.split('.')
		.filter(sentence => sentence.length > 0);

	console.log(wholeTextArray);

	for (let i = 0; i < wholeTextArray.length; i += 3) {
		let arr = [];
		for (let k = 0; k < 3; k++) {
			// Check if undefined (outside of the array) elements are coming
			if (wholeTextArray[i + k]) {
				arr.push(wholeTextArray[i + k])
			}
		}
		let paragraph = arr.join('. ') + '.';
		outputElement.innerHTML += `<p>${paragraph}</p>`
	}
}