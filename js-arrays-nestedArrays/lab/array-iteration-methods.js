let cars = ['Bmw', 'audi', 'Opel', 'Lada', 'Moskvitch', 'Volga'];

// For of
for (let car of cars) {
	//console.log(car);
}


// forEach (method)
cars.forEach((car) => {
	console.log(car);
	// Bmw
	// audi
	// Opel
	// Lada
	// Moskvitch
	// Volga
});

// Some
let result = cars.some((car) => {
	return car[0] == 'V';
});
console.log(result);


// Find
let longNameCar = cars.find((car) => {
	return car.length > 4;
});
console.log(longNameCar); // Moskvitch


// Filter
let fourLetterCars = cars.filter((car) => {
	return car.length == 4;
})
console.log(fourLetterCars); // ['audi', 'Opel', 'Lada']


// Map
let nums = [1, 2, 3, 4, 5];
let doubledNums = nums.map(num => num * 2);
console.log(nums); // [1, 2, 3, 4, 5] (map() isn't mutator method)
console.log(doubledNums); // [2, 4, 6, 8, 10]

// Reduce
let sum = nums.reduce((acc, num) => {
	return acc + num;
}, 0);

console.log(sum);