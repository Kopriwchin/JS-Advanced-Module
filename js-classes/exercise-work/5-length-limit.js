class Stringer {

    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
        this.constString = this.innerString;
    }

    increase(length) {
        this.innerLength += Number(length);
        
        this.innerString = this.constString.slice(0, this.innerLength);
    }

    decrease(length) {
        this.innerLength -= Number(length);

        if (this.innerLength < 0) {
            this.innerLength = 0;
            this.innerString = '...';
        } else if (this.innerString.length > this.innerLength) {
            //ABCDEFG 5 -> ABCDE...
            this.innerString = this.innerString.slice(0, this.innerLength) + '...';
        }
    }

    toString() {
        return this.innerString;
    }
}

// let test = new Stringer("Test", 5);
// console.log(test.toString()); // Test

// test.decrease(3);
// console.log(test.toString()); // Te...

// test.decrease(5);
// console.log(test.toString()); // ...

// test.increase(4);
// console.log(test.toString()); // Test

// test.increase(4);
// console.log(test.toString()); // Test

// test.decrease(4);
// console.log(test.toString()); // Test

// test.decrease(10);
// console.log(test.toString()); // ...

