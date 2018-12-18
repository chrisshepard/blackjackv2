function Dealer() {
  this.name = "Dealer",
    this.hands = [],
    this.hitCard = function () {
      this.hands.push(this.dealSingleCard(true));
    },
    this.dealSingleCard = function (isCardShowing) {
      var card = _deck[0];
      card.revealed = isCardShowing;
      _deck.shift();
      return card;
    },
    this.requestBets = function (players) {
      players.forEach((player, position) => {
        if (player.isHuman === true) {
          player.hands[0].betsOut = 0;
          player.placeBet(0);
          //************************************************************************************USER INPUT BET
        } else {
          player.hands[0].betsOut = 0;
          player.placeBet(0);
          console.log("betplaced");
        }
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
            };

          });
        }
      }
    },
    this.turnDecision = function () {
      var done = false;
      while (done === false) {
        var handTotal = calcHand(this.hands);
        if (handTotal >= 17) {
          done = true;
        } else if (handTotal < 17) {
          this.hitCard();
        };
      };
    },
    this.evaluateResults = function (players) {
      var dealerScore = calcHand(this.hands);
      players.forEach((player) => {
        player.hands.forEach((hand) => {
          var result;
          var handScore = calcHand(hand);
          if (handScore === 0) {
            console.log(player.name + " didnt participate in this round.");
            result = null;
          } else if (handScore === 21) {
            result = "B";
            hand.profitLoss = "B";
          } else if (handScore === dealerScore) {
            result = "P";
            hand.profitLoss = "P";
          } else if (handScore > 21) {
            result = "L";
            hand.profitLoss = "L";
          } else if (dealerScore > 21) {
            result = "W";
            hand.profitLoss = "W";
          } else if (handScore > dealerScore) {
            result = "W"
            hand.profitLoss = "W";
          } else {
            result = "L"
            hand.profitLoss = "L";
          };
          payout(result, player, hand);
        })
      });
    },
    this.clearTable = function(players) {
      players.forEach(player => {
        player.hands= [[]];
      });
      this.hands = [];
    }
}
