function solve(array, seperator) {
	let result = '';
	for (let i = 0; i < array.length - 1; i++) {
		result += array[i] + seperator
	}
	result += array[array.length - 1];
	console.log(result);
}

solve(['One', 'Two', 'Three', 'Four', 'Five'], '-'); // output: One-Two-Three-Four-Five

solve(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_'); // output: How about no?_I_will_not_do_it!