

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
  showTurns: function (player) {
    var position = _players.map(function (e) { return e.name; }).indexOf(player.name);
    var name = document.getElementById("name" + position);
    player.hands.forEach(function (hand, handIndex) {
      setTimeout(() => {

        if (player.didPlayerSplit === true) {
          setTimeout(() => {
            var playersPos = _players.map(function (e) { return e.name; }).indexOf(player.name);
            var cardArea = document.getElementById("cardArea" + playersPos);
            var currentHand = document.getElementById("hand" + playersPos + handIndex);
            var newHand = handComponent(player, (handIndex + 1));
            var repeatCard = currentHand.lastChild;
            repeatCard.remove();

            newHand.appendChild(cardComponent(playersPos, (handIndex + 1), player.hands[1][0].value, player.hands[1][0].suit, 0));
            cardArea.appendChild(newHand);

            currentHand.appendChild(cardComponent(playersPos, handIndex, hand[1].value, hand[1].suit, 1));
            newHand.appendChild(cardComponent(playersPos, (handIndex + 1), player.hands[1][1].value, player.hands[1][1].suit, 1));

          }, 1000 * handIndex);
        };

        setTimeout(() => {
          var playersPos = _players.map(function (e) { return e.name; }).indexOf(player.name);
          hand.forEach(function (card, cardPos) {
            setTimeout(() => {
              if (cardPos <= 1) {

              } else {
                console.log(hand.cardsHitThisRound + player.name);
                var thisHand = document.getElementById("hand" + playersPos + handIndex);
                thisHand.appendChild(cardComponent(playersPos, handIndex, card.value, card.suit, cardPos));
              };
            }, 1000 * (cardPos - 1));
          })
        }, 1200);
        name.style.background = "blue";
      }, 3000 * handIndex);
    })
    console.log("showing the turns..." + player);
  },
  showDealerTurn: function (dealers) {
    console.log("showing the dealers turn..." + dealers);
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