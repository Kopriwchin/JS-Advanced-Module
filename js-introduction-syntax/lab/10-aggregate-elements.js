function aggregateElements(...x) {
	const array = x[0];

	const sum = function () {
		let result = 0;
		for (let i = 0; i < array.length; i++) {
			result += array[i];
		}
		return result;
	}
	const sumInverse = function () {
		let result = 0;
		for (let i = 0; i < array.length; i++) {
			result += 1/array[i];
		}
		return result;
	}
	const concat = function () {
		let result = '';
		for (let i = 0; i < array.length; i++) {
			result += array[i];
		}
		return result;
	}

	console.log(sum());
	console.log(sumInverse());
	console.log(concat());
}

aggregateElements([2, 4, 8, 16]);
// output: 30\n0.9375\n24816