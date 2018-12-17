function handComponent(player, handPos) {
  var playersPos = _players.map(function (e) { return e.name; }).indexOf(player.name);


  var handComponent = document.createElement("div");
  handComponent.className="hand";
  handComponent.id="hand"+playersPos+handPos;

  var bettingBox= document.createElement("div");
  bettingBox.className="bettingBox";
  bettingBox.id="bettingBox"+playersPos+handPos
  bettingBox.innerHTML=player.hands[handPos].betsOut;

  handComponent.appendChild(bettingBox);

  return handComponent;

}




