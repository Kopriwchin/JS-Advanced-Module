(function solve() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        } else {
            return this;
        }
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this;
    }

    String.prototype.isEmpty = function (str) {
        return this.length == 0 ? true : false;
    }

    String.prototype.truncate = function (n) {
        if (this.length < n) {
            return this;
        } else {
            let splitString = this.split('');
            let indexes = splitString.reduce(function (a, e, i) {
                if (e === ' ')
                    a.push(i);
                return a;
            }, []).reverse();

            if (indexes.length == 0) {
                return this.split(0, n - 3) + '...';
            } else if (n < 4) {
                let string = '.';
                for (let i = 1; i < n; i++) {
                    string += '.';
                }
                return string;
            }
            // string.truncate(4);
            // hello my string
            // h....
            else if (n < splitString.indexOf(' ')) {
                
            }
            else {
                for (let i = 0; i < indexes.length; i++) {
                    let initString = this.slice(0, indexes[i]) + '...';
                    if (initString.length <= n) {
                        return initString;
                    }
                }
                return this.slice(0, indexes[0] + '...');
            }
        }
    }

    String.format = function (string, ...params) {

        for (var i = 0; i < params.length; i++) {
            string = string.replace(/\{\d\}/, params[i]);
        }
        return string;
    }
})();

let str = 'my string';
// str = str.ensureStart('my');
// str = str.ensureStart('hello ');
// console.log(str.truncate(16));
// console.log(str.truncate(14));
// console.log(str.truncate(8));

console.log(str.truncate(4));
console.log(str.truncate(2));
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');

