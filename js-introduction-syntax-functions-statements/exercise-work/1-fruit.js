function calculateFruit(typeFruit, grams, pricePerKilo) {
	const kilos = grams/1000;
	const priceFruit = kilos*pricePerKilo;

	console.log(`I need $${priceFruit.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${typeFruit}.`)
}

calculateFruit('apple', 1563, 2.35);
// output: I need $3.67 to buy 1.56 kilograms apple.