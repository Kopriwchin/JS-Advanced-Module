let cat = {
    name: 'Bella',
    makeSound() {
        console.log(`${this.name} - meow...`);
    }
}

let navcho = Object.create(cat);

navcho.name = 'MnogohubavKot';
console.log(navcho);
navcho.makeSound(); // MnogohubavKot  - bau bau...

console.log(cat == navcho.__proto__); // true

// Check if property is own
console.log(navcho.hasOwnProperty('name')); // true
console.log(navcho.hasOwnProperty('makeSound')); // false

// For in
console.log('----- for in iteration -----');

// for (const key in navcho) {
//     if (Object.hasOwnProperty.call(navcho, key)) {
//         const element = navcho[key];
//         console.log(key);
//     }
// }