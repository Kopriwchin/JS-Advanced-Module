class Figure {
    units = ['m', 'cm', 'mm'];
    currentUnit = '';

    constructor(unit) {
        this.currentUnit = unit;
    }

    get area() {
        return;
    }

    changeUnits(input, value) {
        if (this.currentUnit == 'mm') {
            if (input == 'cm') {
                return value /= 10;
            } else if (input == 'm') {
                return value /= 1000;
            }
        }
        else if (this.currentUnit == 'cm') {
            if (input == 'mm') {
                return value *= 10;
            } else if (input == 'm') {
                return value /= 100;
            }
        } else if (this.currentUnit == 'm') {
            if (input == 'mm') {
                return value *= 1000;
            } else if (input == 'cm') {
                return value *= 100;
            }
        }
        
    }

    toString() {
        return `Figures units: ${this.currentUnit}`;
    }

}

class Circle extends Figure {
    #radius = 0;

    constructor(value) {
        super('cm');
        this.#radius = Number(value);
    }

    get area() {
        return Math.PI * this.#radius * this.#radius;
    }

    changeUnits(unit) {
        this.#radius = super.changeUnits(unit, this.#radius);
    }

    toString() {
        return `${super.toString()} Area: ${this.area} - radius: ${this.#radius}`
    }
}

class Rectangle extends Figure {
    #width = 0;
    #height = 0;

    constructor(width, height, unit) {
        super('cm');
        this.#width = width;
        this.#height = height;
        this.changeUnits(unit);
        super.currentUnit = unit;
    }

    changeUnits(unit) {
        this.#width = super.changeUnits(unit, this.#width);
        this.#height = super.changeUnits(unit, this.#height);
        super.currentUnit = unit;
    }

    get area() {
        return this.#width * this.#height;
    }

    toString() {
        return `${super.toString()} Area: ${this.area} - width: ${this.#width}, height: ${this.#height}`;
    }
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
