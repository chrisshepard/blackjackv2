var numberofdecks = 1;
var startingBankroll = 200;
var betPerRound = 25;
var numberOfRounds = 5;
var valueCounter = 0;
var root = document.getElementById("root");


var _deck = new gameDeck();

var _players = [new Player("Spongebob", 50),
new Player("Patrick", 50),
new Player("Sandy", 50),
new Player("Mr.Krabs", 50)];

var _dealer = new Dealer();


function roundSequence() {
  _dealer.requestBets(_players);
  _dealer.dealCards(_players);
  for (i = 0; i < _players.length; i++) {
    for (handNum = 0; handNum < _players[i].hands.length; handNum++) {
      console.log("It is "+_players[i].name+"'s turn.");
      if (_players[i].activePlayer === true) {
        _players[i].turnDecision(handNum);
      };
    };
  };
  _dealer.turnDecision();
  _dealer.evaluateResults(_players);

};

roundSequence();
