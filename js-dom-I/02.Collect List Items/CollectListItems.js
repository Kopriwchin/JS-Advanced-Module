function extractText(params) {
	let itemsElement = document.getElementById('items');
	let textAreaElement = document.getElementById('result');
	
	textAreaElement.innerText = itemsElement.innerText;
}