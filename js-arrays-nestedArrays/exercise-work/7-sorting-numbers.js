function solve(arr) {
	const array = Array(...arr);
	const newArray = [...array];

	let resultArray = [];
	
	let ascendingArray = array.sort((a, b) => a - b);
	let descendingArray = newArray.sort((a, b) => b - a);
	
	for (let i = 0; i < Math.ceil(array.length / 2); i++) {
		resultArray.push(ascendingArray[i]);
		resultArray.push(descendingArray[i]);
	}

	// console.log(ascendingArray);
	// console.log(descendingArray);
	
	if (arr.length % 2 !== 0) {
		resultArray.pop();
	}

	return resultArray;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]); 
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]