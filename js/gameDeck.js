function gameDeck() {
    var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    var suits = [
        "Hearts",
        "Spades",
        "Clubs",
        "Diamonds"
    ];
    var deck = [];
    for (i = 0; i < numberofdecks; i++) {
        suits.forEach(function (element, suitPosition) {
            values.forEach(function (element, position) {
                if (suitPosition === 0 || suitPosition === 3) {
                    var cardColor = "Red"
                } else {
                    var cardColor = "Black"
                };
                deck.push(
                    {
                        suit: suits[suitPosition],
                        value: values[position],
                        color: cardColor
                    })
            }, this);
        }, this);
    };

    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    };
    return deck;
}