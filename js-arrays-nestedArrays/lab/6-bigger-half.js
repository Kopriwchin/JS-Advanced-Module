function solve(arr) {
	let array = Array(...arr).sort(function (a, b) {
		return a - b;
	});

	if (array.length % 2 === 0) {
		array = array.slice(array.length / 2, array.length)
	} else {
		array = array.slice(Math.floor(array.length / 2), array.length);
	}
	return array;
}

solve([4, 7, 2, 5]); // [5, 7];
solve([3, 19, 14, 7, 2, 19, 6]); // [7, 14, 19, 19]