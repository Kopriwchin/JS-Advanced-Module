function sumTable() {
	let priceElements = document.querySelectorAll('td:nth-of-type(2n)')
	let sum = 0;

	for (let i = 0; i < priceElements.length - 1; i++) {
		sum += Number(priceElements[i].textContent);
	}

	let resultElement = document.getElementById('sum');
	resultElement.textContent = sum;
}