let phoneBook = {
	'Ivan Petrov': '1233211231',
	'Georgi Georgiev': '1235551123',
	'Peter Ivanov': '8273617234',
}

// Accessing and assigning
console.log(phoneBook['Ivan Petrov']);
phoneBook['Ivan Petrov'] = '359876551123';

// Iteration - for in
for (key in phoneBook) {
	console.log(`${key} - ${phoneBook[key]}`);
}

// Iteration - methods
let names = Object.keys(phoneBook);
console.log(names);