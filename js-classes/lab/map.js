let map = new Map();

map.set('name', 'Pesho');
map.set('age', 20);
map.set('isMale', true);

console.log(map); // Map(3) {size: 3, name => Pesho, age => 20, isMale => true}
console.log(map.get('name')); // Pesho

map.set('age', 21);
console.log(map); // Map(3) {size: 3, name => Pesho, age => 21, isMale => true}

map.set(1, 'One');
console.log(map); // Map(4) {size: 4, name => Pesho, age => 21, isMale => true, 1 => One}

// Set object as key
let obj = {name: 'Gosho'}
map.set(obj, 'naGoshoObekta');

console.log(map.get(obj)); 