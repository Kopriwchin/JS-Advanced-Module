function checkNumber(num) {
	let numAsString = String(num);
	let isNumberSame = true;
	const firstNumber = numAsString[0];
	for (let i = 1; i < numAsString.length; i++) {
		if (numAsString[i] !== firstNumber) {
			isNumberSame = false;
			break;
		}
	}
	let result = 0;
	for (let i = 0; i < numAsString.length; i++) {
		result += Number(numAsString[i]);
	}
	console.log(isNumberSame);
	console.log(result);
}

checkNumber(2222222);
// output:
// true
// 14