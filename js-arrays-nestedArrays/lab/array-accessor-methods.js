let cars = ['Bmw', 'audi', 'Opel'];
let oldCars = ['Lada', 'Moskvitch', 'Volga'];

// Join
let stringResult = cars.join(', ');
console.log(stringResult); // Bmw, audi, Opel

// Concat
let allCars = cars.concat(oldCars);
console.log(allCars); // ['Bmw', 'audi', 'Opel', 'Lada', 'Moskvitch', 'Volga']
console.log(cars); // ['Bmw', 'audi', 'Opel'] (unchanged)
console.log(oldCars); // ['Lada', 'Moskvitch', 'Volga'] (unchanged)

// Slice
let slicedCars = allCars.slice(2, 4);
let slicedOldCars = allCars.slice(3);
let clonedAllCars = allCars.slice();

console.log(slicedCars); // ['Opel', 'Lada']
console.log(slicedOldCars); // ['Lada', 'Moskvitch', 'Volga']
console.log(clonedAllCars); // ['Bmw', 'audi', 'Opel', 'Lada', 'Moskvitch', 'Volga']
console.log(allCars); // ['Bmw', 'audi', 'Opel', 'Lada', 'Moskvitch', 'Volga']
console.log(clonedAllCars == allCars); // false, because clonedAllCars does not reference allCars

// Includes
let isAvailable = allCars.includes('Lada', 4);
console.log(isAvailable); // false, because Lada's index is 3

// IndexOf
let ladaIndex = allCars.indexOf('Lada');
console.log(ladaIndex); // 3
let trabantIndex = allCars.indexOf('Trabant');
console.log(trabantIndex); // -1, because there is no Trabant in the array