function showResultsR(players) {
  players.forEach(function(player, position){
    setTimeout(() => {
      player.hands.forEach(function(hand, handPos){
        setTimeout(() => {
          var handZone = document.getElementById("hand"+position+handPos);
          var moneyBox = document.getElementById("bank"+position);
          if(hand.profitLoss === "W"){
            var moneyReturn = (hand.betsOut * 2);
            handZone.innerHTML = player.name+ " won $"+ (moneyReturn - hand.betsOut);
            moneyBox.innerHTML = player.money;
          } else if (hand.profitLoss === "L"){
            var moneyReturn = hand.betsOut;
            handZone.innerHTML = player.name + " lost $" + (moneyReturn);
            moneyBox.innerHTML = player.money;
          } else if (hand.profitLoss === "B"){
            var moneyReturn = (hand.betsOut + (hand.betsOut * (3 / 2)));
            handZone.innerHTML = player.name + " won $" + (moneyReturn - hand.betsOut)
            moneyBox.innerHTML = player.money;
          } else if (hand.profitLoss === "P") {
            handZone.innerHTML = player.name + " broke even.";
            moneyBox.innerHTML = player.money;
          }
        }, 500 * (handPos+1));
      })

    }, 1000 * (position+1));
  })

}