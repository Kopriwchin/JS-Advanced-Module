function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    return `Hello! My name is ${this.name} and I'm ${this.age} years old!`;
};


function make(constructor, first, second) {
    // 1. Create new object
    let obj = {};
    
    // 2. Set prototype of the object
    Object.setPrototypeOf(obj, constructor.prototype);

    // 3. Calls constructor
    constructor.call(obj, first, second);

    // 4. Return create object
    return obj;
}

// Using new keyword
// let pepi = new Person('Pesho', 21);
// console.log(pepi.greet());

// Using custom new function
let goshko = make(Person, 'Georgi', 15);
console.log(goshko.greet() );