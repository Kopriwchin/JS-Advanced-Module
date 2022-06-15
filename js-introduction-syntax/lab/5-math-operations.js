function mathResult(num1, num2, operator) {
	let result;
	switch (operator) {
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		case '/':
			result = num1 / num2;
			break;
		case '%':
			result = num1 % num2;
			break;
		case '**':
			result = num1 ** num2;
			break;
		default: console.log('Invalid operator!');
			break;
	}
	console.log(result);
}

mathResult(2, 4, '*');
// output: 8