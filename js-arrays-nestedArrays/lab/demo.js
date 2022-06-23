let names = ['Pesho', 'Gosho', 'Mariyka'];

console.log(names.length); // 3

names.length = 10;
names[12] = 'Stamat';

console.log(names.length); // 13
console.log(names);
// ['Pesho', 'Gosho', 'Mariyka', …, 'Stamat']
console.log(names[names.length - 1]); // 'Stamat'

// Remove
names.length = 3;
console.log(names); // ['Pesho', 'Gosho', 'Mariyka']


// Dirty hack
names['hidden'] = 'Hacker';
//'hidden' becomes property-like, it's not an index (possible due to reason arrays can be used like an object)

console.log(names['hidden']); // 'Hacker
console.log(names.length);

names = ['Pesho', 'Gosho', 'Mariyka'];
names[Number('3')] = 'Alex';
console.log(names.length); // 4

names['4'] = 'Pecata';
console.log(names.length); // 5

// Array Destructuring Assignment Syntax and rest operator
let [firstName, secondName, thirdName, ...others] = names; // ['Pesho', 'Gosho', 'Mariyka', 'Alex', 'Pecata'];
console.log(secondName); // 'Gosho'
console.log(others);