function playerComponent(player) {
  var playersPos = _players.map(function (e) { return e.name; }).indexOf(player.name);
  console.log(playersPos);

  var playerComponent = document.createElement("div");
  playerComponent.className = "player";
  playerComponent.id = "player" + playersPos;

  var headerBox = document.createElement("div");
  headerBox.className = "headerBox";
  headerBox.id = "header" + playersPos;

  var name = document.createElement("div");
  name.className = "name";
  name.id = "name" + playersPos;
  name.innerHTML = player.name;

  var bank = document.createElement("div");
  bank.className = "bank";
  bank.id = "bank" + playersPos;
  bank.innerHTML = "$" + player.money;

  headerBox.appendChild(name);
  headerBox.appendChild(bank);

  var cardArea = document.createElement("div");
  cardArea.className = "cardArea";
  cardArea.id = "cardArea" + playersPos;

  playerComponent.appendChild(headerBox);
  playerComponent.appendChild(cardArea);

  return playerComponent;

}

