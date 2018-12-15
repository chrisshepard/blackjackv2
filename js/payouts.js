function payout(result, player, hand) {
  console.log(result);
  // "W" "L" "P" "B"
  if (result === "W") {
    var profitLoss = (hand.betsOut * 2);
    player.money = player.money + (profitLoss);
    //alert(player.name + " won $" + (profitLoss - hand.betsOut));
    hand.betsOut = 0;

  } else if (result === "L") {
    var profitLoss = hand.betsOut;
    hand.betsOut = 0;
    //alert(player.name + " lost $" + (profitLoss));
  } else if (result === "B") {
    var profitLoss = (hand.betsOut + (hand.betsOut * (3 / 2)))
    player.money = player.money + profitLoss
    //alert(player.name + " won $" + (profitLoss - hand.betsOut));
    hand.betsOut = 0;

  } else if (result === "P") {
    player.money = player.money + hand.betsOut;
    hand.betsOut = 0;
    //alert(player.name + " broke even.")
  } else if (result === null) {

  } else {
    console.log("PAYOUT ERROR");
  };
};