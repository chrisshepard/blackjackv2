function payout(result, player, hand) {
  console.log(result);
  // "W" "L" "P" "B"
  if (result === "W") {
    var profitLoss = (hand.betsOut * 2);
    player.money = player.money + (profitLoss);

  } else if (result === "L") {
    var profitLoss = hand.betsOut;
  } else if (result === "B") {
    var profitLoss = (hand.betsOut + (hand.betsOut * (3 / 2)))
    player.money = player.money + profitLoss
  } else if (result === "P") {
    player.money = player.money + hand.betsOut;
  } else {

  };
};