function solve(arr) {
	arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

	for (const word of arr) {
		console.log(word);
	}
}

solve(['alpha', 'beta', 'gamma']);
// beta
// alpha
// gamma

solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// Jack
// Isacc
// George
// Theodor
// Harrison