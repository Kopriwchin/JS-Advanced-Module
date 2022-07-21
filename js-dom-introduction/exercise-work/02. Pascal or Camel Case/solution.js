function solve() {
	let textElement = document.getElementById('text').value;
	let namingConventionElement = document.getElementById('naming-convention');
	let resultElement = document.getElementById('result');

	const words = textElement.split(' ');

	for (let i = 0; i < words.length; i++) {
		words[i] = words[i].toLowerCase();
	}

	const finishedWord = [];
	
	if (namingConventionElement.value == 'Camel Case') {
		finishedWord.push(words[0]);
		for (let i = 1; i < words.length; i++) {
			let finished = words[i][0].toUpperCase() + words[i].slice(1);
			finishedWord.push(finished);
		}
		resultElement.innerText = finishedWord.join('');
	} else if (namingConventionElement.value == 'Pascal Case') {
		for (let i = 0; i < words.length; i++) {
			let finished = words[i][0].toUpperCase() + words[i].slice(1);
			finishedWord.push(finished);
		}
		resultElement.innerText = finishedWord.join('');
	} else {
		resultElement.innerText = 'Error!';
	}
}