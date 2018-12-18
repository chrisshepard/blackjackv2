function showDealerTurnR(dealer) {
  setTimeout(() => {
    dealer.hands.forEach(function (card, cardPos) {
      setTimeout(() => {
        if (cardPos <= 1) {

        } else {
          var thisHand = document.getElementById("handd0");
          thisHand.appendChild(cardComponent("d", cardPos, card.value, card.suit, cardPos));
        };
      }, 1000 * (cardPos - 1));
    })
  }, 1200);
}
