class Cat {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name}: Meow!`);
    }
}

let firstCat = new Cat('Peshko');
let secondCat = new Cat('Garry');
firstCat.makeSound();
secondCat.makeSound();

// Change properties runtime
secondCat.name = 'Bella';

// Second example
// let catNames = [
//     'Navcho',
//     'Garry',
//     'Mishy',
//     'Zuza',
//     'Sisa'
// ];

// let cats = catNames.map(x => new Cat(x));

//cats.forEach(x => console.log(x.name + ' says ' + x.makeSound()));