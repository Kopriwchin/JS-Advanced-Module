function solve(input) {
	let townName = '';
	let productName = '';
	let productPrice = 0;

	let townsWithProductPrices = {};
	let allProductNames = [];
	
	for (const line of input) {
		let args = line.split(' | ');
		townName = args[0];
		productName = args[1];
		productPrice = Number(args[2]);

		if (!allProductNames.includes(productName)) {
			allProductNames.push(productName);
		}

		if (townsWithProductPrices[townName]) {
			townsWithProductPrices[townName].push({productName, productPrice});
			continue;
		}
		
		townsWithProductPrices[townName] = [{productName, productPrice}];
	}



	console.log(townsWithProductPrices);
}

solve([
	'Sample Town | Sample Product | 1000',
	'Sample Town | Orange | 2',
	'Sample Town | Peach | 1',
	'Sofia | Orange | 3',
	'Sofia | Peach | 2',
	'New York | Sample Product | 1000.1',
	'New York | Burger | 10'
]);