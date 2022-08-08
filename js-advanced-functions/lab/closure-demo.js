function counterBuilder(initialValue) {
	let counter = 0;

	return function() {
		++counter;
		console.log(counter);
	}
}

let counter = counterBuilder();
counter();
counter();
counter();