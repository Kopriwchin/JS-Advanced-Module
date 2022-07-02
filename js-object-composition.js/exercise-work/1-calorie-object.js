function solve(arrayArgs) {
    let obj = {};

    for (let i = 0; i < arrayArgs.length; i+=2) {
        let product = arrayArgs[i];
        let calories = arrayArgs[i + 1];
        obj[product] = calories;
    }
    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// {Yoghurt: '48', Rise: '138', Apple: '52'}