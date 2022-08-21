function solve(cardFace, cardSuit) {
    let faces = [
        '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
    ];

    let suits = [
        'S', 'H', 'D', 'C'
    ];
    let utfSuits = [
        '\u2660', '\u2665', '\u2666', '\u2663'
    ];

    if (!faces.some(x => x == cardFace)) {
        throw new Error();
    }

    if (!suits.some(x => x == cardSuit)) {
        throw new Error();
    }

    let cardObj = {
        cardFace,
        cardSuit,
        toString: function toString() {
            return `${this.cardFace + utfSuits[suits.indexOf(cardSuit)]}`;
        }
    };

    return cardObj.toString();
}
solve('A', 'S'); // A♠
solve('10', 'H'); // 10♥
solve('1', 'C'); // Error
solve('1', 'C', 'A'); // Error