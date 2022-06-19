let cars = ['BMW', 'Audi', 'Opel']

// Pop
let lastElement = cars.pop();

console.log(lastElement);
console.log(cars); // output: ['BMW', 'Audi']

// Push
let newLength = cars.push('Mercedes', 'Honda');
console.log(cars); // output: ['BMW', 'Audi', 'Mercedes', 'Honda']
console.log(newLength); // output: 4