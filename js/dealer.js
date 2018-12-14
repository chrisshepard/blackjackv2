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
      players.forEach((player) => {
        //        console.log(player.name+" place your bet");
        player.hands[0].betsOut = 0;
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
    this.turnDecision = function () {
      var done = false;
      while (done === false) {
        var handTotal = calcHand(this.hands);
        if (handTotal >= 17) {
          done = true;
        } else if (handTotal < 17) {
          this.hitCard();
          console.log("hit card");
        };
      };
    },
    this.evaluateResults = function (players) {
      var dealerScore = calcHand(this.hands);
      players.forEach((player) => {
        player.hands.forEach((hand) => {
          var result;
          var handScore = calcHand(hand);
          if (handScore === 21) {
            alert(dealerScore + " " + handScore + " " + player.name + " got BlackJack!");
            result = "B";
          } else if (handScore === dealerScore) {
            alert(dealerScore + " " + handScore + " " + player.name + " pushed!");
            result = "P";
          } else if (handScore > 21) {
            alert(dealerScore + " " + handScore + " " + player.name + " lost!");
            result = "L";
          } else if (dealerScore > 21) {
            alert(dealerScore + " " + handScore + " " + player.name + " won! The Dealer Busted!");
            result = "W";
          } else if (handScore > dealerScore) {
            alert(dealerScore + " " + handScore + " " + player.name + " won!");
            result = "W"
          } else {
            alert(dealerScore + " " + handScore + " " + player.name + " lost!");
            result = "L"
          };
          payout(result, player, hand);
        })
      });


    }
}
