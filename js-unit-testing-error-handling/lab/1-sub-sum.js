function solve(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    } else if (array.some(x => isNaN(x))) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex < 0 || endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }

    let sum = 0;

    for (let i = startIndex; i <= endIndex; i++) {
        sum += array[i]
    }

    return sum;
}

solve([10, 20, 30, 40, 50, 60], 3, 300); // 150
solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1); // 3.3
solve([10, 'twenty', 30, 40], 0, 2); // NaN
solve([], 1, 2); // 0
solve('text', 0, 2); // NaN