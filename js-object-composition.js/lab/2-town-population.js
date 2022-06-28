function solve(input) {
	let listTowns = Array(...input);

	let associativeArray = {};
	let firstWord = '';
	let secondWord = '';
	let isDone = true;

	for (const townPopulation of input) {
		for (let i = 0; i < townPopulation.length; i++) {
			if (townPopulation[i] == ' ') {
				i += 4;
				isDone = false;
				continue;
			}
			if (isDone) {
				firstWord += townPopulation[i];
			} else {
				secondWord += townPopulation[i];
			}
		}
		associativeArray[firstWord] = Number([secondWord]);
		firstWord = '';
		secondWord = '';
		isDone = true;
	}

	console.log(associativeArray);
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);