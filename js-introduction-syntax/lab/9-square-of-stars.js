function printStars(count) {
	let oneLineStars = '';
	for (let i = 1; i <= count; i++) {
		if (i === count) {
			oneLineStars += '*';
			break;
		}
		oneLineStars += '* ';
	}

	for (let i = 0; i < count; i++) {
		console.log(oneLineStars);
	}
}

printStars(3);
// output: * * *\n* * *\n* * *