function showDealerTurnR(dealer) {
  setTimeout(() => {
    var thisHand = document.getElementById("handd0");
    thisHand.firstChild.classList.remove("facedown");
    dealer.hands.forEach(function (card, cardPos) {
      setTimeout(() => {
        if (cardPos <= 1) {

        } else {
          
          thisHand.appendChild(cardComponent("d", cardPos, card.value, card.suit, cardPos));
        };
      }, 1000 * (cardPos - 1));
    })
  }, 1200);
}
