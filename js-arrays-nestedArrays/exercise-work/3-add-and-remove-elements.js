function solve(array) {
	let index = 0;
	let counter = 1;
	let newArray = [];

	while (index < array.length) {
		switch (array[index]) {
			case 'add':
				newArray.push(counter);
				break;
			case 'remove':
				newArray.pop();
				break;
		}

		index++;
		counter++;
	}

	if (newArray.length === 0) {
		console.log('Empty');
		return;
	}

	for (let i = 0; i < newArray.length; i++) {
		console.log(newArray[i]);
	}
}

solve(['add', 'add', 'add', 'add']);
// output:
// 1
// 2
// 3
// 4

solve(['add', 'add', 'remove', 'add', 'add']);
// 
// 1
// 4
// 5

solve(['remove', 'remove', 'remove']);
// Empty