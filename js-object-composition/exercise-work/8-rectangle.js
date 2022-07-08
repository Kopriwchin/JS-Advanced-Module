function rectangle(width, height, color) {
	let newColor = color[0].toUpperCase() + color.slice(1);

	let obj = {
		width,
		height,
		color: newColor,
		calcArea: function calcArea() {
			return this.width * this.height;
		}
	}
	return obj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width); // 4
console.log(rect.height); // 5
console.log(rect.color); // Red
console.log(rect.calcArea()); // 20