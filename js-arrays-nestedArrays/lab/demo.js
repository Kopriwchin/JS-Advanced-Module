let names = ['Pesho', 'Gosho', 'Mariyka'];

console.log(names.length); // output: 3

names.length = 10;
names[12] = 'Stamat';

console.log(names.length); // output: 13
console.log(names);
// output: ['Pesho', 'Gosho', 'Mariyka', …, 'Stamat']
console.log(names[names.length - 1]); // output: 'Stamat'

// Remove
names.length = 3;
console.log(names); // output: ['Pesho', 'Gosho', 'Mariyka']


// Dirty hack
names['hidden'] = 'Hacker';
//'hidden' becomes property-like, it's not an index (possible due to reason arrays can be used like an object)

console.log(names['hidden']); // output: 'Hacker
console.log(names.length);

names = ['Pesho', 'Gosho', 'Mariyka'];
names[Number('3')] = 'Alex';
console.log(names.length); // output: 4

names['4'] = 'Pecata';
console.log(names.length); // output: 5

// Array Destructuring Assignment Syntax and rest operator
let [firstName, secondName, thirdName, ...others] = names; // ['Pesho', 'Gosho', 'Mariyka', 'Alex', 'Pecata'];
console.log(secondName); // output: 'Gosho'
console.log(others);