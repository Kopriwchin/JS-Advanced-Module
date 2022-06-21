function solve(array) {
	const result = Math.max(...[].concat(...array));
	console.log(result);
}

solve([
	[20, 50, 10],
	[8, 33, 145]
]); // output: 145

solve([
	[3, 5, 7, 12],
	[-1, 4, 33, 2],
	[8, 3, 0, 4]
]); // output: 33