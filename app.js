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

// Current Code

function roundSequence() {
  _dealer.requestBets(_players);
  _dealer.dealCards(_players);
  turnSequence(_players);
  _dealer.turnDecision();
  _dealer.evaluateResults(_players);
};

roundSequence();

/* Future Code ****************************************************************
I want the code to execute task > render dom > give time for animations > repeat

*/

let requestBets = function () {               
  return new Promise(function (resolve, reject) {
    _dealer.requestBets(_players);                        //task
    resolve("Bet's Requested");
    reject(alert("Error"));
  });
};

let showBets = function () {
  return new Promise(function (resolve, reject) {
    render.showBets(_players);                            //render dom
    setTimeout(() => {                                    //give time for animation
      resolve("Bet's Displayed");
      reject(alert("Error"));
    }, 5000);

  });
}

let dealCards = function () {
  return new Promise(function (resolve, reject) {
    _dealer.dealCards(_players);                        //task
    resolve("Card's Dealt");
    reject();
  });
};

let showDealing = function () {
  return new Promise(function (resolve, reject) {
    render.showDealing(_players);                            //render dom
    setTimeout(() => {                                    //give time for animation
      resolve("Initial Deal Shown");
      reject();
    }, 10000);

  });
};

let playerTurns = function () {
  return new Promise(function (resolve, reject) {
    turnSequence(_players);                        //task
    resolve("Player's Took Turns");
    reject();
  });
};

let showTurns = function () {
  return new Promise(function (resolve, reject) {
    render.showTurns(_players);                            //render dom
    setTimeout(() => {                                    //give time for animation
      resolve("Player's Took Turns");
      reject();
    }, 20000);

  });
}

let dealerTurn = function () {
  return new Promise(function (resolve, reject) {
    _dealer.turnDecision();                        //task
    resolve("Dealer Took turn.");
    reject();
  });
};

let showDealerTurn = function () {
  return new Promise(function (resolve, reject) {
    render.showDealerTurn(_dealer);                            //render dom
    setTimeout(() => {                                    //give time for animation
      resolve("Dealer Turn Shown");
      reject();
    }, 3000);

  });
}

let checkResults = function () {
  return new Promise(function (resolve, reject) {
    _dealer.evaluateResults(_players);                        //task
    resolve("Dealer evaluated Players Hands");
    reject();
  });
};

let showResults = function () {
  return new Promise(function (resolve, reject) {
    render.evaluateResults(_players);                            //render dom
    setTimeout(() => {                                    //give time for animation
      resolve("Round results Shown");
      reject();
    }, 15000);

  });
}

//      do these in this sequence

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
}), then(function () {
  return dealerTurn();
}).then(function () {
  return showDealerTurn();
}).then(function () {
  return checkResults();
}).then(function () {
  return showResults();
});
