function solve(matrix) {
	let sumRow = 0;
	let sumColumn = 0;
	let sumFirstRow = 0;
	let isMagical = true;

	for (let i = 0; i < matrix.length; i++) {
		sumFirstRow += matrix[0][i];
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let k = 0; k < matrix.length; k++) {
			sumRow += matrix[i][k];
			sumColumn += matrix[k][i];
		}
		if (sumRow !== sumFirstRow || sumColumn !== sumFirstRow) {
			isMagical = false;
			console.log(isMagical);
			return;
		}
		sumRow = 0;
		sumColumn = 0;
	}

	console.log(isMagical);
}

solve([
	[4, 5, 6],
	[6, 5, 4],
	[5, 5, 5]
]); // true

solve([
	[11, 32, 45],
	[21, 0, 1],
	[21, 1, 1]
]); // false

solve([
	[1, 0, 0],
	[0, 0, 1],
	[0, 1, 0]
]); // true