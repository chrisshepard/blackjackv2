

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
  showTurns: function (players) { ////fix this, works 6/10 times
    players.forEach(function (player, playerIndex) {
      setTimeout(() => {
        player.hands.forEach(function (hand, handIndex) {

          setTimeout(() => {
            if (player.didPlayerSplit === true) {
              setTimeout(() => {
                var cardArea = document.getElementById("cardArea" + playerIndex);
                var currentHand = document.getElementById("hand" + playerIndex + handIndex);
                var newHand = handComponent(player, (handIndex + 1));
                var repeatCard = currentHand.lastChild;
                repeatCard.remove();

                newHand.appendChild(cardComponent(playerIndex, (handIndex + 1), player.hands[1][0].value, player.hands[1][0].suit, 0));
                cardArea.appendChild(newHand);

                currentHand.appendChild(cardComponent(playerIndex, handIndex, hand[1].value, hand[1].suit, 1));
                newHand.appendChild(cardComponent(playerIndex, (handIndex + 1), player.hands[1][1].value, player.hands[1][1].suit, 1));

              }, 600 * handIndex);
            };
            var numCardsHit = hand.cardsHitThisRound;
            console.log(numCardsHit + player.name);
            if (numCardsHit !== 0) {
              for (i = 1; i < numCardsHit + 1; i++) {
                var cardPos = (i + 1);
                setTimeout(() => {
                  var playersPos = _players.map(function (e) { return e.name; }).indexOf(player.name);
                  var thisHand = document.getElementById("hand" + playersPos + handIndex);
                  thisHand.appendChild(cardComponent(playersPos, handIndex, hand[cardPos].value, hand[cardPos].suit, i));
                }, 1000 * cardPos);

              };
            } else {

            };

          }, 1000 * handIndex);
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
  split: function (player) {

  }
}