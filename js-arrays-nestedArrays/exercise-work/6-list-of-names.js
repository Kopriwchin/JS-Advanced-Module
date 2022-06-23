function solve(array) {
	let newArray = array.sort((a, b) => a.localeCompare(b));

	for (let i = 0; i < array.length; i++) {
		console.log(`${i + 1}.${newArray[i]}`);
	}
}

solve(["John", "Bob", "Christina", "Ema"]);
// output:
// 1. Bob
// 2. Christina
// 3. Ema
// 4. John