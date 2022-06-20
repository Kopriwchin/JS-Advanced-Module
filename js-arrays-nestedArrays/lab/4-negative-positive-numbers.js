function solve(array) {
	let newArray = [];

	for(let i = 0; i < array.length; i++) {
		if (array[i] >= 0) {
			newArray.push(array[i]);
		} else {
			newArray.unshift(array[i]);
		}
	}

	for (let i = 0; i < array.length; i++) {
		console.log(newArray[i]);
	}
}

solve([7, -2, 8, 9])
// output: 
// -2
// 7
// 8
// 9
