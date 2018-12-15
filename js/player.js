function Player(name, money, isHuman) {
  this.name = name,
    this.money = money,
    this.isHuman = isHuman,
    this.hasInsurance = false,
    this.isDoubledDown = false,
    this.activePlayer = false,
    this.hands = [[]],
    this.hitCard = function (handPos) {
      this.hands[handPos].push(_dealer.dealSingleCard(true));
      this.hands[handPos].cardsHitThisRound++;
    },
    this.placeBet = function (handPos) {
      //      console.log(this.name + " placed bet");
      if (betPerRound <= this.money) {
        this.hands[handPos].betsOut = this.hands[handPos].betsOut + betPerRound;
        this.money = this.money - betPerRound;
        this.activePlayer = true;
      } else {
        //        console.log("You do not have enough money, you have lost the game");
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
    },
    this.turnDecision = function (handPos) {
      if (this.hands[handPos][0].value === this.hands[handPos][1].value && this.hands[handPos].length === 2) {
        console.log(this.name + " can split hand");
        wantToSplit = confirm("Do you want to split your hand?");
        if (wantToSplit === true) {
          if (this.money >= betPerRound) {
            this.split(handPos);
          } else {
            alert("Whoops, you're out of money");
          };
        };
      };
      var handTotal = calcHand(this.hands[handPos]);
      if (handTotal > 21) {
        alert(this.name + " busted!");
      } else {
        var dealerUpCard = _dealer.hands[1].value;
        if (dealerUpCard === "J" || dealerUpCard === "Q" || dealerUpCard === "K") {
          dealerUpCard = 10;
        } else if (dealerUpCard === "A") {
          dealerUpCard = 11;
        };
        wantToHit = confirm(this.name + ": Do you want to hit a card? HandTotal=" + handTotal + " Basic Strategy Recommends: " + basicStrategy[handTotal][dealerUpCard]);
        if (wantToHit === true) {
          this.hitCard(handPos);
          this.turnDecision(handPos);
        }

      };
    },
    this.computerDecision = function (handPos) {
      if (this.hands[handPos][0].value === this.hands[handPos][1].value && this.hands[handPos].length === 2) {
        this.split(handPos);
      };
      var handTotal = calcHand(this.hands[handPos]);
      if (handTotal > 21) {
        //alert(this.name + " busted!");
      } else {
        var dealerUpCard = _dealer.hands[1].value;
        if (dealerUpCard === "J" || dealerUpCard === "Q" || dealerUpCard === "K") {
          dealerUpCard = 10;
        } else if (dealerUpCard === "A") {
          dealerUpCard = 11;
        };
        var strategyResult = basicStrategy[handTotal][dealerUpCard];
        if (strategyResult === "H") {
          this.hitCard(handPos);
          this.computerDecision(handPos);
        } else if (strategyResult === "D") {
          this.doubleDown(handPos);
        } else if (strategyResult === "S") {
        } else {
          alert("ERR");
        };
      }
    }
};
