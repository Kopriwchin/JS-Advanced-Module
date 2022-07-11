function edit(element, match, replacer) {
	//First solution
	while(element.textContent.includes(match)) {
		element.textContent = element.textContent.replace(match, replacer);
	}

	//Second solution
	let pattern = new RegExp(match, 'g');
	element.textContent = element.textContent.replace(pattern, replacer);
}