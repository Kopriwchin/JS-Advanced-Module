function solve(array) {
	const result = Math.max(...[].concat(...array));
	console.log(result);
}

function solveAnotherWay(array) {
	let biggestNum = Number.MIN_SAFE_INTEGER;

	for (let i = 0; i < array.length; i++) {
		for (let k = 0; k < array.length; k++) {
			let currentNum = array[i][k];
			if (currentNum > biggestNum) {
				biggestNum = currentNum;
			}
		}
	}

	console.log(biggestNum);
}

solve([
	[20, 50, 10],
	[8, 33, 145]
]); // 145

solveAnotherWay([
	[3, 5, 7, 12],
	[-1, 4, 33, 2],
	[8, 3, 0, 4]
]); // 33