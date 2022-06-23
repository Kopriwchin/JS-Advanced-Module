function circleArea(radius) {
	let type = typeof(radius);
	if (type === 'number') {
		console.log((Math.PI * (radius**2)).toFixed(2));
	} else {
		console.log(`We can not calculate the circle area, because we receive a ${type}.`);
	}
}

circleArea(5);
// 78.54

circleArea('name');
// We can not calculate the circle area, because we receive a string.