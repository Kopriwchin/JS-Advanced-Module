function playGame(arrayMoves) {
	let isFinished = false;

	let gameBoard = [
		['false', 'false', 'false'],
		['false', 'false', 'false'],
		['false', 'false', 'false']
	]

	function checkIfWins(gameBoard) {
		let isFirstDiagonalWinner = gameBoard[0][0] === gameboard[1][1] && gameboard[1][1] === gameboard[2][2];
		let isSecondDiagonalWinner = gameboard[0][2] === gameboard[1][1] && gameboard[1][1] === gameboard[2][0];
		let isTopRowWinner = gameboard[0][0] === gameboard[0][1] && gameboard[0][1] === gameboard[0][1];
		let isLeftSideWinner = gameboard[0][0] === gameboard[1][0] && gameboard[1][0] === gameboard[2][0];
		let isRightSideWinner = gameboard[0][2] === gameboard[1][2] && gameboard[1][2] === gameboard[2][2];
		let isBottomSideWinner = gameboard[2][0] === gameboard[2][1] && gameboard[2][1] === gameboard[2][2];

		if (isFirstDiagonalWinner || isSecondDiagonalWinner) {
			if (gameboard[1][1] === 'X') {
				console.log('Player X wins!');
			} else {
				console.log('Player O wins!');
			}
		} else if (isTopRowWinner) {
			if (gameboard[0][0] === 'X') {
				console.log('Player X wins!');
			} else {
				console.log('Player O wins!');
			}
		} else if (isLeftSideWinner) {
			if (gameboard[0][0] === 'X') {
				console.log('Player X wins!');
			} else {
				console.log('Player O wins!');
			}
		} else if (isRightSideWinner) {
			if (gameboard[0][2] === 'X') {
				console.log('Player X wins!');
			} else {
				console.log('Player O wins!');
			}
		} else if (isBottomSideWinner) {
			if (gameboard[2][2] === 'X') {
				console.log('Player X wins!');
			} else {
				console.log('Player O wins!');
			}
		}
	}

	let index = 0;

	while (isFinished !== true) {
		for (let i = 0; i < arrayMoves.length; i++) {
			let move = arrayMoves[i].split(' ');
			if (gameBoard[move[0]][move[1]] === 'false') {
				if (index % 2 == 0) {
					gameBoard[move[0]][move[1]] = 'X';
				} else {
					gameBoard[move[0]][move[1]] = 'O';
				}
				index++;
			} else {
				console.log('This place is already taken. Please choose another!');
			} 
		}
		isFinished = true;
	}

	let result = '';
	for (let i = 0; i < gameBoard.length; i++) {
		for (let k = 0; k < gameBoard.length; k++) {
			result += gameBoard[i][k] + '\t';
		}
		console.log(result.trimEnd());
		result = '';
	}
}

playGame(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);