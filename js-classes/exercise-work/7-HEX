class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(number) {
        return new Hex(this.value + number);
    }

    minus(number) {
        return new Hex(this.value - number);
    }

    parse(string) {
        return parseInt(string, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString()); // 0XFF
FF.valueOf() + 1 == 256; // true
let a = new Hex(10);
let b = new Hex(5);
console.log(new Hex(15).toString()); // 0XF
console.log(a.plus(b).toString()); // 0XF
console.log(a.plus(b).toString() === '0xF'); // true
console.log(FF.parse('AAA')); // 2730
