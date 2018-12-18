function clearTableR(players, dealer) {
  setTimeout(() => {
      var dealerCardArea = document.getElementById("dealerCardArea");
      dealerCardArea.innerHTML = "";
    }, 1000);
  players.forEach(function (player, position) {

    setTimeout(() => {
      var name = document.getElementById("name" + position);
      var cardArea = document.getElementById("cardArea" + position);
      cardArea.innerHTML = ""
      var name = document.getElementById("name" + position);
      name.removeAttribute("style")
    }, 2000 * (position + 1));
    
  })
}