function encodeAndDecodeMessages() {
	let encodeTextareaElement = document.querySelectorAll('textarea')[0];
	let encodeButtonElement = document.querySelectorAll('button')[0];

	let decodeTextareaElement = document.querySelectorAll('textArea')[1];
	let decodeButtonElement = document.querySelectorAll('button')[1];

	let encodedMessageArray = [];
	let decodedMessageArray = [];

	encodeButtonElement.addEventListener('click', function () {
		clearArrays()
		encodeMessage()

		let encodedMessage = encodedMessageArray.join('');
		encodeTextareaElement.value = '';
		decodeTextareaElement.value = encodedMessage;
	});

	decodeButtonElement.addEventListener('click', function () {
		clearArrays()
		decodeMessage();

		let decodedMessage = decodedMessageArray.join('');
		encodeTextareaElement.value = '';
		decodeTextareaElement.value = decodedMessage;
	})

	function encodeMessage() {
		let messageSplitArray = Array.from(encodeTextareaElement.value.split(''));
		for (let i = 0; i < messageSplitArray.length; i++) {
			let result = Number(encodeTextareaElement.value.charCodeAt(i));
			encodedMessageArray.push(String.fromCharCode(result + 1))
		}
	}

	function decodeMessage() {
		let messageSplitArray = Array.from(decodeTextareaElement.value.split(''));
		for (let i = 0; i < messageSplitArray.length; i++) {
			let result = Number(messageSplitArray[i].charCodeAt(0));
			decodedMessageArray.push(String.fromCharCode(result - 1))
		}
	}

	function clearArrays() {
		encodedMessageArray = [];
		decodedMessageArray = [];
	}
}