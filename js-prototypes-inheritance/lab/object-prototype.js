let person = {
    name: 'Peswho',
    age: 22,
    height: 190
};

let personPrototype = Object.getPrototypeOf(person);
personPrototype.weight = 100;
console.log(personPrototype);

console.log(person);
console.log(person.weight);

// Different object with different referenes
console.log(personPrototype == person);

console.log(person.__proto__ == personPrototype);