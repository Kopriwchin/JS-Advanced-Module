let person = {
    name: 'Pesho',
    age: 22,
    height: 190
};

//let clonedPerson = { ...person };
let clonedPerson = Object.assign({}, person);

Object.freeze(person);
person.weight = 80; // with 'use strict': Cannot add property weight, object is not extensible

console.log(person); // {name: 'Pesho', age: 22, height: 190}

// Object.defineProperty(person, 'newProp', {value: 22}); // Cannot define property newProp, object is not extensible

console.log(Object.getOwnPropertyDescriptors(person));

// Object seal - cannot add or remove properties
Object.seal(clonedPerson);
clonedPerson.newProp = 'lolol';
console.log(Object.getOwnPropertyDescriptors(clonedPerson)); //newProp doesn't exist

// Objects with const
const constantObject = {
    prop: 'value',
};

constantObject.prop = 'newValue';
console.log(constantObject); // {prop: 'newValue'}