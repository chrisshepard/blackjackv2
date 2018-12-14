function calcHand(hand) {
  var valueCounter = 0;
  hand.hasAnAce = 0;
  hand.acesValuedAtOne= 0;
  hand.forEach(function(element, cardPos){
    var card=hand[cardPos];
    var value= card.value;
    if (value === "J" || value === "Q" || value === "K") {
      value=10;
    } else if (value ==="A") {
      value=11;
      hand.hasAnAce++;
    };
    valueCounter= valueCounter + value;
  });
  while (valueCounter > 21 && hand.hasAnAce > 0 && hand.hasAnAce !== hand.acesValuedAtOne) {
    valueCounter = valueCounter - 10;
    hand.acesValuedAtOne++;
  }
  hand.valueAsNumber = valueCounter;
  return valueCounter;
}