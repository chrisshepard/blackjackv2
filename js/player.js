function Player(name, money, isHuman) {
  this.name = name,
    this.money = money,
    this.isHuman = isHuman,
    this.hasInsurance = false,
    this.isDoubledDown = false,
    this.activePlayer = false,
    this.didPlayerSplit = false,
    this.hands = [[]],
    this.hitCard = function (handPos) {
      this.hands[handPos].push(_dealer.dealSingleCard(true));
    },
    this.placeBet = function (handPos) {
      if (betPerRound <= this.money) {
        this.hands[handPos].betsOut = this.hands[handPos].betsOut + betPerRound;
        this.money = this.money - betPerRound;
        this.activePlayer = true;
      } else {
      };
    },
    this.doubleDown = function (handPos) {
      this.placeBet(handPos);
      this.hitCard(handPos);
      this.isDoubledDown = true;
    },
    this.insurance = function () {
      this.placeBet(handPos);
      this.hasInsurance = true;
    },
    this.split = function (handPos) {
      var duplicateValueCard = this.hands[handPos][1];
      this.hands[handPos].pop();
      this.hands.push([duplicateValueCard]);
      this.hands[handPos + 1].betsOut = 0;
      this.placeBet(handPos + 1);
      this.hitCard(handPos);
      this.hitCard(handPos + 1);
      this.didPlayerSplit = true;

    },
    this.turnDecision = function (handPos) {
      var howLongShouldIWait = 5000;
      if (this.hands[handPos][0].value === this.hands[handPos][1].value && this.hands[handPos].length === 2) {
        console.log(this.name + " can split hand");
        wantToSplit = confirm("Do you want to split your hand?");
        if (wantToSplit === true) {
          if (this.money >= betPerRound) {
            this.split(handPos);
            setTimeout(() => {
               splitHand(this, handPos);
            }, 500);
           
          } else {
            alert("Whoops, you're out of money");
          };
        };
      };
      var handTotal = calcHand(this.hands[handPos]);
      var handHasAce = false;
      if (this.hands[handPos][0].value === "A" || this.hands[handPos][1].value === "A") {
        handHasAce = true;
      }
      if (handTotal > 21) {
        alert("You busted!");
      } else {
        var dealerUpCard = _dealer.hands[1].value;
        if (dealerUpCard === "J" || dealerUpCard === "Q" || dealerUpCard === "K") {
          dealerUpCard = 10;
        } else if (dealerUpCard === "A") {
          dealerUpCard = 11;
        };
        if (handHasAce === false) {
          wantToHit = confirm("Do you want to hit a card? HandTotal=" + handTotal + " Basic Strategy Recommends: " + basicStrategy[handTotal][dealerUpCard]);
        } else if (handHasAce === true && this.hands[handPos].acesValuedAtOne === 0) {
          wantToHit = confirm("Do you want to hit a card? HandTotal=" + handTotal + " Ace Strategy Recommends: " + aceStrategy[handTotal - 11][dealerUpCard]);
        } else {
          wantToHit = confirm("Do you want to hit a card? HandTotal=" + handTotal + " Basic Strategy Recommends: " + basicStrategy[handTotal][dealerUpCard]);
        }

        if (wantToHit === true) {
          var card = _dealer.dealSingleCard(true)
          this.hands[handPos].push(card);
          addCard(this, handPos, card);
          setTimeout(() => {
            this.turnDecision(handPos);
          }, 800);

          
        }

      };
    },
    this.computerDecision = function (handPos) {
      if (this.hands[handPos][0].value === this.hands[handPos][1].value && this.hands[handPos].length === 2) {
        this.split(handPos);
      };
      var handTotal = calcHand(this.hands[handPos]);
      if (handTotal > 21) {
      } else {
        var dealerUpCard = _dealer.hands[1].value;
        if (dealerUpCard === "J" || dealerUpCard === "Q" || dealerUpCard === "K") {
          dealerUpCard = 10;
        } else if (dealerUpCard === "A") {
          dealerUpCard = 11;
        };
        var aceInInitialHand = false;
        if (this.hands[handPos][0].value=== "A" || this.hands[handPos][1].value ==="A") {
          aceInInitialHand = true;
        };
        if (this.hands[handPos].hasAnAce === 0) {
          var strategyResult = basicStrategy[handTotal][dealerUpCard];
          if (strategyResult === "H") {
            this.hitCard(handPos);
            this.computerDecision(handPos);
          } else if (strategyResult === "D") {
            this.doubleDown(handPos);
          } else if (strategyResult === "S") {
          } else {

          };
        } else if (aceInInitialHand === true && this.hands[handPos].valueAsNumber < 21) {
          var softCard = handTotal - 11;
          strategyResult = aceStrategy[softCard][dealerUpCard];
          console.log("ace-used"+this.name+softCard);
          if (strategyResult === "H") {
            this.hitCard(handPos);
            this.computerDecision(handPos);
          } else if (strategyResult === "D") {
            this.doubleDown(handPos);
          } else if (strategyResult === "S") {
          } else {

          };
        }

      }
    }
};
