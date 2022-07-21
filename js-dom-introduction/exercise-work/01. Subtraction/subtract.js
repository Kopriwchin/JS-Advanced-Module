function subtract() {
    let firstNumElement = document.getElementById('firstNumber');
    let secondNumElement = document.getElementById('secondNumber');
	let resultElement = document.getElementById('result');

	let firstNumValue = Number(firstNumElement.value);
	let secondNumValue = Number(secondNumElement.value);

	let result = firstNumValue - secondNumValue;
	resultElement.innerHTML = result;
}