function equalNeighborsCount(matrix) {
    let neighbors = 0;
	let index = 1;

	for (let i = 0; i < matrix.length; i++) {
		for (let k = 0; k < matrix[0].length - 1; k++) {
			if (matrix[i][k] === matrix[i][index]) {
				neighbors++;
			}
			index++;
		}
		index = 1;
	}

	for (let i = 0; i < matrix[0].length; i++) {
		for (let k = 0; k < matrix.length - 1; k++) {
			if (matrix[k][i] === matrix[index][i]) {
				neighbors++;
			}
			index++;
		}
		index = 1;
	}

    console.log(neighbors);
}

equalNeighborsCount([
	['2', '3', '4', '7', '0'],
	['4', '0', '5', '3', '4'],
	['2', '3', '5', '4', '2'],
	['9', '8', '7', '5', '4']
]); // output: 1

equalNeighborsCount([
	['test', 'yes', 'yo', 'ho'],
	['well', 'done', 'yo', '6'],
	['not', 'done', 'yet', '5']
]); // output: 2
