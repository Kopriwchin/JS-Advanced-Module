(function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    }
    
    Array.prototype.skip = function(n) {
        return this.slice(n, this.length);
    }
    
    Array.prototype.take = function(n) {
        return this.slice(0, n);
    }
    
    Array.prototype.sum = function() {
        let sum = 0;
        this.forEach(x => sum += x);
        return sum;
    }
    
    Array.prototype.average = function() {
        return this.sum() / this.length;
    }
})();

let array = [1, 2, 3, 4, 5, 6];
console.log(array.last()); // 6
console.log(array.skip(2)); // [3, 4, 5, 6]
console.log(array.take(3)); // [1, 2, 3]
console.log(array.sum()); // 21
console.log(array.average()); // 3.5