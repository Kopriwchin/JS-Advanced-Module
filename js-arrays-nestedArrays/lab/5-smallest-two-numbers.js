function solve(array) {
	const newArr = array.sort(function (a, b) {
		return a - b
	});
	console.log(newArr[0] + ' ' + newArr[1]);
}

solve([30, 15, 50, 5]); // 5 15