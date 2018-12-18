function splitHand(player,handIndex) {
  var playersPos = _players.map(function (e) { return e.name; }).indexOf(player.name);
  var cardArea = document.getElementById("cardArea" + playersPos);
  var currentHand = document.getElementById("hand" + playersPos + handIndex);
  var newHand = handComponent(player, (handIndex + 1));
  var repeatCard = currentHand.lastChild;
  var playerBank = document.getElementById("bank" + playersPos);
  repeatCard.remove();
  playerBank.innerHTML = player.money;

  setTimeout(() => {
    newHand.appendChild(cardComponent(playersPos, (handIndex + 1), player.hands[1][0].value, player.hands[1][0].suit, 0));
    cardArea.appendChild(newHand);
  }, 1000);
  setTimeout(() => {
    currentHand.appendChild(cardComponent(playersPos, handIndex, player.hands[handIndex][1].value, player.hands[handIndex][1].suit, 1));
  }, 1500);
  setTimeout(() => {
    newHand.appendChild(cardComponent(playersPos, (handIndex + 1), player.hands[1][1].value, player.hands[1][1].suit, 1));
  }, 2000);
}