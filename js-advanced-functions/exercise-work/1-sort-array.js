function solve(array, order) {
	if (order == 'asc') {
		array = array.sort((a, b) => {
			return a - b;
		})
	} else if (order == 'desc') {
		array = array.sort((a, b) => {
			return b - a;
		})
	}

	console.log(array);
}

solve([14, 7, 17, 6, 8], 'asc'); // [6, 7, 8, 14, 17]
solve([14, 7, 17, 6, 8], 'desc'); // [17, 14, 8, 7, 6]