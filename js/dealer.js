function Dealer() {
  this.name = "Dealer",
    this.hands = [],
    this.dealSingleCard = function (isCardShowing) {
      var card = _deck[0];
      card.revealed = isCardShowing;
      _deck.shift();
      return card;
    },
    this.requestBets = function(players) {
      players.forEach((player) => {
//        console.log(player.name+" place your bet");
        player.hands[0].betsOut=0;
        player.placeBet(0);
      })
      
    },
    this.dealCards = function (players) {
      if (_deck.length < 25) {
        _deck = new gameDeck();
        this.dealCards(players);
      } else {
        for (i = 0; i < 2; i++) {
          if (i === 0) {
            this.hands.push(this.dealSingleCard(false));
          } else {
            this.hands.push(this.dealSingleCard(true));
          };
          players.forEach((player) => {
            if (player.activePlayer === true) {
              player.hands[0].push(this.dealSingleCard(true));
            } else {
//              console.log(player.name+" was skipped");
            };
            
          });
        }
      }
    },
    this.evaluateResults = function() {
      
    }
} 