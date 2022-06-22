function solve(array) {
	let biggestNumber = Number.MIN_SAFE_INTEGER;
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		if (biggestNumber <= array[i]) {
			biggestNumber = array[i];
			newArray.push(array[i]);
		}
	}
	return newArray;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]); // output: [1, 3, 8, 10, 12, 24]

solve([1, 2, 3, 4]); // output: [1, 2, 3, 4]

solve([20, 3, 2, 15, 6, 1]); // output: [20]