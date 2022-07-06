function solve(input) {
	let products = {};
	
	for (const lineInput of input) {
		[productName, price] = lineInput.split(' : ');
		products[productName] = Number(price);
	}

	const sorted = Object.keys(products)
	.sort()
	.reduce((accumulator, key) => {
		accumulator[key] = products[key];

    return accumulator;
	}, {});

	let firstLetters = []; 

	for (const key in sorted) {
		if (!firstLetters.includes(key[0])) {
			console.log(key[0]);
			firstLetters.push(key[0]);
		} 
		console.log(`  ${key}: ${products[key]}`);
	}
}

solve([
	'Appricot : 20.4',
	'Fridge : 1500',
	'TV : 1499',
	'Deodorant : 10',
	'Boiler : 300',
	'Apple : 1.25',
	'Anti-Bug Spray : 15',
	'T-Shirt : 10'
]);
// A
//   Anti-Bug Spray: 15
//   Apple: 1.25
//   Appricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499
