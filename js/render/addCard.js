function addCard(player, handPos, card) {
  var playersPos = _players.map(function (e) { return e.name; }).indexOf(player.name);
  var handDiv = document.getElementById("hand" + playersPos+handPos);

  handDiv.appendChild(cardComponent(playersPos, handPos, card.value, card.suit, _players[playersPos].hands[handPos].length));
}