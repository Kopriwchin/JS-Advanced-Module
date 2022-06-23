function solve(array) {
	let newArray = [];

	for(let i = 1; i < array.length; i++) {
		if (i % 2 !== 0) {
			let num = array[i] * 2;
			newArray.unshift(num);
		}
	}
	return newArray;
}

solve([10, 15, 20, 25]); // newarray = [50, 30]
solve([3, 0, 10, 4, 7, 3]); // newarray = [6, 8, 0]