function solve() {
	let finalPrice = 0;
	let productsAdded = [];

	let addButtons = document.getElementsByClassName('add-product');
	let addButtonsArray = Array.from(addButtons);
	let resultElement = document.getElementsByTagName('textarea')[0];
	let checkoutButtonElement = document.getElementsByClassName('checkout')[0];

	for (let i = 0; i < addButtonsArray.length; i++) {
		let nameProduct = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-details > div.product-title`).textContent;
		let priceProduct = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-line-price`).textContent;

		addButtons[i].addEventListener('click', function() {
			if (!productsAdded.includes(nameProduct)) {
				productsAdded.push(nameProduct);
			}
			resultElement.textContent += `Added ${nameProduct} for ${priceProduct} to the cart.\n`;
			finalPrice += Number(priceProduct);
		});
	}

	checkoutButtonElement.addEventListener('click', function() {
		resultElement.textContent += `You bought ${productsAdded.join(', ')} for ${finalPrice.toFixed(2)}.`
		let allButtonsArray = Array.from(document.querySelectorAll('button'));
		allButtonsArray.forEach(x => x.disabled = true);
	})
	
}