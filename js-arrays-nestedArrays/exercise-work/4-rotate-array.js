function solve(array, rotations) {
	let result = '';

	for (let i = 0; i < rotations; i++) {
		temp = array[array.length - 1];
		array.pop();
		array.unshift(temp);
	}
	result = array.join(' ');
	console.log(result);
}

solve(['1', '2', '3', '4'], 2); // 3 4 1 2