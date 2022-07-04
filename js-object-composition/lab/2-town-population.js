function solve(input) {
	let towns = {};
	
	let townName = '';
	let population = 0;

	let args = [];

	for (const line of input) {
		args = line.split(' <-> ');
		townName = args[0];
		population = Number(args[1]);

		if (towns[townName]) {
			towns[townName] += population;
		} else {
			towns[townName] = population;
		}
	}

	for (const key in towns) {
		console.log(`${key} : ${towns[key]}`);
	}
}

solve(['Istanbul <-> 100000',
'Hong Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);

// Istanbul : 101000
// Hong Kong : 2100004
// Jerusalem : 2352344
// Mexico City : 23401925
