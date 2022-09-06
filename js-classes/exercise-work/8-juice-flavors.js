function solve(juices) {
    let juicesDict = {};
    let bottlesDict = {};

    juices.forEach(line => {
        [juiceName, quantity] = line.split(' => ');
        if (!Object.keys(juicesDict).includes(juiceName)) {
            juicesDict[juiceName] = Number(quantity);
        } else {
            juicesDict[juiceName] += Number(quantity);
        }
        if (juicesDict[juiceName] >= 1000) {
            if (!Object.keys(bottlesDict).includes(juiceName)) {
                bottlesDict[juiceName] = 0;
            } 
            while (juicesDict[juiceName] >= 1000) {
                juicesDict[juiceName] -= 1000;
                bottlesDict[juiceName]++;
            }
        }
    });
    
    for (const key in bottlesDict) {
        console.log(`${key} => ${bottlesDict[key]}`);
    }
}
solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);
// Orange => 2
// Peach => 2

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'
]);
// Pear => 8
// Watermelon => 10
// Kiwi => 4