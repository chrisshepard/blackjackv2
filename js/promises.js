let requestBets = function () {
  return new Promise(function (resolve, reject) {
    _dealer.requestBets(_players);
    setTimeout(() => {
      resolve("Bet's Requested");
    }, 1000);

  });
};

let showBets = function () {
  return new Promise(function (resolve, reject) {
    showBetsR(_players);
    setTimeout(() => {
      resolve("Bet's Displayed");
    }, 5000);

  });
}

let dealCards = function () {
  return new Promise(function (resolve, reject) {
    _dealer.dealCards(_players);
    resolve("Card's Dealt");
  });
};

let showDealing = function () {
  return new Promise(function (resolve, reject) {
    showDealingR();
    setTimeout(() => {
      resolve("Initial Deal Shown");
    }, 7000);

  });
};

let playerTurns = function () {
  return new Promise(function (resolve, reject) {

    turnSequence(_players);
    resolve("Player's Took Turns");
  });
};

let showTurns = function () {
  return new Promise(function (resolve, reject) {

    _players.forEach(function (player, position) {
      setTimeout(() => {
        if (player.isHuman === true) {
          player.turnDecision(0);
        } else {
          showTurnsR(player);
        }

      }, 4000 * (position + 1));
    })
    setTimeout(() => {
      resolve("Player's Took Turns");
    }, 20000);
  });
}

let dealerTurn = function () {
  return new Promise(function (resolve, reject) {
    _dealer.turnDecision();
    resolve("Dealer Took turn.");
  });
};

let showDealerTurn = function () {
  return new Promise(function (resolve, reject) {
    showDealerTurnR(_dealer);
    setTimeout(() => {
      resolve("Dealer Turn Shown");
    }, 3000);

  });
}

let checkResults = function () {
  return new Promise(function (resolve, reject) {
    _dealer.evaluateResults(_players);
    resolve("Dealer evaluated Players Hands");
  });
};

let showResults = function () {
  return new Promise(function (resolve, reject) {
    showResultsR(_players);
    setTimeout(() => {
      resolve("Round results Shown");
    }, 12000);

  });
};

let prepareForNextRound = function () {
  return new Promise(function (resolve, reject) {
    _dealer.clearTable(_players);
    resolve("table cleared");
  });
};

let clearTable = function () {
  return new Promise(function (resolve, reject) {
    clearTableR(_players, _dealer);
    setTimeout(() => {
      resolve("round over");
    }, 5000);

  });
};