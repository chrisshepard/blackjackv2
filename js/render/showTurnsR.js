function showTurnsR(player) {
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
          var playerBank = document.getElementById("bank" + playersPos);
          repeatCard.remove();
          playerBank.innerHTML = player.money;

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
}