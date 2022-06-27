// Single line object literal
let person = {name: 'Pesho', age: 20, isMale: true };

// Multi line object literal
let otherPerson = {
	name: 'Pesho',
	age: 20,
	isMale: true, //trailing comma
};

// Empty object literal
let emptyObject = {};

// Dynamic assign of properties
let cat = {};

let propName = 'age';

cat.name = 'Bella'; // Dot notation
cat['breed'] = 'Turskish Angora'; // Bracket notation
cat['fur-color'] = 'white';
cat[propName] = 2;

console.log(cat); // {name: 'Bella', breed: 'Turskish Angora', fur-color: 'white', age: 2}

// Object property access
console.log(cat.age); // 2
console.log(cat['fur-color']); // white
console.log(cat[propName]); // 2 

// Object Destructuring Assignment Syntax
let {age, breed, ...rest} = cat;
console.log(rest); // {name: 'Bella', fur-color: 'white'} 

// First way to clone object
let {...clonedCat} = cat;
console.log(clonedCat == cat); // false

// Object references
let otherCat = cat; // copy by reference
otherCat.name = 'Garry';

console.log(otherCat.name); // Garry
console.log(cat.name); // Garry

// Comparing objects
let person1 = {name: 'Pesho'};
let person2 = {name: 'Pesho'};
console.log(person1 == person2); // false (different references)