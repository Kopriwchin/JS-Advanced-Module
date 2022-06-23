function solve(array, steps) {
	let newArray = [];
	for (let i = 0; i < array.length; i += steps) {
		newArray.push(array[i]);
	}
	return newArray;
}

solve(['5', '20', '31', '4', '20'], 2); // ['5', '31', '20']

solve(['dsa', 'asd', 'test', 'tset'], 2); // ['dsa', 'test']

solve(['1', '2', '3', '4', '5'], 6); // ['1']