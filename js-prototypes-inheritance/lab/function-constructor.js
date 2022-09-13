function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    // This will create function for each instance
    // this.greet = function() {
    //     return `Hello! My name is ${this.name} and I'm ${this.age} years old!`;
    // }
}

// The correct way to add method
Person.prototype.greet = function () {
    return `Hello! My name is ${this.name} and I'm ${this.age} years old!`;
}

let person = new Person('Pesho', 22, 190);
let person2 = new Person('Gosho', 33, 180);

console.log(person.greet());
console.log(person2.greet());
console.log(person instanceof Person); // true

// Check if property is own
console.log(navcho.hasOwnProperty('name'));
console.log(navcho.hasOwnProperty('makeSound'));