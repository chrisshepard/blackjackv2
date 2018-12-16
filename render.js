function renderTable(players, dealer) {
  root.appendChild(dealerComponent(dealer));
  players.forEach(player => {
    root.appendChild(playerComponent(player));
  });
};




var render = {
  showBets: function(players) {
    console.log("bets shown"+players);
  },
  showDealing: function(players) {
    console.log("showing the deal"+players);
  },
  showTurns: function(players) {
    console.log("showing the turns"+players);
  },
  showDealerTurn: function(dealer) {
    console.log("showing the dealers turn"+dealer);
  },
  showResults: function(players) {
    console.log("showing the results"+players);
  },
  clearTable:function(players) {
    console.log("reset for next round"+players);
  }, 
}