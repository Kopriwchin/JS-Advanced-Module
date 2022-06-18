function printEvenIndexes(array) {
	const arr = array;
	let result = '';
	for (let i = 0; i < arr.length; i +=2 ) {
		result += `${array[i]} `;
	}
	result.trimEnd();
	console.log(result);
}

printEvenIndexes(['20', '30', '40', '50', '60']);
// output: 20 40 60