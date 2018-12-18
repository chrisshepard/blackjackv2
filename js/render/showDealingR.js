function showDealingR() {
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
}