function solve() {
	let inputs = arguments;
	let dataTypes = {};

	for (let i = 0; i < inputs.length; i++) {
		let typeArgument = typeof (inputs[i])
		console.log(`${typeArgument}: ${inputs[i]}`);

		if (!dataTypes[typeArgument]) {
			dataTypes[typeArgument] = 0;
		}
		dataTypes[typeArgument]++;
	}


	Object.keys(dataTypes)
		.sort((a, b) => {
			return dataTypes[b] - dataTypes[a]
		})
		.forEach((key) => console.log(`${key} = ${dataTypes[key]}`));
}


solve('cat', 42, function () {
	console.log('Hello world!');
});
// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1