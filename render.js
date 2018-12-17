

function renderTable(players, dealer) {
  root.appendChild(dealerComponent(dealer));
  players.forEach(player => {
    root.appendChild(playerComponent(player));
  });
};

var render = {
  showBets: function (players) {
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
        clearInterval(cardOneInt);
        var cardTwoInt, b = 0;
        function dealSecondCard() {
          /* ... logic ... */
          var playerHand = document.getElementById("hand" + b + 0);
          playerHand.appendChild(cardComponent(b, 1, _players[b].hands[0][1].value, _players[b].hands[0][1].suit, 1))
          if (b < _players.length - 1) {
            b++;
          } else {
            clearInterval(cardTwoInt);
          };
        }
        cardTwoInt = setInterval(dealSecondCard, 1000);
        console.log("showing the deal....");
      }
    }

    cardOneInt = setInterval(dealFirstCard, 1000);
  },
  showTurns: function (players) {
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