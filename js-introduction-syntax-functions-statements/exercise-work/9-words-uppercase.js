function wordsToUppercase(input) {
	const result = input.match(/\w+/gm);
	
	console.log(result.join(', ').toUpperCase())
}

wordsToUppercase('Hi, how are you?'); // HI, HOW, ARE, YOU
wordsToUppercase('hello'); // HELLO