function solve(input) {
	let tripPrice = Number(input[0]);
	let puzzlePrice = 2.6;
	let dollPrice = 3;
	let bearPrice = 4.1;
	let minionPrice = 8.2;
	let busPrice = 2;

	let puzzleCount = Number(input[1]);
	let dollCount = Number(input[2]);
	let bearCount = Number(input[3]);
	let minionCount = Number(input[4]);
	let busCount = Number(input[5]);

	let toysCount = puzzleCount + dollCount + 
		bearCount + minionCount + busCount;

	let overallPrice = puzzlePrice * puzzleCount +
		dollPrice * dollCount +
		bearPrice * bearCount +
		minionPrice * minionCount +
		busPrice * busCount;

	if (toysCount >= 50) {
		overallPrice *= 0.75;
	}

	// Payment for rent
	overallPrice *= 0.9;
	let moneyLeft = overallPrice - tripPrice;

	if (moneyLeft >= 0) {
		console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
	} else {
		console.log(`Not enough money! ${Math.abs(moneyLeft).toFixed(2)} lv needed.`);
	}
}

solve(["40.8",
"20",
"25",
"30",
"50",
"10"])