class List {
    constructor() {
        this.elements = [];
        this.size = 0
    }

    add(number) {
        this.elements.push(number);
        this.elements.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index < 0 || index >= this.elements.length) {
            throw new Error('Index out of bounds');
        }
        this.elements.splice(index, 1);
        this.size--;
    }

    get(index) {
        if (index < 0 || index >= this.elements.length) {
            throw new Error('Index out of bounds');
        }
        return this.elements[index];
    }
}

let list = new List();
list.add(6);
list.add(5);
list.add(7);

console.log(list.get(0));
console.log(list.get(1));

