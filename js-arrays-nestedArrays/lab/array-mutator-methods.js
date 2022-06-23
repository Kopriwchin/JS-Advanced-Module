let cars = ['BMW', 'Audi', 'Opel']

// Pop
let lastElement = cars.pop();

console.log(lastElement); // Opel
console.log(cars); // ['BMW', 'Audi']

// Push
let newLength = cars.push('Mercedes', 'Honda');
console.log(cars); // ['BMW', 'Audi', 'Mercedes', 'Honda']
console.log(newLength); // 4

// Shift
let firstElement = cars.shift();
console.log(firstElement); // BMW
console.log(cars); // ['Audi', 'Mercedes', 'Honda']

// Unshift
newLength = cars.unshift('Peugeot');
console.log(cars); // ['Peugeot', 'Audi', 'Mercedes', 'Honda']

// Splice
let returnedValue = cars.splice(1, 1, 'BMW');
console.log(returnedValue); // ['Audi'], because I'm choosing Audi's index as insert place and then deleting one item;
console.log(cars); // ['Peugeot', 'BMW', 'Mercedes', 'Honda']

// Fill
let arr = [1, 2, 3, 5];
// fill with 0 from position 2 until position 4 ( we dont have position 5, so the method only fills the array to the last index)
console.log(arr.fill(0, 2, 4)) // [1, 2, 0, 0];
console.log(arr.fill(6)); // [6, 6, 6, 6]

// Sort
cars.sort();
console.log(cars);
let numbers = [9, 10, 6, 3];
console.log(numbers.sort());  
// [10, 3, 6, 9] (incorrect sort)


// Number sort

// numbers.sort(function(a, b) {
// 	if (a < b) {
// 		return - 1;
// 	} else if (a > b) {
// 		return 1;
// 	} else {
// 		return 0;
// 	}
// }); - long way instead of doing the easier arrow method below

numbers.sort((a, b) => a - b);
console.log(numbers); // [3, 6, 9, 10]

// Alphabetical sort
cars.sort((a, b) => a.localeCompare(b));
console.log(cars); // ['BMW', 'Honda', 'Mercedes', 'Peugeot']