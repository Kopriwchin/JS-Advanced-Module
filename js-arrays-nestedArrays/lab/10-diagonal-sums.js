function solve(array) {
	let firstDiagonal = [];
	let secondDiagonal = [];

	let index = 0;
	let numbersAdd = array[0].length;
	let newArr = array.join(",").split(",");

	let resultFirstDiagonal = 0;
	let resultSecondDiagonal = 0;

	for (let i = 1; i <= array[0].length; i++) {
		resultFirstDiagonal += Number(newArr[index])
		index += numbersAdd + 1;
	}

	index = array[0].length - 1;

	for (let i = 1; i <= array[0].length; i++) {
		resultSecondDiagonal += Number(newArr[index])
		index += numbersAdd - 1;
	}

	console.log(`${resultFirstDiagonal} ${resultSecondDiagonal}`);
}

solve([
	[20, 40],
	[10, 60]
]); // 80 50

solve([
	[3, 5, 17],
	[-1, 7, 14],
	[1, -8, 89]
]); // 99 25