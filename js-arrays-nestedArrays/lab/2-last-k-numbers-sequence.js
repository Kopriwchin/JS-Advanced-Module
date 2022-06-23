function printNumbersSequence(n, k) {
	let arr = [];
	arr[0] = 1;

	while (arr.length !== n) {
		let temp = 0;
		for (let i = arr.length - k; i < arr.length; i++) {
			if (i >= 0) {
				temp += arr[i];
			}
		}
		arr.push(temp);
	
	}

	return arr;
}

printNumbersSequence(8, 2);
// [1, 1, 2, 3, 5, 8, 13, 21]