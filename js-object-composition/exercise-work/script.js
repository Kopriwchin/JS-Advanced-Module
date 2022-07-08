function objDemo(params) {
	let doubleChoco = {
		flourType: 'brown',
		bonus: 'fruits',
		weight: 100
	};

	let keys = Object.keys(doubleChoco);
	let values = Object.values(doubleChoco);

	console.log(keys); // ['flourType', 'bonus', 'weight']
	console.log(values); // ['brown', 'fruits', 100]

	let entries = Object.entries(doubleChoco);
	console.log(entries[0][0]); // flourType

	let car = {
		brand: 'Mercedes',
		model: 'S-500',
		yearOfProduction: 2017,
		topSpeed: 300,
		horsePowers: 435,
		name: 'Peter',
		driver: {
			name: 'Ivan',
			badgeName: `${this.name} Dimitrov` // this.name is undefined
		},
		fullName() {
			return this.brand + ' ' + this.model + ' ' + this.yearOfProduction;
		}
	}

	console.log(car.fullName());
}
objDemo();