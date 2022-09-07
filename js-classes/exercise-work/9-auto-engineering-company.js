function solve(input) {
    let cars = new Map();

    input.forEach(line => {
        [brand, model, quantity] = line.split(' | ');
        if (!cars.has(brand)) {
            cars.set(brand, new Map());        
        }
        let mapModels = cars.get(brand);
        if (!mapModels.has(model)) {
            mapModels.set(model, 0);
        }
        mapModels.set(model, mapModels.get(model) + Number(quantity));
    });

    for (const brand of cars.keys()) {
        console.log(brand);
        let mapModels = cars.get(brand);
        for (const model of mapModels.keys()) {
            console.log(`###${model} -> ${mapModels.get(model)}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'Citroen | C4 | 22',
'Citroen | C4 | 123',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C5 | 10'
]);