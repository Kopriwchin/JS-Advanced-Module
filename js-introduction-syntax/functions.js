// Function declaration
function printFullName(firstName, lastName) {
	console.log(firstName + ' ' + lastName);
}

// Function invokation
printFullName('Peter', 'Ivanov');
printFullName('Peter', 'Petrov');
printFullName('Ivan', 'Ivanov');

// Function expression
let countdown = function(number) {
	for (let i = number; i > 0; i--) {
		console.log(i);
	}

}
countdown(10);


// Arrow function
let countUp = (max = 10) => {
	for (let i = 0; i < max; i++) {
		console.log(i);
	}
};
countUp();


// Return value
function sum(a, b) {
	return a + b;
}

let sumArrow = (a,b) => a + b;

let result = sum(1, 5);
console.log(result);


// Method
let firstName = 'Pesho';
console.log(firstName.toUpperCase());
console.log(Math.PI);