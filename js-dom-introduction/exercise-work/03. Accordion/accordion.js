function toggle() {
    let buttonElement = document.querySelector('.button');

	let textElement = document.getElementById('extra');
	
	if (buttonElement.innerHTML == 'More') {
		buttonElement.innerHTML = 'Less';
		textElement.style.display = 'block'
	} else {
		buttonElement.innerHTML = 'More';
		textElement.style.display = 'none'
	}
}