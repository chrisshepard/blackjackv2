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
    render.showBets(_players);
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
    render.showDealing(_players);
    setTimeout(() => {
      resolve("Initial Deal Shown");
    }, 10000);

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
    render.showTurns(_players);
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
    render.showDealerTurn(_dealer);
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
    render.showResults(_players);
    setTimeout(() => {
      resolve("Round results Shown");
    }, 15000);

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
    render.clearTable(_players);
    setTimeout(() => {
      resolve("round over");
    }, 5000);

  });
};