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
        let lastSpace = str.lastIndexOf(' ');
        let result;
        if(n > str.length){
            return str;
        } else if(n<str.length && lastSpace != -1){
            if(lastSpace <= n && n < str.length){
                result = str.slice(0,lastSpace)+ '...';
                return result;
            }
        } else if(lastSpace === -1 && n>= 4){
            let end = n-3;
            let temp = str.slice(0, end);
            return temp + '...' ;
        } else if(n<4){
            return '.'.repeat(n);
        }
    }

    String.format = function (string, ...params) {

        for (var i = 0; i < params.length; i++) {
            string = string.replace(/\{\d\}/, params[i]);
        }
        return string;
    }
})();