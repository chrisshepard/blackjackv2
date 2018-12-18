function turnSequence(players) {
  players.forEach(player => {
    for (handNum = 0; handNum < player.hands.length; handNum++) {
      console.log("It is " + player.name + "'s turn.");
      if (player.activePlayer === true) {
        if (player.isHuman ===true) {

        } else {
          player.computerDecision(handNum);
        }
        
      };
    };
  })
};