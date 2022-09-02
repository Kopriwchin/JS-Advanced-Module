class Circle {
    #pi = Math.PI; // private property

    constructor(radius) {
        this.radius = radius;
        this._perimeter = 2 * Math.PI * radius;
    }

    get area() {
        return Math.PI * this.radius ** 2
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        if (value < 0) {
            throw new Error('Diameter cannot be less than 0');
        }

        this.radius = value / 2;
    }

    get perimeter() {
        this.perimeter;  
    }
    set perimeter(value) {
        if (value < 0) {
            throw new Error('Perimeter cannot be less than 0');
        }
        this._perimeter = value;
    }

    // #privateMethod() {

    // }
}

let circle = new Circle(2);
console.log(circle.area);

circle.radius = 5;
console.log(circle.area);