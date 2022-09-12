let person = {
    name: 'Pesho',
    age: 20,
}

let internalNameProperties = Object.getOwnPropertyDescriptor(person, 'name');
console.log(internalNameProperties);
// Modify internal property of existing property
Object.defineProperty(person, 'name', {enumerable: false})

// Add new propery and configure internal properties
Object.defineProperty(person, 'height', {value: 190, enumerable: false, writable: false});

console.log('after modification:');
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

for (const key in person) {
    console.log(key);
} // Pesho doesn't exist

Object.keys(person).forEach(x => console.log(x)); // Pesho doesn't exist

// Cannot change value of non writable property
console.log(person.height); // 190
person.height = 200; // Does not change value
console.log(person.height); // 190

// Define more than one property at once
Object.defineProperties(person, {
    name: {
        enumerable: true
    },
    age: {
         value: 22,
        configurable: false,
    }
});

console.log(person); // {name: 'Pesho', age: 22, height: 190}

// Add getter
Object.defineProperty(person, 'info', {
    get: function() {
        return `${this.name} - ${this.age}`
    },
    set: function(value) {
        let [name, ageText] = value.split(' - ');

        this.name = name;
        this.age = Number(ageText);       
    },
    enumerable: false,
    configurable: false
});

person.info = 'Gosho - 32'
console.log(person); // {name: 'Gosho', age: 32, height: 190, info: <accessor>}