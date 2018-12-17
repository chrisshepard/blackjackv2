

function renderTable(players, dealer) {
  root.appendChild(dealerComponent(dealer));
  players.forEach(player => {
    root.appendChild(playerComponent(player));
  });
};

var render = {
  showBets: function (players) {
    var dealerCardArea = document.getElementById("dealerCardArea");
    dealerCardArea.appendChild(handComponent(_dealer, 0));
    players.forEach(player => {
      var playersPos = _players.map(function (e) { return e.name; }).indexOf(player.name);
      var playersCardArea = document.getElementById("cardArea" + playersPos);
      playersCardArea.appendChild(handComponent(player, 0));

      var playersBank = document.getElementById("bank" + playersPos);
      playersBank.innerHTML = "$" + player.money;
    });
    console.log("bets showing..." + players);
  },
  showDealing: function () {
    var cardOneInt, i = 0;
    function dealFirstCard() {
      /* ... logic ... */
      var playerHand = document.getElementById("hand" + i + 0);
      playerHand.appendChild(cardComponent(i, 0, _players[i].hands[0][0].value, _players[i].hands[0][0].suit, 0))
      if (i < _players.length - 1) {
        i++;
      } else {
        var dealerHand = document.getElementById("handd0");
        dealerHand.appendChild(cardComponent("d", 0, _dealer.hands[0].value, _dealer.hands[0].suit, 0))
        clearInterval(cardOneInt);
        var cardTwoInt, b = 0;
        function dealSecondCard() {
          /* ... logic ... */
          var playerHand = document.getElementById("hand" + b + 0);
          playerHand.appendChild(cardComponent(b, 1, _players[b].hands[0][1].value, _players[b].hands[0][1].suit, 1))
          if (b < _players.length - 1) {
            b++;
          } else {
            var dealerHand = document.getElementById("handd0");
            dealerHand.appendChild(cardComponent("d", 1, _dealer.hands[1].value, _dealer.hands[1].suit, 1))
            clearInterval(cardTwoInt);
          };
        }
        cardTwoInt = setInterval(dealSecondCard, 800);
        console.log("showing the deal....");
      }
    }
    cardOneInt = setInterval(dealFirstCard, 800);
  },
  showTurns: function (players) {
    players.forEach(function (player, playerIndex) {
      setTimeout(() => {
        player.hands.forEach(function (hand, handIndex) {
          setTimeout(() => {
            var numCardsHit = hand.cardsHitThisRound;
            console.log(handIndex+numCardsHit+player.name);
          }, 2000 * handIndex);

        })
      }, 1000 * playerIndex);


    })
    console.log("showing the turns..." + players);
  },
  showDealerTurn: function (dealer) {
    console.log("showing the dealers turn..." + dealer);
  },
  showResults: function (players) {
    console.log("showing the results..." + players);
  },
  clearTable: function (players) {
    console.log("reset for next round...." + players);
  },
}