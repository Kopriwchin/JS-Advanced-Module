const person = {
	firstName: 'Pesho',
	lastName: 'Georgiev',
	introduce() {
		const getFullname = function () {
			return this.firstName + ' ' + this.lastName;
		}

		console.log(`Hello, my name is ${getFullname()}`);
	}
}

person.introduce();