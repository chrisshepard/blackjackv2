function showBetsR(players) {
  var dealerCardArea = document.getElementById("dealerCardArea");
  dealerCardArea.appendChild(handComponent(_dealer, 0));
  players.forEach(player => {
    var playersPos = _players.map(function (e) { return e.name; }).indexOf(player.name);
    var playersCardArea = document.getElementById("cardArea" + playersPos);
    playersCardArea.appendChild(handComponent(player, 0));

    var playersBank = document.getElementById("bank" + playersPos);
    playersBank.innerHTML = "$" + player.money;
  });
  console.log("bets showing..." + players);
};