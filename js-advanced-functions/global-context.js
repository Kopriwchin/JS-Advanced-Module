// Global context
function random() {
	console.log(this); // in browser it will be Window
	return Math.random();
}

random(); // global invocation

// Object context
let obj = {
	name: 'Peter',
	greed() {
		random(); // global invocation
		console.log(`Hello! My name is ${this.name}`);
	}
};

obj.greed(); // method invocation
let greed = obj.greed; // copy function by reference
greed() // Global invocation

// DOM Element - must execute in browser
// element.addEventListener('click'' , function() {
// 	console.log(this);
// });