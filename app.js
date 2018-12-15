var numberofdecks = 1;
var startingBankroll = 200;
var betPerRound = 25;
var numberOfRounds = 5;
var valueCounter = 0;
var root = document.getElementById("root");


var _deck = new gameDeck();

var _players = [new Player("Spongebob", 50, true),
new Player("Patrick", 50, false),
new Player("Sandy", 50, false),
new Player("Mr.Krabs", 50, false)];

var _dealer = new Dealer();

function turnSequence(players) {
  players.forEach(player => {
    for (handNum = 0; handNum < player.hands.length; handNum++) {
      console.log("It is " + player.name + "'s turn.");
      if (player.activePlayer === true) {
        player.computerDecision(handNum);
      };
    };
  })
};


/*
function roundSequence() {
  _dealer.requestBets(_players);
  _dealer.dealCards(_players);
  turnSequence(_players);
  _dealer.turnDecision();
  _dealer.evaluateResults(_players);
};

roundSequence();
*/


let requestBets = function () {               
  return new Promise(function (resolve, reject) {
    _dealer.requestBets(_players);
    resolve("Bet's Requested");
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
}



requestBets().then(function () {
  return showBets();
}).then(function () {
  return dealCards();
}).then(function () {
  return showDealing();
}).then(function () {
  return playerTurns();
}).then(function () {
  return showTurns();
}).then(function () {
  return dealerTurn();
}).then(function () {
  return showDealerTurn();
}).then(function () {
  return checkResults();
}).then(function () {
  return showResults();
});
